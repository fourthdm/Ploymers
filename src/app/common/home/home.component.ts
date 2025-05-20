import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('frameImage', { static: true }) frameImageRef!: ElementRef<HTMLImageElement>;

  totalFrames = 189;
  currentFrame = 1;
  currentFrameSrc = this.getFrameSrc(1);

  ngOnInit(): void {
    this.setupScrollTrigger();
  }

  getFrameSrc(frame: number): string {
    const paddedFrame = String(frame).padStart(1, '0'); // e.g., 0001.jpg
    return `assets/newvideo/${paddedFrame}.jpg`; // adjust path
  }

  setupScrollTrigger() {
    const imageElement = this.frameImageRef.nativeElement;
    gsap.to(this, {
      currentFrame: this.totalFrames - 1,
      snap: 'currentFrame',
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-video-wrapper',
        start: 'top top',
        end: '+=4000', // adjust for scroll length
        scrub: 0.3,
        pin: true,
        onUpdate: () => {
          // this.currentFrameSrc = this.getFrameSrc(Math.round(this.currentFrame));
          const frameIndex = Math.round(this.currentFrame);
          const newSrc = this.getFrameSrc(frameIndex);
          imageElement.src = newSrc;
        }
      }
    });
  }

  // setupScrollTrigger() {
  //   gsap.to(this, {
  //     currentFrame: this.totalFrames - 1,
  //     snap: 'currentFrame',
  //     ease: 'none',
  //     scrollTrigger: {
  //       scrub: 0.3,
  //       trigger: '.scroll-video-wrapper',
  //       start: 'top top',
  //       end: 'bottom bottom'
  //     },
  //     onUpdate: () => {
  //       this.currentFrameSrc = this.getFrameSrc(Math.round(this.currentFrame));
  //     }
  //   });
  // }

  // setupScrollTrigger() {
  //   const videoWrapper = document.querySelector('.scroll-video-wrapper');
  //   gsap.to(this, {
  //     currentFrame: this.totalFrames - 1,
  //     snap: 'currentFrame',
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: videoWrapper,
  //       start: 'top top',
  //       end: '+=3000', // adjust based on scroll distance needed
  //       scrub: 0.3,
  //       pin: videoWrapper,
  //       anticipatePin: 1,
  //     },
  //     onUpdate: () => {
  //       this.currentFrameSrc = this.getFrameSrc(Math.round(this.currentFrame));
  //     }
  //   });
  // }


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