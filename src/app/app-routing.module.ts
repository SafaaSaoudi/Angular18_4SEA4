import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsuggestionComponent } from './core/listsuggestion/listsuggestion.component';
import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

const routes: Routes = [
  
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'List', component:ListsuggestionComponent},
  {path: 'home', component:HomeComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
