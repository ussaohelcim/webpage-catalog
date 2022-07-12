import { readdirSync, readFileSync } from "fs";

import { pagesFolderPath } from "./main";

interface IPageInfo{
	title:string
	about:string
	image:string
	url:string
}


const pagesDirs = readdirSync(pagesFolderPath)
const pages:IPageInfo[] = []

pagesDirs.forEach((p)=>{
	const info = require(`${pagesFolderPath}/${p}/info.json`) as IPageInfo
	if(info)
	{
		pages.push({
			url : `/pages/${info.title}`,
			title: info.title,
			about: info.about,
			image: info.image
			
		})
	}
})

export default pages