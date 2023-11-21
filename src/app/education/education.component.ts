import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],

})
export class EducationComponent {
  events: any[];
  educations: any[];

  constructor() {
      this.events = [
          { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
          { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
          { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
          { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
      ];
      this.educations = [
        {course:'java certificate', organization:'SoloLearn', date:'may 2019', course_link:'https://www.sololearn.com/certificates/CT-UF4ZHOYX'},
        {course:'SQL certificate', organization:'SoloLearn', date:'january 2022', course_link:'https://www.sololearn.com/certificates/CT-AUHAASUZ'},
        {course:'JAVASCRIPT ALGORITHMS AND DATA STRUCTURES', organization:'FreeCodeCamp', date:'abril 2023', course_link:'https://www.freecodecamp.org/certification/fcc4889cf0e-1e77-4c4f-adab-1fc90ccabaf1/javascript-algorithms-and-data-structures'},
        {course:'RESPOSIVE WEB DESIGN', organization:'FreeCodeCamp', date:'abril 2023', course_link:'https://www.freecodecamp.org/certification/fcc4889cf0e-1e77-4c4f-adab-1fc90ccabaf1/responsive-web-design'},
        {course:'Laravel certificate', organization:'Open Bootcamp', date:'may 2023', course_link:'none'},
        {course:'PHP certificate', organization:'Open Bootcamp', date:'may 2023', course_link:'none'},
        {course:'HTML certificate', organization:'Sololearn', date:'October 2023', course_link:'https://www.sololearn.com/certificates/CC-PC0UOPJ1'},
      ];
  }
}
