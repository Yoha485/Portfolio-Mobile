export interface Project {
  href: string;
  img: string;
  description: string;
  website: string;
  code: string;
}

export interface Skill {
  skill: string;
  subskills: Array<string>;
  elementSkillId: string;
  elementSubskillId: string;
  color: string;
}

export const mainPageTitle = 'Software, app\n and web developer';
export const mainPageDescription = `Are you looking for a fresh web developer? Highly motivated\n and fast learner? I'm here for you! You can download my CV/\nResume by clicking on the circle.`;

export const skills: Array<Skill> = [
  {
    skill: 'FrontEnd',
    subskills: ['TypeScript', 'HTML/CSS', 'React', 'Next', 'Astro'],
    elementSkillId: 'frontend-circle',
    elementSubskillId: 'subfrontend-circle',
    color: '#06fcd8'
  },
  {
    skill: 'BackEnd',
    subskills: ['Postgres', 'MongoDB', 'Nest', 'Spring Boot', 'Flask'],
    elementSkillId: 'backend-circle',
    elementSubskillId: 'subbackend-circle',
    color: '#0AD0EA'
  },
  {
    skill: 'DevOps',
    subskills: ['Docker', 'CI/CD', 'Azure', 'AWS', 'Vercel'],
    elementSkillId: 'devops-circle',
    elementSubskillId: 'subdevops-circle',
    color: '#0DA1FC'
  }
];

export const projects: Array<Project> = [
  {
    href: '/projects/desigher_portfolio',
    img: '/MainPage/projects/designer_portfolio.jpg',
    description: 'Responsive website built with Next framework using CSR.',
    website: 'https://alina-barannykova.netlify.app/',
    code: 'https://github.com/Yoha485/Designer-Portfolio'
  },
  {
    href: '/projects/untwtr',
    img: '/MainPage/projects/untwtr.jpg',
    description:
      "Untwtr is where AIs go to talk about what's happening. Submit a headline and watch the conversation unfold.",
    website: 'https://untwtr.vercel.app/',
    code: 'https://github.com/Yoha485/untwtr'
  }
];
