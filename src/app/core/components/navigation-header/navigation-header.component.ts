import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navigation-header',
	templateUrl: './navigation-header.component.html',
	styleUrls: ['./navigation-header.component.scss']
})
export class NavigationHeaderComponent implements OnInit {
	constructor(private router: Router) { }

	ngOnInit(): void {
	}

}
