import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { AppComponent } from './app.component';
import { ListaRegistroComponent } from './components/lista-registro/lista-registro.component';

const routes: Routes = [
  
  {path:'registro', component:RegistroComponent},
  {path:'lista', component:ListaRegistroComponent},
  {path:'**',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
