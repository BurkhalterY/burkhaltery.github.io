import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Skill } from '../models/skill';
import { SkillsService } from './skills.service';

@Injectable({
	providedIn: 'root'
})
export class ProjectsService {

	constructor(private _skillsService: SkillsService) { }

	private projects = [
		{
			Name: "EPSIC Simulator",
			Image: "epsic-simulator.png",
			Url: "https://www.normalux.ch",
			Skills: [this._skillsService.getByName("Unity"), this._skillsService.getByName("C#")],
			Date: "janv. – juin 2020",
			Pro: false,
			Favorite: false,
			Description: "Un jeu se déroulant à l'école professionnelle et dont le but est de répondre à des questions afin d'obtenir des points et des compétences pour pouvoir sortir."
		}, {
			Name: "Bataille navale",
			Image: "bataille-navale.png",
			Url: "https://github.com/BurkhalterY/EPSIC_Bataille_Navale/releases",
			Skills: [this._skillsService.getByName("C#")],
			Date: "nov. 2019",
			Pro: false,
			Favorite: true,
			Description: "Jeu réalisé dans le cadre de l'EPSIC. Contient quelques fonctionnalités supplémentaires telles que des sonars et des bombes nucléaires."
		}, {
			Name: "Use Your Cheats",
			Image: "use-your-cheats.png",
			Url: "https://github.com/BurkhalterY/UseYourCheats/releases",
			Skills: [this._skillsService.getByName("Android Studio"), this._skillsService.getByName("Java")],
			Date: "août 2019",
			Pro: false,
			Favorite: false,
			Description: "Petite application Android qui exploite une faille dans le jeu <a target=\"_blank\" href=\"https://useyourwords.lol\">Use Your Words</a> et permet quelques triches."
		}, {
			Name: "Prog.normalux.ch",
			Image: "prog-normalux.png",
			Url: "https://prog.normalux.ch",
			Skills: [this._skillsService.getByName("PHP")],
			Date: "janv. – juin 2019",
			Pro: false,
			Favorite: false,
			Description: "Un site qui réexplique les modules d'informatique que j'ai vu en première année. Dans le but d'aider mes collègues."
		}, {
			Name: "TETRIS",
			Image: "tetris.png",
			Url: "https://github.com/BurkhalterY/various-projects/releases/download/v1.0/TETRIS.xlsm",
			Skills: [this._skillsService.getByName("Excel"), this._skillsService.getByName("VBA")],
			Date: "juin 2018",
			Pro: false,
			Favorite: false,
			Description: "TETRIS codé en VBA dans Excel pour le challenge. Peut ramer sur certains PC."
		}, {
			Name: "PAC-MAN",
			Image: "pac-man.png",
			Url: "https://github.com/BurkhalterY/Pacman/releases",
			Skills: [this._skillsService.getByName("Java")],
			Date: "avr. – mai 2018",
			Pro: false,
			Favorite: false,
			Description: "Un PAC-MAN développé en Java. Contient pas mal d'options."
		}, {
			Name: "Machine à billes",
			Image: "machine-a-billes.jpg",
			Url: "https://youtu.be/_vz3g1flqTc",
			Skills: [this._skillsService.getByName("Arduino")],
			Date: "mars 2018",
			Pro: false,
			Favorite: false,
			Description: "Une machine qui trie les billes selon leur couleur (noir, blanc, rouge). Les pièces en bois ont été découpées avec une machine CNC."
		}, {
			Name: "Normalux.ch",
			Image: "normalux.png",
			Url: "https://www.normalux.ch/",
			Skills: [this._skillsService.getByName("CodeIgniter")],
			Date: "janv. 2018",
			Pro: false,
			Favorite: true,
			Description: "Un site de jeu dans lequel il faut reproduire un dessin. Similaire à Pokedraw.net (down)."
		}, {
			Name: "Jeux en Just Basic",
			Image: "just-basic-space-invaders.png",
			Url: "https://github.com/BurkhalterY/various-projects/releases/download/v1.0/JustBasic.zip",
			Skills: [this._skillsService.getByName("Just Basic")],
			Date: "sept. 2017",
			Pro: false,
			Favorite: false,
			Description: "Quelques jeux comme PONG et Space Invaders programmés en Just Basic, un langage enseigné à l'Orif pour apprendre la programmation."
		}, {
			Name: "Tank",
			Image: "tank.png",
			Url: "https://github.com/BurkhalterY/various-projects/releases/download/v1.0/tank.swf",
			Skills: [this._skillsService.getByName("Flash")],
			Date: "< 2017",
			Pro: false,
			Favorite: false,
			Description: "Toujours sur Flash, un jeu de tanks en solo ou à deux. Un seul monde en mode histoire + 4 stages multi."
		}, {
			Name: "PONG",
			Image: "flash-pong.png",
			Url: "https://github.com/BurkhalterY/various-projects/releases/download/v1.0/pong.exe",
			Skills: [this._skillsService.getByName("Flash")],
			Date: "sept. 2016",
			Pro: false,
			Favorite: false,
			Description: "Parmi mes premiers essais en programmation. Oui c'est étonnant, j'ai programmé en ActionScript sur Flash avant de toucher au HTML."
		}, {
			Name: "Stock",
			Image: "orif-stock.png",
			Url: "https://stock.sectioninformatique.ch",
			Skills: [this._skillsService.getByName("CodeIgniter")],
			Date: "Orif de Pomy",
			Pro: true,
			Favorite: false,
			Description: "Il s'agit du gestionnaire de stock de la section informatique de l'Orif."
		}, {
			Name: "Helvetia",
			Image: "helvetia.png",
			Url: "https://helvetia.normalux.ch",
			Skills: [this._skillsService.getByName("CodeIgniter")],
			Date: "Adrex83",
			Pro: true,
			Favorite: false,
			Description: "Un site pour présenter le serveur Minecraft d'un ami."
		}
	];

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
