import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TYTExamsPage } from './tyt-exams.page';

const routes: Routes = [
  {
    path: '',
    component: TYTExamsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TYTExamsPageRoutingModule {}
