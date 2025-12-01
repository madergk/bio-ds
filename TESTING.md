# Testing Guide

This document explains the testing setup and how to write tests for components in the Bio Design System.

## 🎯 Testing Philosophy

We follow these principles:
- **Test behavior, not implementation**: Focus on what components do, not how they do it
- **Test user interactions**: Simulate real user actions (clicks, inputs, etc.)
- **Test edge cases**: Cover error states, disabled states, boundary conditions
- **Keep tests simple**: Each test should verify one thing
- **Use descriptive names**: Test names should clearly describe what they verify

## 🛠️ Testing Setup

### Framework
- **Karma**: Test runner
- **Jasmine**: Testing framework
- **Angular Testing Utilities**: Component testing helpers

### Configuration Files
- `karma.conf.js`: Karma configuration
- `tsconfig.spec.json`: TypeScript config for tests
- `src/test.ts`: Test entry point

### Running Tests

```bash
# Run tests once (CI mode)
npm test -- --watch=false --browsers=ChromeHeadless

# Run tests in watch mode (development)
npm test

# Run tests with coverage
npm test -- --code-coverage

# Run specific test file
npm test -- --include='**/button.component.spec.ts'
```

## 📝 Writing Tests

### Test File Structure

Test files should be named `*.component.spec.ts` and placed next to the component file.

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YourComponent } from './your.component';

describe('YourComponent', () => {
  let component: YourComponent;
  let fixture: ComponentFixture<YourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(YourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests...
});
```

### Common Test Patterns

#### 1. Testing Default Values

```typescript
it('should have default variant as primary', () => {
  expect(component.variant).toBe('primary');
});
```

#### 2. Testing Input Properties

```typescript
it('should accept all variant types', () => {
  const variants: VariantType[] = ['primary', 'secondary', 'danger'];
  
  variants.forEach(variant => {
    component.variant = variant;
    expect(component.variant).toBe(variant);
  });
});
```

#### 3. Testing CSS Classes

```typescript
it('should apply correct CSS classes', () => {
  component.variant = 'secondary';
  component.size = 'lg';
  const classes = component.cssClasses;
  
  expect(classes).toContain('bio-button');
  expect(classes).toContain('bio-button--secondary');
  expect(classes).toContain('bio-button--lg');
});
```

#### 4. Testing Event Emissions

```typescript
it('should emit click event when clicked', () => {
  spyOn(component.click, 'emit');
  
  component.onClick(new MouseEvent('click'));
  
  expect(component.click.emit).toHaveBeenCalled();
});
```

#### 5. Testing Conditional Logic

```typescript
it('should not emit click event when disabled', () => {
  spyOn(component.click, 'emit');
  component.disabled = true;
  
  component.onClick(new MouseEvent('click'));
  
  expect(component.click.emit).not.toHaveBeenCalled();
});
```

#### 6. Testing ControlValueAccessor (for form components)

```typescript
it('should implement ControlValueAccessor writeValue', () => {
  component.writeValue('test value');
  expect(component.value).toBe('test value');
});

it('should implement ControlValueAccessor setDisabledState', () => {
  component.setDisabledState(true);
  expect(component.disabled).toBe(true);
});
```

## ✅ Test Coverage Goals

### Current Status
- ✅ Button: Full test coverage
- ✅ Input: Full test coverage
- ✅ Alert: Full test coverage
- ✅ Badge: Full test coverage
- ⏳ Other components: Tests needed

### Coverage Targets
- **Statements**: 80%
- **Branches**: 80%
- **Functions**: 80%
- **Lines**: 80%

### Components Needing Tests

#### Atoms (High Priority)
- [ ] FileInput
- [ ] PasswordInput
- [ ] Textarea
- [ ] Progress
- [ ] Spinner
- [ ] Tooltip
- [ ] SearchBox
- [ ] Placeholder

#### Molecules (Medium Priority)
- [ ] Accordion
- [ ] Breadcrumb
- [ ] ButtonGroup
- [ ] Dropdown
- [ ] DropdownMenu
- [ ] DropdownTrigger
- [ ] ListGroup
- [ ] Modal
- [ ] Navbar (and sub-components)
- [ ] Offcanvas
- [ ] Pagination
- [ ] Popover
- [ ] Toast

## 🧪 Test Examples

### Example 1: Simple Component (Badge)

```typescript
describe('BadgeComponent', () => {
  // ... setup ...

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply correct CSS classes', () => {
    component.color = 'success';
    component.size = 'H4';
    const classes = component.badgeClasses;
    
    expect(classes).toContain('bio-badge--success');
    expect(classes).toContain('bio-badge--H4');
  });
});
```

### Example 2: Component with Events (Button)

```typescript
describe('ButtonComponent', () => {
  // ... setup ...

  it('should emit click event when clicked and not disabled', () => {
    spyOn(component.click, 'emit');
    component.disabled = false;
    
    component.onClick(new MouseEvent('click'));
    
    expect(component.click.emit).toHaveBeenCalled();
  });

  it('should not emit click event when disabled', () => {
    spyOn(component.click, 'emit');
    component.disabled = true;
    
    component.onClick(new MouseEvent('click'));
    
    expect(component.click.emit).not.toHaveBeenCalled();
  });
});
```

### Example 3: Form Component (Input)

```typescript
describe('InputComponent', () => {
  // ... setup ...

  it('should emit valueChange when input changes', () => {
    spyOn(component.valueChange, 'emit');
    const testValue = 'test input';
    
    component.onInput({ target: { value: testValue } } as any);
    
    expect(component.valueChange.emit).toHaveBeenCalledWith(testValue);
  });

  it('should implement ControlValueAccessor', () => {
    component.writeValue('test');
    expect(component.currentValue).toBe('test');
    
    component.setDisabledState(true);
    expect(component.state).toBe('disabled');
  });
});
```

## 🚀 CI/CD Integration

Tests run automatically in CI/CD pipeline:
- On every push to `main` or `develop`
- On every pull request
- Coverage reports are generated and uploaded

See `.github/workflows/ci.yml` for configuration.

## 📚 Resources

- [Angular Testing Guide](https://angular.io/guide/testing)
- [Jasmine Documentation](https://jasmine.github.io/)
- [Karma Documentation](https://karma-runner.github.io/)

## ❓ FAQ

**Q: Should I test private methods?**  
A: No, test public API and behavior. Private methods are implementation details.

**Q: How much should I test?**  
A: Focus on public API, user interactions, edge cases, and error states.

**Q: Should I test CSS?**  
A: Test that correct CSS classes are applied, but not the actual styling (that's visual testing).

**Q: How do I test async operations?**  
A: Use `fakeAsync` and `tick()` or `waitForAsync()` and `fixture.whenStable()`.

---

**Last Updated**: December 2025

