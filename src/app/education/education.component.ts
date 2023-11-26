import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],

})
export class EducationComponent {
  educations: any[];

  constructor() {
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
