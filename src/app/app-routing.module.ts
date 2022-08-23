import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecurityGuard } from './security.guard';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'super-lazy', loadComponent: () => import('./super-lazy/super-lazy.component').then(c => c.SuperLazyComponent)},
  { path: 'test', component: TestComponent, canActivate:[SecurityGuard] },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
