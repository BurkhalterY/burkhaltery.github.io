import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
	selector: 'app-section-projects',
	templateUrl: './section-projects.component.html',
	styleUrls: ['./section-projects.component.css']
})
export class SectionProjectsComponent implements OnInit {

	constructor(public _projectsService: ProjectsService) { }

	ngOnInit(): void {
	}

}
