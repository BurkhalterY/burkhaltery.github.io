import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project';

@Component({
	selector: 'app-section-projects',
	templateUrl: './section-projects.component.html',
	styleUrls: ['./section-projects.component.css']
})
export class SectionProjectsComponent implements OnInit {

	public favorite: Array<Project>;
	public private: Array<Project>;
	public pro: Array<Project>;

	constructor(private _projectsService: ProjectsService) { }

	ngOnInit(): void {
		this.favorite = this._projectsService.getFavorite().reverse();
		this.private = this._projectsService.getPrivate();
		this.pro = this._projectsService.getPro();
	}

}
