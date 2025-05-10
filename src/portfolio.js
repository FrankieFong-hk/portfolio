import CrwnClothingUrl from './assets/crwn-clothing.png'
import MonsterRolodexUrl from './assets/monster-rolodex.png'
import PhotowallUrl from './assets/photowall.png'
import ShoppingSystemUrl from './assets/shopping-system.png'
import TwitterCloneUrl from './assets/twiiter-clone.png'
import ProductStoreUrl from './assets/product-store.png'
import CV from './assets/CV(Frankie Fong).pdf'

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
    "Hello, I'm Frankie Fong, a passionate Front-End Developer with over three years of experience building dynamic, responsive, and user-focused web applications. I specialize in JavaScript, TypeScript, React, Node.js, Express.js, MongoDB, and Next.js, with a strong foundation in creating scalable solutions that enhance user engagement and performance. My work spans diverse industries, from luxury brand websites for clients like Dior and Givenchy to innovative platforms for travel and NGOs, where I’ve optimized load times by 25% and boosted organic traffic through strategic SEO and accessibility improvements.",
  resume: CV,
  social: {
    linkedin: 'https://www.linkedin.com/in/frankie-fong-2688a8278/',
    github: 'https://github.com/FrankieFong-hk',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Twitter Clone',
    description:
      'The Twitter clone is a social media website that based on React, Node.js, Express.js and the database is hosted on MongoDB. The website features functions such as registration, login, create posts, delete posts, update profile, and follow users.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'tailwindcss'],
    sourceCode: 'https://github.com/FrankieFong-hk/twitter-clone',
    livePreview: 'https://twitter-clone-j4sj.onrender.com/',
    imgUrl: TwitterCloneUrl,
  },
  {
    name: 'Product Store',
    description:
      'The product store is a e-commerce website that based on React, Node.js, Express.js and the database is hosted on MongoDB. The website features functions such as create products, update products, delete products, and categorization.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'tailwindcss'],
    sourceCode: 'https://github.com/FrankieFong-hk/mern-crash-course',
    livePreview: 'https://product-store-bi9z.onrender.com/',
    imgUrl: ProductStoreUrl,
  },
  {
    name: 'Clothes Online Shop',
    description:
      'The online clothes shop is a ecommerce erbsite that based on React and the database is hosted on Firebase. The website features functions such as registration, login, shopping cart, item counting, and categorization.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase'],
    sourceCode: 'https://github.com/FrankieFong-hk/crwn-clothing',
    livePreview: 'https://frankiefong-hk.github.io/crwn-clothing/',
    imgUrl: CrwnClothingUrl,
  },
  {
    name: 'Photowall',
    description:
      'The online photo wall is similar to popular social media platforms and is built with React and hosted on Firebase. The website features functions such as adding photos with descriptions, removing photos, and commenting on photos.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase'],
    sourceCode: 'https://github.com/FrankieFong-hk/react-photowall',
    livePreview: 'https://frankiefong-hk.github.io/react-photowall/',
    imgUrl: PhotowallUrl,
  },
  {
    name: 'Fruit Shopping System',
    description:
      'The online fruit shopping website is based on React and includes functions such as adding items to the shopping cart, item counting, and checkout calculations.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/FrankieFong-hk/shopping-system',
    livePreview: 'https://frankiefong-hk.github.io/shopping-system/',
    imgUrl: ShoppingSystemUrl,
  },
  {
    name: 'Monsters Rolodex',
    description:
      'The Monster Rolodex is based on React and contains functions for searching data and setting titles.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/FrankieFong-hk/monsters_rolodex',
    livePreview: 'https://frankiefong-hk.github.io/monsters_rolodex/',
    imgUrl: MonsterRolodexUrl,
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Redux',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'tailwindcss',
  'Bootstrap',
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
