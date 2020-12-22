import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Category } from '../models/category';

@Injectable({
	providedIn: 'root'
})
export class SkillsService {

	private skills = [
		{ Name: "HTML 5", Category: "Développement web", Icon: "html.png", Note: 5, Level: "", Active: true },
		{ Name: "CSS 3", Category: "Développement web", Icon: "css.png", Note: 4.5, Level: "", Active: true },
		{ Name: "JavaScript", Category: "Développement web", Icon: "js.png", Note: 4.5, Level: "", Active: true },
		{ Name: "PHP", Category: "Développement web", Icon: "php.png", Note: 5, Level: "", Active: true },
		{ Name: "MySQL", Category: "Développement web", Icon: "mysql.png", Note: 5, Level: "", Active: true },

		{ Name: "Bootstrap", Category: "Frameworks", Icon: "bootstrap.png", Note: 4.5, Level: "", Active: true },
		{ Name: "CodeIgniter", Category: "Frameworks", Icon: "ci.png", Note: 5, Level: "", Active: true },
		{ Name: "ASP.NET", Category: "Frameworks", Icon: "aspdotnet.png", Note: 2.5, Level: "", Active: true },
		{ Name: "Angular", Category: "Frameworks", Icon: "angular.png", Note: 3, Level: "", Active: true },

		{ Name: "WordPress", Category: "CMS", Icon: "wordpress.png", Note: 3, Level: "", Active: true },
		{ Name: "Joomla!", Category: "CMS", Icon: "joomla.png", Note: 2.5, Level: "", Active: true },
		{ Name: "PrestaShop", Category: "CMS", Icon: "prestashop.png", Note: 3, Level: "", Active: true },

		{ Name: "Android Studio", Category: "Applications mobiles", Icon: "android-studio.png", Note: 4, Level: "", Active: true },
		{ Name: "Kotlin", Category: "Applications mobiles", Icon: "kotlin.png", Note: 1.5, Level: "", Active: true },
		
		{ Name: "C#", Category: "Autres langages", Icon: "csharp.png", Note: 5, Level: "", Active: true },
		{ Name: "Java", Category: "Autres langages", Icon: "java.png", Note: 4.5, Level: "", Active: true },
		{ Name: "Python", Category: "Autres langages", Icon: "python.png", Note: 3, Level: "", Active: true },

		{ Name: "Windows", Category: "Windows et Office", Icon: "windows.png", Note: 5, Level: "", Active: true },
		{ Name: "Word", Category: "Windows et Office", Icon: "word.png", Note: 4.5, Level: "", Active: true },
		{ Name: "Excel", Category: "Windows et Office", Icon: "excel.png", Note: 5, Level: "", Active: true },
		{ Name: "PowerPoint", Category: "Windows et Office", Icon: "powerpoint.png", Note: 5, Level: "", Active: true },
		{ Name: "Access", Category: "Windows et Office", Icon: "access.png", Note: 4.5, Level: "", Active: true },
		{ Name: "VBA", Category: "Windows et Office", Icon: "vba.png", Note: 3, Level: "", Active: true },

		{ Name: "GitHub", Category: "Divers", Icon: "github.png", Note: 4, Level: "", Active: true },
		{ Name: "PHPUnit", Category: "Divers", Icon: "phpunit.png", Note: 2.5, Level: "", Active: true },
		{ Name: "Arduino", Category: "Divers", Icon: "arduino.png", Note: 3.5, Level: "", Active: true },
		{ Name: "Node.js", Category: "Divers", Icon: "nodejs.png", Note: 4, Level: "", Active: true },
		{ Name: "Unity", Category: "Divers", Icon: "unity.png", Note: 3, Level: "", Active: true },

		{ Name: "Français", Category: "Langues", Icon: "fr.png", Note: -1, Level: "Langue\nmaternelle", Active: true },
		{ Name: "Anglais", Category: "Langues", Icon: "en_us.png", Note: -1, Level: "B1", Active: true },

		{ Name: "Flash", Category: "None", Icon: "flash-mx-2004.png", Note: 3.75, Level: "", Active: false },
		{ Name: "Just Basic", Category: "None", Icon: "just-basic.png", Note: 4.5, Level: "", Active: false },
		{ Name: "Default", Category: "None", Icon: "", Note: -1, Level: "", Active: false },
	];

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
