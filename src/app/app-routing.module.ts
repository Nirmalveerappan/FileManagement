import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateChooseComponent } from './components/template-choose/template-choose.component';


const routes: Routes = [
  {
    path: '',
    component: TemplateChooseComponent
  },
  {
    path: 'choose-csv',
    component: TemplateChooseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
