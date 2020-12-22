import { Skill } from './skill';

export interface Project
{
	Name: string,
	Image: string,
	Url: string,
	Skills: Array<Skill>,
	Date: string,
	Pro: boolean,
	Favorite: boolean,
	Description: string
}
