import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import { NovatransferenciaComponent} from './components/novatransferencia/novatransferencia.component';
import { HomeComponent} from './components/home/home.component';
import { SplashComponent} from './components/splash/splash.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'novatransferencia', component: NovatransferenciaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'splash', component: SplashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
