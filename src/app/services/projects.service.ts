import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Skill } from '../models/skill';
import * as json from '../../assets/data/projects.json';

@Injectable({
	providedIn: 'root'
})
export class ProjectsService {

	private projects = (json as any).default;

	constructor() { }

	public getPrivate() : Array<Project>
	{
		let projects = [];
		for(let project of this.projects){
			if(!project.Pro){
				projects.push(project);
			}
		}
		return projects;
	}

	public getPro() : Array<Project>
	{
		let projects = [];
		for(let project of this.projects){
			if(project.Pro){
				projects.push(project);
			}
		}
		return projects;
	}

	public getFavorite() : Array<Project>
	{
		let projects = [];
		for(let project of this.projects){
			if(project.Favorite){
				projects.push(project);
			}
		}
		return projects;
	}
}
