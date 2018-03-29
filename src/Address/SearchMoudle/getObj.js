import { getPinyin } from './getPinyin.js';
import data from './data.json';

let obj = {};

data.sort(( v, m )=>{
	return v.localeCompare(m,'zh')
}).forEach(v => {
	let letters = getPinyin(v[0]);
	let letter = letters[0]

	if(obj[`${letter}`]){
		obj[`${letter}`].push(v)
	}else{
		obj[`${letter}`] = [];
		obj[`${letter}`].push(v)
	}
})

export default Object.assign({},obj);