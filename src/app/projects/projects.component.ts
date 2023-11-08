import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Safia Ahmed - Projects');
  }
  cards = [
    {
      title: 'FeedForward',
      description: 'Constructed a CRM platform that utilizes customer data to create a dashboard (Power BI + Pandas) and an interactive admin interface (Angular) to auto-approve/disapprove candidates and construct optimized routes to deliver packages using the Google and Routific API’s',
      tags: ['Angular', 'TypeScript', 'Python'],
    },
    {
      title: 'FEMSPACE',
      description: 'Made using React Native, an app that uses a MAP API to show free menstrual products near you.',
      tags: ['React Native', 'JavaScript'],
    },
    {
      title: 'RTOS Project',
      description: 'Implemented memory management support within the kernel, designed kernel support for scheduling tasks based on priority and task preemption. To see this project please email me at safia.ahmed@uwaterloo.ca',
      tags: ['C'],
    },
  ];

  selectedTags: { [key: string]: boolean } = {}; 

  filterCards() {
    const selectedTags = Object.keys(this.selectedTags).filter((tag) => this.selectedTags[tag]);
  
    if (selectedTags.length === 0) {
      this.cards = [
        {
          title: 'Angular Portfolio',
          description: 'Portfolio Website using TypeScript, HTML/CSS, Bootstrap.',
          tags: ['Angular', 'TypeScript', 'Python'],
        },
        {
          title: 'FEMSPACE mobile app',
          description: 'Made using React, an app that uses a MAP API to show free menstrual products near you.',
          tags: ['React Native', 'JavaScript'],
        },
        {
          title: 'RTOS Project',
          description: 'Implemented memory management support within the kernel, designed kernel support for scheduling tasks based on priority and task preemption.',
          tags: ['C'],
        },
      ];
    } else {
      this.cards = this.cards.filter((card) => card.tags.some((tag) => selectedTags.includes(tag)));
    }
  }
  

  getUniqueTags(): string[] {
    const allTags: string[] = [];

    this.cards.forEach((card) => {
      card.tags.forEach((tag) => {
        allTags.push(tag);
      });
    });

    return [...new Set(allTags)];
  }


getTagColorClass(tag: string): string {
  switch (tag) {
    case 'Angular':
      return 'tag-blue';
    case 'TypeScript':
      return 'tag-green';
    case 'Python':
      return 'tag-pink';
    case 'React Native':
      return 'tag-red';
    case 'JavaScript':
      return 'tag-orange';
    case 'C':
      return 'tag-purple';
    default:
      return ''; 
  }
}
}
