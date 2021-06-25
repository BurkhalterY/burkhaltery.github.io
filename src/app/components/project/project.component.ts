import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project';
import { Skill } from '../../models/skill';
import { SkillsService } from '../../services/skills.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

	@Input() project: Project;

	public skills: Array<Skill> = [];

	constructor(private _skillsService: SkillsService, private _modalService: NgbModal) { }

	ngOnInit(): void {
		for(let skill of this.project.Skills) {
			this.skills.push(this._skillsService.getByName(skill));
		}
	}

	open(content) {
		this._modalService.open(content, { size: 'lg', centered: true });
	}
}
