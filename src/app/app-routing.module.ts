import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReativeFormBuilderComponent } from './reative-form-builder/reative-form-builder.component';


const routes: Routes = [
  {path: 'templateform', component: TemplateformComponent},
  {path: 'reactiveform', component: ReactiveformComponent},
  {path: 'reactiveformbuilder', component: ReativeFormBuilderComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
