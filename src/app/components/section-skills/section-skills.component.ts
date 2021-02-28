import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';

@Component({
	selector: 'app-section-skills',
	templateUrl: './section-skills.component.html',
	styleUrls: ['./section-skills.component.css']
})
export class SectionSkillsComponent implements OnInit {

	constructor(public _skillsService: SkillsService) { }

	ngOnInit(): void {
	}

}
