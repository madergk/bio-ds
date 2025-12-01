#!/usr/bin/env node

/**
 * Script de sincronización con Figma
 * 
 * Este script ayuda a:
 * 1. Verificar que los tokens están listos para exportar a Figma
 * 2. Generar un resumen de cambios
 * 3. Validar antes de sincronizar
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colores para la consola
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function main() {
  log('\n🔄 Sincronización de Tokens con Figma\n', 'cyan');
  log('='.repeat(50), 'blue');

  // Verificar que los tokens existen
  const tokensDir = path.join(__dirname, '..', 'tokens');
  if (!fs.existsSync(tokensDir)) {
    log('\n❌ Carpeta tokens/ no encontrada', 'red');
    process.exit(1);
  }

  const files = fs.readdirSync(tokensDir).filter(file => file.endsWith('.json'));
  
  if (files.length === 0) {
    log('\n❌ No se encontraron archivos de tokens', 'red');
    process.exit(1);
  }

  log(`\n📁 Archivos de tokens encontrados: ${files.length}`, 'blue');
  files.forEach(file => log(`   ✓ ${file}`, 'green'));

  // Validar tokens antes de sincronizar
  log('\n🔍 Validando tokens...', 'blue');
  try {
    execSync('npm run tokens:validate', { stdio: 'inherit' });
    log('\n✅ Tokens válidos', 'green');
  } catch (error) {
    log('\n❌ Validación fallida. Corrige los errores antes de sincronizar.', 'red');
    process.exit(1);
  }

  // Reconstruir tokens generados
  log('\n🔨 Reconstruyendo tokens generados...', 'blue');
  try {
    execSync('npm run tokens:build', { stdio: 'inherit' });
    log('\n✅ Tokens generados correctamente', 'green');
  } catch (error) {
    log('\n❌ Error al generar tokens', 'red');
    process.exit(1);
  }

  // Instrucciones para Figma
  log('\n' + '='.repeat(50), 'blue');
  log('\n📋 PRÓXIMOS PASOS EN FIGMA:', 'cyan');
  log('\n1. Abre Figma Desktop o Figma en el navegador', 'yellow');
  log('2. Ve a Plugins → Figma Tokens → Open', 'yellow');
  log('3. Haz clic en "Import" o "Sync"', 'yellow');
  log(`4. Selecciona la carpeta: ${tokensDir}`, 'yellow');
  log('5. Los tokens se actualizarán en Figma', 'yellow');
  
  log('\n💡 TIP: Si usas GitHub Sync, los tokens se sincronizarán automáticamente', 'cyan');
  
  log('\n' + '='.repeat(50), 'blue');
  log('\n✅ Listo para sincronizar con Figma!\n', 'green');
}

main();

