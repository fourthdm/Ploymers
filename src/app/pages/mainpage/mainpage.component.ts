import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

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

  // setupScrollTrigger() {
  //   const imageElement = this.frameImageRef.nativeElement;
  //   gsap.to(this, {
  //     currentFrame: this.totalFrames - 1,
  //     snap: 'currentFrame',
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.scroll-video-wrapper',
  //       start: 'top top',
  //       end: '+=4000', 
  //       scrub: 0.3,
  //       pin: true,
  //       onUpdate: () => {
  //         this.currentFrameSrc = this.getFrameSrc(Math.round(this.currentFrame));
  //         const frameIndex = Math.round(this.currentFrame);
  //         const newSrc = this.getFrameSrc(frameIndex);
  //         imageElement.src = newSrc;
  //       }
  //     }
  //   });
  // }

  setupScrollTrigger() {
    const imageElement = this.frameImageRef.nativeElement;
    gsap.to(this, {
      currentFrame: this.totalFrames - 1,
      snap: 'currentFrame',
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-video-wrapper',
        start: 'top top',
        end: '+=4000',
        scrub: 0.3,
        pin: true, // Keep this true
        onUpdate: () => {
          const frameIndex = Math.round(this.currentFrame);
          const newSrc = this.getFrameSrc(frameIndex);
          imageElement.src = newSrc;
        }
      }
    });
  }

}
