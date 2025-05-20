import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  sendEmail(event: Event) {
    event.preventDefault();

    emailjs.sendForm(
      'service_7mjkbap',       // e.g., service_xxxxxx
      'template_yz0dqba',      // e.g., template_yyyyyy
      event.target as HTMLFormElement,
      'HTXf6tizz8sRUQmYP'        // e.g., public_zzzzzz
    ).then(
      () => {
        alert('Enquiry sent successfully!');
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Failed to send enquiry.');
      }
    );

    (event.target as HTMLFormElement).reset();
  }



  ngOnInit(): void {

  }
}
