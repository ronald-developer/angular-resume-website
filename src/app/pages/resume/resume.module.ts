import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';


@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
