import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertComponent, AlertVariant } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default variant as primary', () => {
    expect(component.variant).toBe('primary');
  });

  it('should not show icon by default', () => {
    expect(component.showIcon).toBe(false);
  });

  it('should not be dismissible by default', () => {
    expect(component.dismissible).toBe(false);
  });

  it('should be visible by default', () => {
    expect(component.visible).toBe(true);
  });

  it('should apply correct CSS classes', () => {
    component.variant = 'success';
    component.dismissible = true;
    const classes = component.alertClasses;
    
    expect(classes).toContain('bio-alert');
    expect(classes).toContain('bio-alert--success');
    expect(classes).toContain('bio-alert--dismissible');
  });

  it('should detect additional content when heading is provided', () => {
    component.heading = 'Test Heading';
    expect(component.hasAdditionalContent).toBe(true);
  });

  it('should detect additional content when additionalText is provided', () => {
    component.additionalText = 'Test text';
    expect(component.hasAdditionalContent).toBe(true);
  });

  it('should not detect additional content when neither heading nor additionalText is provided', () => {
    component.heading = undefined;
    component.additionalText = undefined;
    expect(component.hasAdditionalContent).toBe(false);
  });

  it('should emit dismiss event when dismissed', () => {
    spyOn(component.dismiss, 'emit');
    
    component.onDismiss();
    
    expect(component.visible).toBe(false);
    expect(component.dismiss.emit).toHaveBeenCalled();
  });

  it('should accept all variant types', () => {
    const variants: AlertVariant[] = [
      'primary', 'secondary', 'success', 'danger', 
      'warning', 'info', 'light', 'dark'
    ];
    
    variants.forEach(variant => {
      component.variant = variant;
      expect(component.variant).toBe(variant);
    });
  });
});

