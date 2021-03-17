import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodySettingsComponent } from './body-settings.component';


const routes: Routes = [
  {
    path: '',
    component: BodySettingsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodySettingsRoutingModule { }
