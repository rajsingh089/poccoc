import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginComponent } from './home/begin/begin.component';
import { DetailsComponent } from './home/begin/details/details.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'app-begin', component: BeginComponent },
  { path: 'app-begin/app-details', component: DetailsComponent },

  { path: 'app-home', component: HomeComponent },
  {path:'app-report', component: ReportComponent},
  {path:'app-settings', component: SettingsComponent},


  {path:'', component: HomeComponent}
  // app-report

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
