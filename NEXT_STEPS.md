# 🚀 Next Steps to Publish Bio Design System

## Current Status: 95% Ready for Production

### ✅ What's Already Done:
- Git repository initialized and pushed to GitHub
- CI/CD workflows configured
- Testing infrastructure set up
- Build tools downgraded to Angular 17 (compatible versions)
- All documentation created

### 📋 What You Need to Do Now:

---

## Step 1: Verify Build Works ⚠️ **DO THIS FIRST**

Open your terminal and run:

```bash
npm run build:clean
```

### Expected Success Output:
```
> @madergk/bio-ds@0.1.1 build:clean
> rm -rf dist && npm run build:library

Building Design Tokens...
✔ Building entry point 'bio-ds'
✔ Writing package metadata
✔ Copying assets
✔ Built bio-ds

Build at: 2024-12-01 - Hash: xxxxxxxxxxxx
```

### If It Fails:
Copy the **entire error message** and share it. The most common issues are:
- Version mismatch (should be fixed already)
- Missing dependencies (run `npm install --legacy-peer-deps`)
- TypeScript errors (need to fix in code)

---

## Step 2: Verify Build Output

```bash
ls -la dist/bio-ds/
```

You should see:
```
drwxr-xr-x  fesm2022/
-rw-r--r--  index.d.ts
-rw-r--r--  package.json
-rw-r--r--  README.md
-rw-r--r--  styles.css
```

---

## Step 3: Test Publication (Dry Run)

```bash
npm run release:dry-run
```

This will:
1. Clean build the library
2. Simulate publishing (without actually publishing)
3. Show you exactly what files would be published

### Expected Output:
```
npm notice 📦  @madergk/bio-ds@0.1.1
npm notice === Tarball Contents ===
npm notice 1.2kB  package.json
npm notice 3.5kB  README.md
npm notice 15.2kB fesm2022/bio-ds.mjs
npm notice 2.1kB  index.d.ts
npm notice === Tarball Details ===
npm notice name:          @madergk/bio-ds
npm notice version:       0.1.1
npm notice filename:      madergk-bio-ds-0.1.1.tgz
npm notice package size:  XX.X kB
npm notice unpacked size: XX.X kB
npm notice total files:   XX
```

---

## Step 4: Login to npm (If Not Already)

```bash
npm login
```

You'll need:
- npm username
- npm password
- email
- 2FA code (if enabled)

---

## Step 5: Publish! 🎉

```bash
npm run release:patch
```

This will automatically:
1. ✅ Run lint
2. ✅ Run tests
3. ✅ Validate tokens
4. ✅ Build clean
5. ✅ Verify build
6. ✅ Increment version to 0.1.2
7. ✅ Create git commit
8. ✅ Create git tag
9. ✅ Publish to npm
10. ✅ Push to GitHub

### Expected Success Output:
```
> @madergk/bio-ds@0.1.1 release:validate
✔ Lint passed
✔ Tests passed
✔ Tokens validated
✔ Build successful
✔ Build verified

v0.1.2

> @madergk/bio-ds@0.1.2 publish
+ @madergk/bio-ds@0.1.2
```

---

## Step 6: Verify Publication

```bash
npm view @madergk/bio-ds
```

You should see your package info:
```
@madergk/bio-ds@0.1.2 | MIT | deps: 1 | versions: 2
Bio Design System - Angular component library
https://github.com/madergk/bio-ds#readme

keywords: angular, design-system, component-library, bootstrap, css-modules

dist
.tarball: https://registry.npmjs.org/@madergk/bio-ds/-/bio-ds-0.1.2.tgz
```

---

## Troubleshooting Common Errors

### Error: "Cannot read properties of undefined (reading 'ParseForTypeErrors')"
**Solution:** Build tools version mismatch
```bash
npm install --save-dev --legacy-peer-deps \
  "@angular-devkit/build-angular@~17.3.0" \
  "@angular-devkit/core@~17.3.0" \
  "@angular/cli@~17.3.0" \
  "ng-packagr@~17.3.0"
```

### Error: "You need to authenticate"
**Solution:** Login to npm
```bash
npm login
```

### Error: "You do not have permission to publish"
**Solution:** Check package name availability
```bash
npm view @madergk/bio-ds
```
If taken, change name in package.json

### Error: "Package version already exists"
**Solution:** Version 0.1.1 is already published, increment version
```bash
npm run version:patch  # Changes to 0.1.2
```

---

## After Publishing

### 1. Test Installation in Another Project

```bash
mkdir test-project
cd test-project
npm init -y
npm install @madergk/bio-ds
```

### 2. Update CHANGELOG.md

Add the new version to CHANGELOG.md:

```markdown
## [0.1.2] - 2024-12-01

### Fixed
- Fixed build tool version compatibility
- Resolved Angular 17 vs build tools v21 mismatch

### Technical Details
- Downgraded build tools to v17.3.0
- All builds now successful
```

### 3. Commit and Push Changes

```bash
git add CHANGELOG.md
git commit -m "docs: update CHANGELOG for v0.1.2"
git push
```

---

## Future Releases

For future releases, the process is simpler:

```bash
# 1. Make changes and commit
git add .
git commit -m "feat: add new component"

# 2. Update CHANGELOG.md

# 3. Publish
npm run release:patch   # for bugfixes (0.1.2 → 0.1.3)
npm run release:minor   # for features (0.1.2 → 0.2.0)
npm run release:major   # for breaking changes (0.1.2 → 1.0.0)
```

---

## Optional: Configure NPM_TOKEN for GitHub Actions

To enable automatic publishing via GitHub Actions:

1. Get npm token: https://www.npmjs.com/settings/YOUR_USERNAME/tokens
2. Create **Automation** token
3. Copy token
4. Go to: https://github.com/madergk/bio-ds/settings/secrets/actions
5. New repository secret:
   - Name: `NPM_TOKEN`
   - Value: (paste token)

Now when you create a GitHub Release, it will automatically publish to npm!

---

## Summary

**Current blocker:** Need to verify build works with `npm run build:clean`

**Once build works:** You're ready to publish with `npm run release:patch`

**After publishing:** Your package will be live at https://www.npmjs.com/package/@madergk/bio-ds

---

**Questions?** Check:
- [BUILD_ISSUES.md](./BUILD_ISSUES.md) - Known build problems and solutions
- [BUILD_SCRIPTS.md](./BUILD_SCRIPTS.md) - Detailed script explanations
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Publishing guide
- [TESTING.md](./TESTING.md) - Testing guide

---

**Last Updated:** December 2024
**Status:** Waiting for build verification ✅
