import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';
import { HeroesComponent} from './components/heroes/heroes.component';
import { ErrorComponent } from './components/error/error.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultComponent } from './components/result/result.component';



// import { PageNotFoundComponent } from './';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'result/:termino', component: ResultComponent},
    { path: '**', component: ErrorComponent },
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
