import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent, ButtonVariant, ButtonSize } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default variant as primary', () => {
    expect(component.variant).toBe('primary');
  });

  it('should have default size as md', () => {
    expect(component.size).toBe('md');
  });

  it('should not be disabled by default', () => {
    expect(component.disabled).toBe(false);
  });

  it('should apply correct CSS classes', () => {
    component.variant = 'secondary';
    component.size = 'lg';
    const classes = component.buttonClasses;
    
    expect(classes).toContain('bio-button');
    expect(classes).toContain('bio-button--secondary');
    expect(classes).toContain('bio-button--lg');
  });

  it('should add disabled class when disabled', () => {
    component.disabled = true;
    const classes = component.buttonClasses;
    
    expect(classes).toContain('bio-button--disabled');
  });

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

  it('should accept all variant types', () => {
    const variants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'text', 'danger'];
    
    variants.forEach(variant => {
      component.variant = variant;
      expect(component.variant).toBe(variant);
    });
  });

  it('should accept all size types', () => {
    const sizes: ButtonSize[] = ['sm', 'md', 'lg'];
    
    sizes.forEach(size => {
      component.size = size;
      expect(component.size).toBe(size);
    });
  });
});

