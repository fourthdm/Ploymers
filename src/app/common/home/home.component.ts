import { AfterViewInit, Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    //   gsap.from(".line-1", {
    //     scrollTrigger: {
    //       trigger: ".line-1",
    //       scrub: true,
    //       start: "top bottom",
    //       end: "top top"
    //     },
    //     scaleX: 0,
    //     transformOrigin: "left center",
    //     ease: "none"
    //   });

    //   gsap.from(".line-2", {
    //     scrollTrigger: {
    //       trigger: ".orange",
    //       scrub: true,
    //       pin: true,
    //       start: "top top",
    //       end: "+=100%"
    //     },
    //     scaleX: 0,
    //     transformOrigin: "left center",
    //     ease: "none"
    //   });

    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".purple",
    //       scrub: true,
    //       pin: true,
    //       start: "top top",
    //       end: "+=100%"
    //     }
    //   });

    //   tl.from(".purple p", {
    //     scale: 0.3,
    //     rotation: 45,
    //     autoAlpha: 0,
    //     ease: "power2"
    //   })
    //     .from(".line-3", {
    //       scaleX: 0,
    //       transformOrigin: "left center",
    //       ease: "none"
    //     }, 0)
    //     .to(".purple", {
    //       backgroundColor: "#28a92b"
    //     }, 0);
    // }

  }
}