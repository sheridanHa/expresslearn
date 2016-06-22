import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-home',
  templateUrl: 'app/home/home2.html'
  //template: `<div> <h1>{{pageTitle}} </h1></div>`
})
export class HomeComponent {
    
   public pageTitle : string = "Home";
   
   constructor () {
     console.log("init home");
     console.log(window.location.pathname);

   }
    ngOnInit(): void {
        console.log('In OnInit');
        var car = document.getElementById("homeSlides");    
    }
   
 }