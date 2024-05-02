import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home', loadChildren: () => import('../pages/resume/resume.module').then((m) => m.ResumeModule)
	},
	{
		path: 'projects', loadChildren: () => import('../pages/projects/projects.module').then((m) => m.ProjectsModule)
	},
	{
		path: 'contact', loadChildren: () => import('../pages/contact/contact.module').then((m) => m.ContactModule)
	},
	{
		path: 'page-not-found',
		component: PageNotFoundComponent
	},
	{
		path: '**',
		redirectTo: 'page-not-found',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class CoreRoutingModule { }
