import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { CervezasComponent } from './components/cervezas/cervezas.component';
import { PropinasComponent } from './components/propinas/propinas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BebidasComponent,
    CervezasComponent,
    PropinasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
