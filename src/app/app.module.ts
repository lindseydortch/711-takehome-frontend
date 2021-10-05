import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
