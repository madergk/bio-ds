import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/atoms/button/button.component';
import { AlertComponent } from './components/atoms/alert/alert.component';
import { BadgeComponent } from './components/atoms/badge/badge.component';
import { AccordionComponent } from './components/molecules/accordion/accordion.component';
import { BreadcrumbComponent } from './components/molecules/breadcrumb/breadcrumb.component';
import { ButtonGroupComponent } from './components/molecules/button-group/button-group.component';
import { DropdownMenuComponent } from './components/molecules/dropdown-menu/dropdown-menu.component';
import { DropdownTriggerComponent } from './components/molecules/dropdown-trigger/dropdown-trigger.component';
import { DropdownComponent } from './components/molecules/dropdown/dropdown.component';
import { ListGroupComponent } from './components/molecules/list-group/list-group.component';
import { ModalComponent } from './components/molecules/modal/modal.component';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { OffcanvasComponent } from './components/molecules/offcanvas/offcanvas.component';
import { PaginationComponent } from './components/molecules/pagination/pagination.component';
import { PopoverComponent } from './components/molecules/popover/popover.component';
import { PlaceholderComponent } from './components/atoms/placeholder/placeholder.component';
import { ProgressComponent } from './components/atoms/progress/progress.component';
import { SpinnerComponent } from './components/atoms/spinner/spinner.component';
import { ToastComponent } from './components/molecules/toast/toast.component';
import { TooltipComponent } from './components/atoms/tooltip/tooltip.component';
import { InputComponent } from './components/atoms/input/input.component';
import { PasswordInputComponent } from './components/atoms/password-input/password-input.component';
import { TextareaComponent } from './components/atoms/textarea/textarea.component';
import { FileInputComponent } from './components/atoms/file-input/file-input.component';
import { SearchBoxComponent } from './components/atoms/search-box/search-box.component';
import { InputAddonComponent } from './components/atoms/input-addon/input-addon.component';
import { InputAffixComponent } from './components/atoms/input-affix/input-affix.component';
import { InputSeparatorComponent } from './components/atoms/input-separator/input-separator.component';
import { LoginPageComponent } from './components/organisms/login-page/login-page.component';

/**
 * Bio Design System Module
 * 
 * Main module that exports all components and directives
 * from the design system.
 * 
 * Import this module in your application to use the components.
 * 
 * Note: Components are also available as standalone components
 * and can be imported individually.
 */
@NgModule({
  imports: [
    CommonModule,
    // Standalone components
    ButtonComponent,
    AlertComponent,
    BadgeComponent,
    AccordionComponent,
    BreadcrumbComponent,
    ButtonGroupComponent,
    DropdownMenuComponent,
    DropdownTriggerComponent,
    DropdownComponent,
    ListGroupComponent,
    ModalComponent,
    NavbarComponent,
    OffcanvasComponent,
    PaginationComponent,
    PopoverComponent,
    PlaceholderComponent,
    ProgressComponent,
    SpinnerComponent,
    ToastComponent,
    TooltipComponent,
    InputComponent,
    PasswordInputComponent,
    TextareaComponent,
    FileInputComponent,
    SearchBoxComponent,
    InputAddonComponent,
    InputAffixComponent,
    InputSeparatorComponent,
    LoginPageComponent
  ],
  exports: [
    // Export standalone components for module-based usage
    ButtonComponent,
    AlertComponent,
    BadgeComponent,
    PlaceholderComponent,
    ProgressComponent,
    SpinnerComponent,
    TooltipComponent,
    InputComponent,
    PasswordInputComponent,
    TextareaComponent,
    FileInputComponent,
    SearchBoxComponent,
    InputAddonComponent,
    InputAffixComponent,
    InputSeparatorComponent,
    AccordionComponent,
    BreadcrumbComponent,
    ButtonGroupComponent,
    DropdownMenuComponent,
    DropdownTriggerComponent,
    DropdownComponent,
    ListGroupComponent,
    ModalComponent,
    NavbarComponent,
    OffcanvasComponent,
    PaginationComponent,
    PopoverComponent,
    ToastComponent,
    LoginPageComponent
  ]
})
export class BioDesignSystemModule {}

