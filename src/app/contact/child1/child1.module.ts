import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Child1 } from './child1.component';


const routes: Routes = [
  { path: '', component: Child1 }
];

@NgModule({
  declarations: [Child1],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Child1Module { }