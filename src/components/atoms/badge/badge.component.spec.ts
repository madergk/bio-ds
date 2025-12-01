import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeComponent, BadgeSize, BadgeColor, BadgeType } from './badge.component';

describe('BadgeComponent', () => {
  let component: BadgeComponent;
  let fixture: ComponentFixture<BadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default text as Primary', () => {
    expect(component.text).toBe('Primary');
  });

  it('should have default size as H6', () => {
    expect(component.size).toBe('H6');
  });

  it('should have default color as primary', () => {
    expect(component.color).toBe('primary');
  });

  it('should have default type as normal', () => {
    expect(component.type).toBe('normal');
  });

  it('should apply correct CSS classes for normal type', () => {
    component.size = 'H4';
    component.color = 'success';
    component.type = 'normal';
    const classes = component.badgeClasses;
    
    expect(classes).toContain('bio-badge');
    expect(classes).toContain('bio-badge--H4');
    expect(classes).toContain('bio-badge--success');
    expect(classes).toContain('bio-badge--normal');
  });

  it('should apply correct CSS classes for pill type', () => {
    component.size = 'H5';
    component.color = 'danger';
    component.type = 'pill';
    const classes = component.badgeClasses;
    
    expect(classes).toContain('bio-badge');
    expect(classes).toContain('bio-badge--H5');
    expect(classes).toContain('bio-badge--danger');
    expect(classes).toContain('bio-badge--pill');
  });

  it('should apply correct CSS classes for dot type', () => {
    component.color = 'warning';
    component.type = 'dot';
    const classes = component.badgeClasses;
    
    expect(classes).toContain('bio-badge');
    expect(classes).toContain('bio-badge--dot');
    expect(classes).toContain('bio-badge--warning');
    expect(classes).not.toContain('bio-badge--H6'); // Dot doesn't use size
  });

  it('should show text for normal and pill types', () => {
    component.type = 'normal';
    expect(component.shouldShowText).toBe(true);
    
    component.type = 'pill';
    expect(component.shouldShowText).toBe(true);
  });

  it('should not show text for dot type', () => {
    component.type = 'dot';
    expect(component.shouldShowText).toBe(false);
  });

  it('should accept all size types', () => {
    const sizes: BadgeSize[] = ['H6', 'H5', 'H4', 'H3', 'H2', 'H1', '-'];
    
    sizes.forEach(size => {
      component.size = size;
      expect(component.size).toBe(size);
    });
  });

  it('should accept all color types', () => {
    const colors: BadgeColor[] = [
      'primary', 'secondary', 'success', 'danger', 
      'warning', 'info', 'light', 'dark'
    ];
    
    colors.forEach(color => {
      component.color = color;
      expect(component.color).toBe(color);
    });
  });

  it('should accept all type types', () => {
    const types: BadgeType[] = ['normal', 'pill', 'dot'];
    
    types.forEach(type => {
      component.type = type;
      expect(component.type).toBe(type);
    });
  });
});

