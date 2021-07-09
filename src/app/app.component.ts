import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nguyen Minh Huong';

  /**
   * Data for profile
   */
  profile = {
    name: 'Nguyễn Minh Hướng',
    job: 'Front-end Developer',
    avatar: '../assets/image/avatar.jpg',
    information: [
      { value: '02 Jan, 1992', class: 'birthday', icon: 'birthday2' },
      { value: 'Male', class: 'gender', icon: 'gender' },
      { value: 'Married', class: 'married', icon: 'married' }
    ],
    contact: [
      { value: 'nguyenminhhuong2192@gmail.com', class: 'email', icon: 'envelop' },
      { value: '0975.748.968', class: 'mobile', icon: 'mobile' },
      { value: 'Phù Đổng - Gia Lâm - Hà Nội', class: 'address', icon: 'home' }
    ]
  };

  /**
   * Data for work experience
   */
  companies = [
    {
      name: 'LINE Technology Vietnam',
      time: 'Aug 2019 - Now',
      logo: '../assets/image/ltv.png',
      projects: [
        {
          time: 'Aug 2019 - Now',
          name: 'I can\'t public the project of company',
          description: 'Using Vuejs, nuxtjs framwork, Line internal service to build CMS systems, create novel pages,...',
          rolesInProject: [{ value: 'Front-end Developer', icon: 'staff2' }],
          technicalUsed: [
            { value: 'Vuejs', icon: 'vuejs' },
            { value: 'Nuxtjs', icon: 'nuxtjs' },
            { value: 'Tailwins', icon: 'tailwind' },
            { value: 'Atom design', icon: 'atom' },
            { value: '...', icon: '1' }
          ]
        }
      ]
    },
    {
      name: 'Five9 Viet Nam',
      time: 'Oct 2017 - Aug 2019',
      logo: '../assets/image/five9.jpg',
      projects: [
        {
          time: 'Apr 2018 - Aug 2019',
          name: 'Cyber Sale',
          description: 'Create admin page to manage information of user, customer, config page,...',
          rolesInProject: [{ value: 'Full-stack Developer', icon: 'staff2' }],
          technicalUsed: [
            { value: 'Angularjs 4', icon: 'angular' },
            { value: 'Canvasjs', icon: 'canvasjs' },
            { value: 'Nodejs', icon: 'nodejs' },
            { value: 'MySql', icon: 'mysql' },
            { value: '...', icon: '1' }
          ]
        },
        {
          time: 'Oct 2017 - Apr 2018',
          name: 'Cyber Insight',
          description: 'Create admin page to manage information of user, customer, config page,...',
          rolesInProject: [{ value: 'Front-end Developer', icon: 'staff2' }],
          technicalUsed: [
            { value: 'Angularjs 4', icon: 'angular' },
            { value: '...', icon: '1' }
          ]
        }
      ]
    },
    {
      name: 'FPT Software',
      time: 'Jul 2014 - Oct 2017',
      logo: '../assets/image/fsoft.png',
      projects: [
        {
          time: 'Apr 2017 - Oct 2017',
          name: 'Simple copy',
          description: 'Create copy function for printer.',
          rolesInProject: [
            { value: 'Team lead', icon: 'teamlead' },
            { value: 'Developer', icon: 'staff2' },
            { value: 'Tester', icon: 'tester' }
          ],
          technicalUsed: [
            { value: 'Python', icon: 'python' },
            { value: 'Javascript', icon: 'javascript' },
            { value: 'HTML', icon: 'html5' },
            { value: 'CSS', icon: 'css3' }
          ]
        },
        {
          time: 'Feb 2017 - Apr 2017',
          name: 'Mediawiki search painting',
          description: 'Create website base on mediawiki framework.',
          rolesInProject: [{ value: 'PM', icon: 'pm' }],
          technicalUsed: [
            { value: 'Javascript', icon: 'javascript' },
            { value: 'HTML', icon: 'html5' },
            { value: 'CSS', icon: 'css3' }
          ]
        },
        {
          time: 'Dec 2016 - Jan 2017',
          name: 'Create backend analytic methods',
          description: 'Handling analytic streak and spot.',
          rolesInProject: [
            { value: 'Team lead', icon: 'teamlead' },
            { value: 'Developer', icon: 'staff2' }
          ],
          technicalUsed: [{ value: 'Python', icon: 'python' }]
        },
        {
          time: 'Jan 2016 - Dec 2016',
          name: 'RSCUI',
          description: 'Maintain web application which display printing phases of printer machine.',
          rolesInProject: [
            { value: 'Team lead', icon: 'teamlead' },
            { value: 'Developer', icon: 'staff2' },
            { value: 'Tester', icon: 'tester' }
          ],
          technicalUsed: [
            { value: 'Javascript', icon: 'javascript' },
            { value: 'HTML', icon: 'html5' },
            { value: 'CSS', icon: 'css3' }
          ]
        },
        {
          time: 'Jul 2014 - Dec 2015',
          name: 'RSCUI',
          description: 'Deploy web application which display printing phases of printer machine.',
          rolesInProject: [
            { value: 'Developer', icon: 'staff2' },
            { value: 'Tester', icon: 'tester' }
          ],
          technicalUsed: [
            { value: 'Javascript', icon: 'javascript' },
            { value: 'HTML', icon: 'html5' },
            { value: 'CSS', icon: 'css3' }
          ]
        }
      ]
    }
  ];

  /**
   * Data for technical experience
   */
  logoFolder = '../assets/logo/';
  technicalsExperience = [
    {
      name: 'Front-end',
      contents: [
        { logo: this.logoFolder + 'html5.png', name: 'HTML5', start: new Date('7/1/2014'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'css3.png', name: 'CSS3', start: new Date('7/1/2014'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'javascript.png', name: 'Javascript', start: new Date('7/1/2014'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'Angular.png', name: 'Angular', start: new Date('10/1/2017'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'Jquery.png', name: 'Jquery', start: new Date('7/1/2014'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'bootstrap.png', name: 'Bootstrap', start: new Date('7/1/2014'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'canvasjs.jpg', name: 'Canvasjs', start: new Date('12/1/2017'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'd3js.png', name: 'D3js', start: new Date('1/1/2015'), end: new Date('7/1/2015'), other: '' },
        { logo: this.logoFolder + 'less.png', name: 'Less', start: new Date('6/1/2017'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'sass.png', name: 'SASS', start: new Date('6/1/2017'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'vuejs.jpg', name: 'VueJS', start: new Date('8/1/2019'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'tailwind.png', name: 'Tailwind', start: new Date('8/1/2019'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'nuxtjs.png', name: 'NuxtJS', start: new Date('8/1/2019'), end: new Date(), other: '' }
      ]
    },
    {
      name: 'Back-end And Database',
      contents: [
        { logo: this.logoFolder + 'nodejs.png', name: 'Nodejs', start: new Date('3/1/2018'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'python.png', name: 'Python', start: new Date('10/1/2016'), end: new Date('1/30/2017'), other: '' },
        { logo: this.logoFolder + 'wiki.png', name: 'Mediawiki', start: new Date('2/1/2017'), end: new Date('4/30/2017'), other: '' },
        { logo: this.logoFolder + 'MySQL-1.png', name: 'MySql', start: new Date('6/1/2018'), end: new Date(), other: '' }
      ]
    },
    {
      name: 'OOP And Design',
      contents: [
        { logo: this.logoFolder + 'oop.png', name: 'Object Oriented Programming', start: null, end: null, other: '' },
        { logo: this.logoFolder + 'desing-pattern.png', name: 'Design pattern', start: null, end: null, other: 'MVC, Template, Singleton,...' },
        { logo: this.logoFolder + 'detailed_design.png', name: 'Detail design', start: null, end: null, other: '' },
        { logo: this.logoFolder + 'srs.png', name: 'SRS', start: null, end: null, other: 'Create SRS from customer document' },
        { logo: this.logoFolder + 'atom.jpg', name: 'Atomic Design Pattern', start: null, end: null, other: '' }
      ]
    },
    {
      name: 'Tool And IDE',
      contents: [
        { logo: this.logoFolder + 'git.png', name: 'Git', start: new Date('1/1/2016'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'svn.png', name: 'SVN', start: new Date('7/1/2014'), end: new Date('1/1/2016'), other: '' },
        { logo: this.logoFolder + 'visual-code.png', name: 'Visualcode', start: new Date('1/1/2015'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'toad.png', name: 'Toad', start: new Date('1/1/2018'), end: new Date('8/1/2019'), other: '' },
        { logo: this.logoFolder + 'navicat.jpg', name: 'Navicate', start: new Date('1/1/2018'), end: new Date('8/1/2019'), other: '' },
        { logo: this.logoFolder + 'jira.png', name: 'Jira', start: new Date('7/1/2014'), end: new Date(), other: '' },
        { logo: this.logoFolder + 'microsoft-office.jpg', name: 'Microsoft Office', start: new Date('7/1/2014'), end: new Date(), otherClass: 'microsoft', other: 'Excel, Power Point, Word' },
        { logo: this.logoFolder + 'intelij.jpeg', name: 'InteliJ', start: new Date('8/1/2019'), end: new Date(), other: '' },
      ]
    }
  ];

  /**
   * Data for Education
   */
  educations = [
    {
      name: 'FPT University',
      time: 'From 2010 To 2014',
      learnAbout: 'Software Engineering (Information System)',
      result: 'Good',
      logo: this.logoFolder + 'fu.png'
    },
    {
      name: 'FPT Software',
      time: 'From Jan 2013 To May 2013',
      learnAbout: 'On job training at FPTSoftware',
      result: 'Very Good (In top 5)',
      logo: this.logoFolder + 'fsoft.png'
    }
  ];

  /**
   * Data for foreign language
   */
  foreignLanguage = [
    {
      logo: this.logoFolder + 'en.png',
      name: 'English',
      level: [
        { name: 'Listening', value: 'Normal' },
        { name: 'Reading', value: 'Good' },
        { name: 'Speaking', value: 'Normal' },
        { name: 'Writing', value: 'Normal' }
      ]
    },
    {
      logo: this.logoFolder + 'jp.png',
      name: 'Japanese',
      level: [
        { name: 'Listening', value: 'Beginer' },
        { name: 'Reading', value: 'Beginer' },
        { name: 'Speaking', value: 'Beginer' },
        { name: 'Writing', value: 'Beginer' }
      ]
    }
  ];

  /**
   * Data for soft skill
   */
  softSkills = [
    { icon: 'point-right', content: 'Teamwork' },
    { icon: 'point-right', content: 'Time management' },
    { icon: 'point-right', content: 'Communicate to PM, Member, Japanese onsite, Japanese customer,...' },
    { icon: 'point-right', content: 'Team management (team size 3 members).' },
    { icon: 'point-right', content: 'Write Email, Memo, Report by english for Japanese customer.' }
  ];

  /**
   * Data for hobbies
   */
  hobbies = [
    { icon: this.logoFolder + 'fishing.png', name: 'Fishing' },
    { icon: this.logoFolder + 'vovinam.jpg', name: 'Vovinam' },
    { icon: this.logoFolder + 'bycicle.jpg', name: 'Bycicle' },
    { icon: this.logoFolder + 'cooking.png', name: 'Cooking' }
  ];

  getTimeRange(start, end) {
    const TIMEPERYEAR = 365 * 24 * 60 * 60 * 1000;
    if (start && end) {
      let timeTemp = end.getTime() - start.getTime();
      let time = parseFloat((timeTemp / TIMEPERYEAR).toFixed(1));
      if (1 <= time) {
        return time + ' years';
      } else if (0 < time) {
        return (time * 12).toFixed(1) + ' months';
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  trackByRole(idex, item) {
    return item.id;
  };

  trackByProject(idex, item) {
    return item.id;
  };

  trackByCompany(idex, item) {
    return item.id;
  };

  trackByTechnical(idex, item) {
    return item.id;
  };

  trackByTech(idex, item) {
    return item.id;
  };
}
