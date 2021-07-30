import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveComponent } from './components/save/save.component';
import { ViewJobsComponent } from './components/view-jobs/view-jobs.component';

const routes: Routes = [
  {
    path: '',
    component: SaveComponent,
    pathMatch: 'full'
  },
  {
    path: 'viewJobs',
    component: ViewJobsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
