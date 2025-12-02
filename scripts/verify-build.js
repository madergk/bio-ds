#!/usr/bin/env node

/**
 * Build Verification Script
 *
 * Verifica que el build se haya completado correctamente antes de publicar.
 * Similar a verificar que todos los assets de Figma están exportados correctamente.
 */

import { existsSync, readFileSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const distPath = join(projectRoot, 'dist', 'bio-ds');

const REQUIRED_FILES = [
  'index.d.ts',
  'package.json'
];

const OPTIONAL_FILES = [
  'styles.css'  // Puede no existir si los estilos están embebidos
];

const REQUIRED_DIRS = [
  'fesm2022'
];

console.log('🔍 Verificando build...\n');

// Verificar que existe la carpeta dist
if (!existsSync(distPath)) {
  console.error('❌ Error: La carpeta dist/bio-ds no existe.');
  console.error('   Ejecuta: npm run build:library');
  process.exit(1);
}

// Verificar archivos requeridos
let hasErrors = false;

REQUIRED_FILES.forEach(file => {
  const filePath = join(distPath, file);
  if (!existsSync(filePath)) {
    console.error(`❌ Error: Falta el archivo requerido: ${file}`);
    hasErrors = true;
  } else {
    const stats = statSync(filePath);
    if (stats.size === 0) {
      console.error(`❌ Error: El archivo está vacío: ${file}`);
      hasErrors = true;
    } else {
      console.log(`✅ ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
    }
  }
});

// Verificar archivos opcionales
OPTIONAL_FILES.forEach(file => {
  const filePath = join(distPath, file);
  if (existsSync(filePath)) {
    const stats = statSync(filePath);
    console.log(`✅ ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
  } else {
    console.log(`ℹ️  ${file} no encontrado (opcional, puede estar embebido en componentes)`);
  }
});

// Verificar directorios requeridos
REQUIRED_DIRS.forEach(dir => {
  const dirPath = join(distPath, dir);
  if (!existsSync(dirPath)) {
    console.error(`❌ Error: Falta el directorio requerido: ${dir}`);
    hasErrors = true;
  }
});

// Verificar package.json del build
const buildPackageJsonPath = join(distPath, 'package.json');
let buildPackageJson = null;
if (existsSync(buildPackageJsonPath)) {
  try {
    buildPackageJson = JSON.parse(readFileSync(buildPackageJsonPath, 'utf-8'));

    // Verificar que tiene los campos esenciales
    if (!buildPackageJson.name) {
      console.error('❌ Error: package.json del build no tiene "name"');
      hasErrors = true;
    }

    if (!buildPackageJson.version) {
      console.error('❌ Error: package.json del build no tiene "version"');
      hasErrors = true;
    }

    if (!buildPackageJson.main) {
      console.error('❌ Error: package.json del build no tiene "main"');
      hasErrors = true;
    }

    console.log(`✅ package.json válido (versión: ${buildPackageJson.version})`);
  } catch (error) {
    console.error('❌ Error: No se pudo leer package.json del build');
    console.error(`   ${error.message}`);
    hasErrors = true;
  }
}

// Verificar que el archivo principal existe (usa el package.json ya leído)
if (buildPackageJson && buildPackageJson.main) {
  const mainFile = join(distPath, buildPackageJson.main.replace('dist/bio-ds/', ''));

  if (existsSync(mainFile)) {
    const stats = statSync(mainFile);
    const sizeKB = stats.size / 1024;

    if (sizeKB < 1) {
      console.error('❌ Error: El archivo principal está demasiado pequeño (posiblemente vacío)');
      hasErrors = true;
    } else {
      console.log(`\n📦 Archivo principal: ${buildPackageJson.main}`);
      console.log(`📦 Tamaño del bundle: ${sizeKB.toFixed(2)} KB`);

      // Advertencia si es muy grande
      if (sizeKB > 500) {
        console.warn('⚠️  Advertencia: El bundle es bastante grande. Considera optimizar.');
      }
    }
  } else {
    // Fallback: buscar el archivo con el nombre esperado
    const fallbackFile = join(distPath, 'fesm2022', 'madergk-bio-ds.mjs');
    if (existsSync(fallbackFile)) {
      const stats = statSync(fallbackFile);
      const sizeKB = stats.size / 1024;
      console.log(`\n📦 Archivo principal encontrado: fesm2022/madergk-bio-ds.mjs`);
      console.log(`📦 Tamaño del bundle: ${sizeKB.toFixed(2)} KB`);
      if (sizeKB > 500) {
        console.warn('⚠️  Advertencia: El bundle es bastante grande. Considera optimizar.');
      }
    } else {
      console.error(`❌ Error: No se encontró el archivo principal en: ${mainFile} ni en ${fallbackFile}`);
      hasErrors = true;
    }
  }
} else if (buildPackageJson) {
  console.warn('⚠️  Advertencia: package.json no tiene campo "main", verificando archivo por defecto...');
  const defaultFile = join(distPath, 'fesm2022', 'madergk-bio-ds.mjs');
  if (existsSync(defaultFile)) {
    const stats = statSync(defaultFile);
    const sizeKB = stats.size / 1024;
    console.log(`\n📦 Archivo principal encontrado: fesm2022/madergk-bio-ds.mjs`);
    console.log(`📦 Tamaño del bundle: ${sizeKB.toFixed(2)} KB`);
  } else {
    console.error(`❌ Error: No se encontró el archivo principal`);
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error('\n❌ La verificación del build falló. Corrige los errores antes de publicar.');
  process.exit(1);
} else {
  console.log('\n✅ Build verificado correctamente. Listo para publicar.');
  process.exit(0);
}

