import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsuggestionComponent } from './core/listsuggestion/listsuggestion.component';

const routes: Routes = [
  {path:'List', component:ListsuggestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
