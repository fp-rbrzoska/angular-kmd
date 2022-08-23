import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MyTestDirective } from './my-test.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    MyTestDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, MyTestDirective]
})
export class SharedModule { }
