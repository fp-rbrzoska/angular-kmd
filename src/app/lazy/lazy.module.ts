import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { MyLazyComponent } from './my-lazy/my-lazy.component';
import { SharedModule } from '../shared/shared.module';

export const myFunc = () => {}

@NgModule({
  declarations: [
    MyLazyComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule, SharedModule
  ]
})
export class LazyModule { }
