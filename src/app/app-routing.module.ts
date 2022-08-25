import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoggedInGuard } from './security/loggedInGuard';
import { LoginComponent } from './security/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login/:to', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { 
    path: '',
    loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule)
  },
  { path: '',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
    canLoad: [ LoggedInGuard ],
    canActivate: [ LoggedInGuard ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
