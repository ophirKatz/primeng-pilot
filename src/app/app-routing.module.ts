import { RouterModule, Routes } from '@angular/router';

import { GridComponent } from './grid/grid.component';
import { NgModule } from '@angular/core';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tree',
    pathMatch: 'full'
  },
  {
    path: 'tree',
    component: TreeComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'dataview',
    component: TreeComponent
  },
  {
    path: 'table',
    component: TreeComponent
  },
  {
    path: 'linechart',
    component: TreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
