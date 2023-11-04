import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Contact } from './contact.component';


const routes: Routes = [
  { path: '', component: Contact },
  { path: 'child1', loadChildren: () => import('./child1/child1.module').then(m => m.Child1Module) },
];

@NgModule({
  declarations: [Contact],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }