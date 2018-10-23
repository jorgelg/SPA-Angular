import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Routes
import { APP_ROUTING } from './app.routes';


// Services
import { HeroesService } from './services/heroes.service';


// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { ErrorComponent } from './components/error/error.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultComponent } from './components/result/result.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    ErrorComponent,
    HeroeComponent,
    ResultComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
