import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TYTExamsPageRoutingModule } from './tyt-exams-routing.module';

import { TYTExamsPage } from './tyt-exams.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TYTExamsPageRoutingModule
  ],
  declarations: [TYTExamsPage]
})
export class TYTExamsPageModule {}
