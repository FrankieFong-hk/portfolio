import CrwnClothingUrl from './assets/crwn-clothing.png';
import MonsterRolodexUrl from './assets/monster-rolodex.png';
import PhotowallUrl from './assets/photowall.png';
import ShoppingSystemUrl from './assets/shopping-system.png';



const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://frankiefong-hk.github.io/portfolio',
  title: 'Home',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Frankie Fong',
  role: 'Web Developer',
  description:
    "I am a web developer with a passion for creating exceptional digital experiences. I specialize in developing custom websites and web applications that are not only visually stunning but also highly functional, user-friendly, and responsive. I have one year of experience in the industry and have worked with clients from international top-tier luxury brands (Dior, Givenchy, Biotherm, and Clarins). My expertise lies in HTML, CSS, and JavaScript, as well as various web development frameworks like React. For backend development, I have expertise in PHP and MySQL. This website showcases some of the self-study projects I've worked on over the years. Feel free to take a look!",
  resume: 'https://example.com',
  social: {
    linkedin: '',
    github: 'https://github.com/FrankieFong-hk',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Clothes Online Shop',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase'],
    sourceCode: 'https://github.com/FrankieFong-hk/crwn-clothing',
    livePreview: 'https://frankiefong-hk.github.io/crwn-clothing/',
    imgUrl: CrwnClothingUrl
  },
  {
    name: 'Photowall',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase'],
    sourceCode: 'https://github.com/FrankieFong-hk/react-photowall',
    livePreview: 'https://frankiefong-hk.github.io/react-photowall/',
    imgUrl: PhotowallUrl
  },
  {
    name: 'Fruit Shopping System',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/FrankieFong-hk/shopping-system',
    livePreview: 'https://frankiefong-hk.github.io/shopping-system/',
    imgUrl: ShoppingSystemUrl
  },
  {
    name: 'Monsters Rolodex',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/FrankieFong-hk/monsters_rolodex',
    livePreview: 'https://frankiefong-hk.github.io/monsters_rolodex/',
    imgUrl: MonsterRolodexUrl
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'React.js',
  'Redux',
  'JQuery',
  'Three.js',
  'PHP',
  'MySQL',
  'WordPress',
  'Git',
  'Photoshop',
  'Figma',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'httfong@gmail.com',
}

export { header, about, projects, skills, contact }
