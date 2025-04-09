import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  title = 'polymer';

  @ViewChild('frameImage', { static: true }) frameImageRef!: ElementRef<HTMLImageElement>;

  totalFrames = 824;
  currentFrame = 19;
  currentFrameSrc = this.getFrameSrc(19);

  ngOnInit(): void {
    this.setupScrollTrigger();
  }

  getFrameSrc(frame: number): string {
    const paddedFrame = String(frame).padStart(4, '0'); // e.g., 0001.jpg
    return `assets/images/${paddedFrame}.jpg`; // adjust path
  }

  setupScrollTrigger() {
    gsap.to(this, {
      currentFrame: this.totalFrames - 1,
      snap: 'currentFrame',
      ease: 'none',
      scrollTrigger: {
        scrub: 0.3,
        trigger: '.scroll-video-wrapper',
        start: 'top top',
        end: 'bottom bottom'
      },
      onUpdate: () => {
        this.currentFrameSrc = this.getFrameSrc(Math.round(this.currentFrame));
      }
    });
  }
}