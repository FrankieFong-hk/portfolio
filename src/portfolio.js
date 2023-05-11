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
    "Hello there! My name is Frankie and I am a web developer with a passion for creating exceptional digital experiences. I specialize in designing and developing custom websites and web applications that are not only visually stunning but also highly functional and user-friendly.I have one years of experience in the industry and have worked with clients from a wide variety of industries, including [List of Industries]. My expertise lies in HTML, CSS, JavaScript, and various web development frameworks like React, Angular, and Node.js.My goal as a web developer is to create websites that not only meet my clients' needs but also exceed their expectations. I believe that the key to success in web development is collaboration, and I always strive to work closely with my clients to ensure that their vision is fully realized. If you're looking for a web developer who is passionate about creating beautiful and functional websites, then look no further. I would love to hear about your project and discuss how I can help bring your vision to life.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/FrankieFong-hk',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'httfong@gmail.com',
}

export { header, about, projects, skills, contact }
