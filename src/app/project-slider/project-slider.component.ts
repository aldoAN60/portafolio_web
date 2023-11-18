import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-slider',
  templateUrl: './project-slider.component.html',
  styleUrls: ['./project-slider.component.css']
})
export class ProjectSliderComponent implements OnInit{

  images = ['~src/assets/img/presentation-background.jpg','~src/assets/img/presentatio-background.jpg','~src/assets/img/portafolio_pic.jpg'];
      
  projects = [
    {
      "project_name":"License Inventory",
      "path_picture":['~src/assets/img/license-inventory-pic-1.webp','~src/assets/img/license-inventory-pic-2.png'],
      "descripcion":"During my internship at ZKW, I led the 'License Inventory' project to address the lack of a formal record of software licenses across the entire company. My responsibilities included gathering information about licenses in different departments, developing a centralized database, and creating the code for both the backend and frontend of the application. I implemented an HTTP server, deployed the application on a local intranet server, and provided an intuitive and secure user interface with a user authentication system. The application enabled the IT department to efficiently manage licenses through a CRUD system.",
      "used_technologies":['Angular','laravel','SQL server'],

    },
    {
      "project_name":"Andon 2.0",
      "path_picture":['~src/assets/img/license-inventory-pic-1.webp','~src/assets/img/license-inventory-pic-2.png'],
      "descripcion":"During my internship at ZKW, I had the opportunity to lead the development of the web application 'andon 2.0'. This application was planned and designed to transform the way production stoppages are managed, complementing the previous alarm system known as 'andon'. The main focus of 'andon 2.0' is to improve operational efficiency and communication on the production line, optimizing downtime and response times. When a production line stops, the application detects it and sends an email to the responsible personnel. Simultaneously, an alarm is triggered on the production line, and the reason for the stoppage, line number, and elapsed time since the start of the stoppage are displayed on a notification panel located in the offices of operational staff. This multifaceted approach ensures swift communication, immediate response, and detailed information about production stoppages.",
      "used_technologies":['Angular','laravel','SQL server'],

    },
    {
      "project_name":"HotelTrack",
      "path_picture":['~src/assets/img/license-inventory-pic-1.webp','~src/assets/img/license-inventory-pic-2.png'],
      "descripcion":"As a result of my previous experience as a receptionist in various hotels, the inspiration to develop the HotelTack project emerged. HotelTack focuses on enhancing task allocation and payment records, addressing key aspects such as efficient room management, detailed tracking of payments related to stays, additional services, and rental of meeting rooms. This project originated from the need to optimize and centralize daily operations in the hotel industry, providing a comprehensive solution that enhances productivity and the overall experience for both staff and customers.",
      "used_technologies":['Larevel','JavaScript','mySQL'],

    }
  ];
responsiveOptions: any[] = [
  {
      breakpoint: '1024px',
      numVisible: 5
  },
  {
      breakpoint: '768px',
      numVisible: 3
  },
  {
      breakpoint: '560px',
      numVisible: 1
  }
];
galleryImages: any[] = [];

constructor() {

}
ngOnInit(): void {

  }
}
