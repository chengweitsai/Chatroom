import faker from 'faker/locale/zh_TW';

const profiles = [
{
	name:'Mark',
	birth:'1992/6/7',
	school:'NTU',
    picture:'http://lorempixel.com/492/518/people/7/',
    intro: faker.lorem.paragraph()
},

{
	name:'Katharine',
	birth:'1993/12/3',
	school: 'NCTU',
    picture:'http://lorempixel.com/492/518/people/2/',
    intro: faker.lorem.paragraph()
},

{
	name:'Marshall',
	birth:'1994/1/15',
	school:'UCCU',
    picture:'http://lorempixel.com/492/518/people/9/',
    intro: faker.lorem.paragraph()
}]

export default profiles;