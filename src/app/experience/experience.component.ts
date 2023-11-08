import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Safia Ahmed - Experience');
  }
  

accordionItems = [
  {title: 'Network Developer Intern - Rogers',
  content: ['Leveraged Angular framework to contribute to the development of an interactive web application, enhancing the user experience and ensuring a responsive design',
    'Developed automated lists using SQL eliminating the need for manual data extraction improving efficiency by 17% + processed large-scale datasets using big data technologies such as Spark in Azure',
    'Designed and implemented JavaScript scripts to automate the conversion of JSON data from a web app to CSV files (and vice versa), significantly reducing data processing time and human error'],
  expanded: false
},

{title: 'Hardware Engineering Intern - AMC',
content: ['Debugged PCB boards using schematics and theoretical circuit knowledge', 'Authorized test procedures for new products by analyzing schematics and writing safety procedures',
'Tested products using equipment such as DMM, oscilloscopes, power supplies, and soldered resistors, capacitors, and through-hole and surface mount components'],
expanded: false
},
{title: 'Electrical Engineering Intern - Rogers',
content: ['Assisted in RF design of new and existing cell sites as per planning specification and creating radio schematic diagrams to upgrade antenna systems', 'Provided documentation support for RF designs, Safety Code 6 submissions, and engineering documentations as required by radio network design'],
expanded: false
},
{title: 'Learning Assistant - University of Waterloo',
content: ['Developed a program called Hive Mind, a free tutoring service to underprivileged high school students', 'Tutored grade 11 and 12 students in physics, chemistry, and calculus', 'Provided over 30+ one-on-one sessions per week increasing their problem solving skills and overall course averages by 5-10%'],
expanded: false
},
];

toggleAccordion(item: any): void {
  item.expanded = !item.expanded;
}
}