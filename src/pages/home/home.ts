import { Component,  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  number=0;
  public myLottie=[{
      path: 'assets/4413-loading-pizza.json',
      renderer: 'html',
      autoplay: true,
      loop: true
      },{
        path:  'assets/4432-face-scanning.json',
        renderer: 'svg',
        autoplay: true,
        loop: true
    },{
      path:'assets/4456-user-busy.json',
      renderer: 'svg',
      autoplay: true,
      loop: true
  }];
  
  constructor() {
  }
 
  handleAnimation(anim: any) {
      this.anim = anim;
  }

  stop() {
      this.anim.stop();
  }

  play() {
      this.anim.play();
  }

  pause() {
      this.anim.pause();
  }

  setSpeed(speed: number) {
      this.animationSpeed = speed;
      this.anim.setSpeed(speed);
  }

  previous(){
  this.number= this.number>0 ? (this.number-1) :0;
  }

  next(){
  this.number= this.number<2 ? (this.number+1) :2;
  }
}
