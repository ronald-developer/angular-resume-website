import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { AboutMe } from '../models/assets/about-me-model';
import { JobExperience } from '../models/assets/job-experience-model';
import { Project } from '../models/assets/projects-model';
@Injectable({
	providedIn: 'root'
})
export class JsonDataService {
	constructor(private http: HttpClient) { }

	getAboutMe(): Observable<AboutMe> {
		return this.http.get<AboutMe>('./assets/data/about-me.json').pipe(take(1));
	}

	getJobExperience(): Observable<JobExperience[]> {
		return this.http.get<JobExperience[]>('./assets/data/job-experience.json').pipe(take(1));
	}

	getProjects(): Observable<Project[]> {
		return this.http.get<Project[]>('./assets/data/projects.json').pipe(take(1));
	}
}
