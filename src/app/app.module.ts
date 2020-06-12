import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from "./main-module/main.module";
import { HomeViewComponent } from "./views/home-view/home-view.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeViewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MainModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
