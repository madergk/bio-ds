# Build Issues & Known Problems

## ⚠️ Current Build Issue

### Version Compatibility Problem

**Status**: Known issue, needs resolution before production deployment

**Problem**: 
The build fails with error: `Cannot read properties of undefined (reading 'ParseForTypeErrors')`

**Root Cause**:
There is a version mismatch between:
- Angular CLI / Build Tools: Version 21.x
- Angular Core: Version 17.x

The `ng-packagr@21.0.0` and `@angular-devkit/build-angular@21.0.1` expect Angular 21, but the project uses Angular 17.

**Impact**:
- Production builds (`npm run build:library`) currently fail
- Development builds (`npm run build`) also fail
- This blocks publishing to npm

**Temporary Workaround**:
The CI/CD pipeline has `continue-on-error: true` set for the build step to allow other checks to run.

**Solutions** (choose one):

#### Option 1: Downgrade Build Tools (Recommended for stability)
```bash
npm install --save-dev --legacy-peer-deps \
  "@angular-devkit/build-angular@~17.0.0" \
  "@angular-devkit/core@~17.0.0" \
  "@angular/cli@~17.0.0" \
  "ng-packagr@~17.0.0"
```

**Pros**: Matches Angular 17 peer dependencies
**Cons**: May conflict with Storybook 8.6.14 which might need newer versions

#### Option 2: Upgrade Angular to 21
```bash
npm install --save-dev --legacy-peer-deps \
  "@angular/animations@^21.0.0" \
  "@angular/common@^21.0.0" \
  "@angular/compiler@^21.0.0" \
  "@angular/core@^21.0.0" \
  "@angular/forms@^21.0.0" \
  "@angular/platform-browser@^21.0.0" \
  "@angular/platform-browser-dynamic@^21.0.0" \
  "@angular/router@^21.0.0"
```

**Pros**: Aligns with build tools
**Cons**: Requires testing all components, may have breaking changes

#### Option 3: Use Compatible Versions
Research and find a middle ground version that works with both Angular 17 and Storybook 8.6.14.

**Recommended Action**:
1. Test Option 1 first (downgrade build tools)
2. If Storybook breaks, try Option 3 (find compatible versions)
3. Only use Option 2 (upgrade Angular) if necessary and after thorough testing

---

## ✅ Resolved Issues

None yet - this is the first known issue.

---

## 📝 Testing Build

To test if the build works after applying a fix:

```bash
# Clean build
npm run build:clean

# Or just build
npm run build:library
```

Expected output should end with:
```
✔ Browser application bundle generation complete.
✔ Copying assets complete.
✔ Index html generation complete.
```

---

## 🔍 Debugging Build Issues

If you encounter build errors:

1. **Check Angular versions**:
   ```bash
   npx ng version
   ```

2. **Clear caches**:
   ```bash
   rm -rf node_modules/.cache
   rm -rf .angular
   npm cache clean --force
   ```

3. **Clean install**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   ```

4. **Check TypeScript errors**:
   ```bash
   npx tsc --noEmit
   ```

5. **Check linting**:
   ```bash
   npm run lint
   ```

---

## 📚 Related Documentation

- [BUILD_SCRIPTS.md](./BUILD_SCRIPTS.md) - Explanation of build commands
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Publishing guide
- [package.json](./package.json) - Dependency versions

