import { ProjectStatus } from "./ProjectStatus";
import { Skill } from "./Skills";

export const projects = [
	{
		id: "herobrinefr",
		name: "Herobrine.fr",
		description: "Allo lol",
		status: ProjectStatus.DONE,
		skills: [
			Skill.PHP, Skill.MYSQL, Skill.SCSS, Skill.TYPESCRIPT
		]
	},
	{
		id: "winds-mana",
		name: "Winds of Mana",
		description: "Jeu",
		Status: ProjectStatus.WORK_IN_PROGRESS,
		skills: [
			Skill.GOLANG
		]
	},
	{
		id: "portfolio",
		name: "Portfolio",
		description: "Le portfolio",
		Status: ProjectStatus.DONE,
		skills: [
			Skill.ASTRO, Skill.TYPESCRIPT
		]
	}
];