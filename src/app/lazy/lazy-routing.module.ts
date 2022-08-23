import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLazyComponent } from './my-lazy/my-lazy.component';

const routes: Routes = [{
  path: '', component: MyLazyComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
