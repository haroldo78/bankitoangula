import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './components/login/login.component';
import { NovatransferenciaComponent} from './components/novatransferencia/novatransferencia.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'novatransferencia', component: NovatransferenciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
