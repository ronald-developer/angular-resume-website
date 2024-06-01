import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './components/base/base.component';
import { LoadingUiDirective } from '../core/directives/loading-ui.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UrlSanitizerPipe } from './pipes/url-sanitizer.pipe';



@NgModule({
	declarations: [
		BaseComponent,
		LoadingUiDirective,
		UrlSanitizerPipe
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule
	],
	exports: [
		LoadingUiDirective,
		ReactiveFormsModule,
		FormsModule,
		UrlSanitizerPipe
	]
})
export class SharedModule { }
