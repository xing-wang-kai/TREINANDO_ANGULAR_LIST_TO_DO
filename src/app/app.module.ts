import { registerLocaleData } from '@angular/common';
import LocalePt from '@angular/common/locales/pt'
import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { NotasComponent } from './notas/notas.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData( LocalePt, "pt");
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    HomeComponent,
    NotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: "BRL"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
