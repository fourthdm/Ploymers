import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  scrollToTopBtn = document.getElementById("scrollToTopBtn");
  rootElement = document.documentElement;

  scroll() {
    this.rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  closeNavbar() {
    // Close the navbar by toggling the collapse class
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    if (navbarToggler) {
      navbarToggler.click();
    }
  }

  ngOnInit(): void {

  }
  
}