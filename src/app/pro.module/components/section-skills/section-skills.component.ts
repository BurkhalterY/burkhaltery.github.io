import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';
import { Category } from '../../models/category';

@Component({
	selector: 'app-section-skills',
	templateUrl: './section-skills.component.html',
	styleUrls: ['./section-skills.component.css']
})
export class SectionSkillsComponent implements OnInit {

	public categories: Array<Category>;

	constructor(private _skillsService: SkillsService) { }

	ngOnInit(): void {
		this.categories = this._skillsService.getCategories();
	}

}
