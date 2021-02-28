import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Category } from '../models/category';
import * as json from '../../assets/data/skills.json';

@Injectable({
	providedIn: 'root'
})
export class SkillsService {

	private skills = (json as any).default;

	constructor() { }

	public getCategories() : Array<Category>
	{
		let categories = [];
		for(let skill of this.skills){
			if(skill.Active && categories.filter(e => e.Name == skill.Category).length == 0){
				let skills = this.getByCategory(skill.Category);
				categories.push({ Name: skill.Category, Skills: skills });
			}
		}
		return categories;
	}

	public getByCategory(cat: string) : Array<Skill>
	{
		let skills = [];
		for(let skill of this.skills){
			if(skill.Active && skill.Category == cat){
				skills.push(skill);
			}
		}
		return skills;
	}

	public getByName(name: string) : Skill
	{
		for(let skill of this.skills){
			if(skill.Name == name){
				return skill;
			}
		}
		return this.getByName("Default");
	}
}
