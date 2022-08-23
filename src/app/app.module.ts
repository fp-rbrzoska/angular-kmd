import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoreModule } from './core/core.module';
import { SuperLazyComponent } from './super-lazy/super-lazy.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    HomeChildComponent,
    NavigationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
