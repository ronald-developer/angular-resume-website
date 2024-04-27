import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JsonDataService } from '../../services/json-data.service';
import { Observable } from 'rxjs';
import { AboutMe } from 'src/app/models/assets/about-me-model';
import { JobExperience } from 'src/app/models/assets/job-experience-model';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
    $aboutMe!: Observable<AboutMe>;
    $jobExperience!: Observable<JobExperience[]>
    constructor(private jsonDataService: JsonDataService, private detector: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.$aboutMe = this.jsonDataService.getAboutMe();
        this.$jobExperience = this.jsonDataService.getJobExperience();
    }

}
