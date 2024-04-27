import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base/base.component';
import { LoadingUiDirective } from '../core/directives/loading-ui.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		BaseComponent,
		LoadingUiDirective
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule
	],
	exports: [
		LoadingUiDirective,
		ReactiveFormsModule,
		FormsModule
	]
})
export class SharedModule { }
