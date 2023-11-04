import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { About } from './about.component';


const routes: Routes = [
  { path: '', component: About }
];

@NgModule({
  declarations: [About],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }