import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { FacebookModule } from 'ngx-facebook';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { FooterComponent } from './footer/footer.component';
import { ValeursComponent } from './valeurs/valeurs.component';
import { EnvironnementComponent } from './environnement/environnement.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SolutionsComponent,
    FooterComponent,
    ValeursComponent,
    EnvironnementComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FacebookModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    Title,
    Meta,
    {
      provide: "isBrowser",
      useValue: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
