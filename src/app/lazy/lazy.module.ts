import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { MyLazyComponent } from './my-lazy/my-lazy.component';

export const myFunc = () => {}

@NgModule({
  declarations: [
    MyLazyComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
