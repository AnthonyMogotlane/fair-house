import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HousingViewComponent } from './housing-view/housing-view.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HousingListComponent,
        HousingViewComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forRoot([
            { path: "home", component: HomeComponent },
            { path: "view", component: HousingViewComponent },
            { path: "view/:id", component: HousingViewComponent },
            { path: " ", redirectTo: "home" }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }