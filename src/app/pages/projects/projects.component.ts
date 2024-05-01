import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/assets/projects-model';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

	constructor(private jsonDataService: JsonDataService,) { }
	$projects!: Observable<Project[]>;
	badges: { [key: string]: string } = { "success": "bg-success", "info": "bg-info" };

	ngOnInit(): void {
		this.$projects = this.jsonDataService.getProjects();
	}

}
