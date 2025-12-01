import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent, InputSize, InputState, InputValidation } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default size as md', () => {
    expect(component.size).toBe('md');
  });

  it('should have default state as normal', () => {
    expect(component.state).toBe('normal');
  });

  it('should have default validation as normal', () => {
    expect(component.validation).toBe('normal');
  });

  it('should not be filled by default', () => {
    expect(component.filled).toBe(false);
  });

  it('should apply correct CSS classes for wrapper', () => {
    component.size = 'lg';
    component.state = 'focused';
    component.validation = 'valid';
    const classes = component.inputWrapperClasses;
    
    expect(classes).toContain('bio-input-wrapper');
    expect(classes).toContain('bio-input-wrapper--lg');
    expect(classes).toContain('bio-input-wrapper--focused');
    expect(classes).toContain('bio-input-wrapper--valid');
  });

  it('should apply correct CSS classes for input', () => {
    component.size = 'sm';
    component.validation = 'invalid';
    const classes = component.inputClasses;
    
    expect(classes).toContain('bio-input');
    expect(classes).toContain('bio-input--sm');
    expect(classes).toContain('bio-input--invalid');
  });

  it('should emit valueChange when input changes', () => {
    spyOn(component.valueChange, 'emit');
    const testValue = 'test input';
    
    component.onInput({ target: { value: testValue } } as any);
    
    expect(component.valueChange.emit).toHaveBeenCalledWith(testValue);
    expect(component.currentValue).toBe(testValue);
  });

  it('should set filled to true when value is provided', () => {
    component.writeValue('test');
    
    expect(component.filled).toBe(true);
    expect(component.currentValue).toBe('test');
  });

  it('should set filled to false when value is empty', () => {
    component.writeValue('');
    
    expect(component.filled).toBe(false);
    expect(component.currentValue).toBe('');
  });

  it('should emit focus event when focused', () => {
    spyOn(component.focus, 'emit');
    const focusEvent = new FocusEvent('focus');
    
    component.onFocus(focusEvent);
    
    expect(component.isFocused).toBe(true);
    expect(component.focus.emit).toHaveBeenCalledWith(focusEvent);
  });

  it('should emit blur event when blurred', () => {
    spyOn(component.blur, 'emit');
    const blurEvent = new FocusEvent('blur');
    
    component.onBlur(blurEvent);
    
    expect(component.isFocused).toBe(false);
    expect(component.blur.emit).toHaveBeenCalledWith(blurEvent);
  });

  it('should accept all size types', () => {
    const sizes: InputSize[] = ['sm', 'md', 'lg'];
    
    sizes.forEach(size => {
      component.size = size;
      expect(component.size).toBe(size);
    });
  });

  it('should accept all state types', () => {
    const states: InputState[] = ['normal', 'focused', 'disabled'];
    
    states.forEach(state => {
      component.state = state;
      expect(component.state).toBe(state);
    });
  });

  it('should accept all validation types', () => {
    const validations: InputValidation[] = ['normal', 'valid', 'invalid'];
    
    validations.forEach(validation => {
      component.validation = validation;
      expect(component.validation).toBe(validation);
    });
  });

  it('should implement ControlValueAccessor writeValue', () => {
    component.writeValue('test value');
    expect(component.currentValue).toBe('test value');
  });

  it('should implement ControlValueAccessor setDisabledState', () => {
    component.setDisabledState(true);
    expect(component.state).toBe('disabled');
    
    component.setDisabledState(false);
    expect(component.state).toBe('normal');
  });
});

