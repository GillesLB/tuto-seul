import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeComponent } from './liste/liste.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { HeaderComponent } from './header/header.component';
import { ErreurComponent } from './erreur/erreur.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { livreReducer } from 'src/app/reducers/livre.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListeComponent,
    AjouterComponent,
    HeaderComponent,
    ErreurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({livre: livreReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
