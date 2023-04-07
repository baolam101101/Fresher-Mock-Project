import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { AuthInterceptor } from './auth/auth.interceptor';

import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { SliderModule } from 'primeng/slider';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DividerModule } from 'primeng/divider';
import { ChipsModule } from 'primeng/chips';
import { ListboxModule } from 'primeng/listbox';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { AccordionModule } from 'primeng/accordion';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { BlockUIModule } from 'primeng/blockui';
import { DeferModule } from 'primeng/defer';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './components/pages/header/header.component';

const PRIMENG_DEPENDENCIES = [
  ButtonModule,
  MultiSelectModule,
  TableModule,
  SkeletonModule,
  BreadcrumbModule,
  PanelModule,
  CardModule,
  InputTextModule,
  CheckboxModule,
  RadioButtonModule,
  DropdownModule,
  InputTextareaModule,
  InputNumberModule,
  TabViewModule,
  DialogModule,
  ConfirmDialogModule,
  MessagesModule,
  MessageModule,
  AutoCompleteModule,
  TooltipModule,
  FieldsetModule,
  SliderModule,
  ToastModule,
  DynamicDialogModule,
  InputSwitchModule,
  DividerModule,
  ChipsModule,
  ListboxModule,
  ConfirmPopupModule,
  AccordionModule,
  ToolbarModule,
  SplitterModule,
  ScrollPanelModule,
  CascadeSelectModule,
  CalendarModule,
  ToggleButtonModule,
  ProgressBarModule,
  TagModule,
  BlockUIModule,
  DeferModule,
  FileUploadModule,
  SelectButtonModule,
];
@NgModule({
  declarations: [AppComponent, LoginPageComponent, RegisterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...PRIMENG_DEPENDENCIES,
  ],
  exports: [
    ...PRIMENG_DEPENDENCIES,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
