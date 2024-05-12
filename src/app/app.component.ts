import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker'; 
import { lorem } from 'faker';
import { parseTemplate } from '@angular/compiler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  randomText = lorem.sentence();
  userText = "";

  onInput(value: string){
    /* console.log(value); */
    this.userText = value;
  }

  compare(randomLetter: string, userLetter: string){
    if(!userLetter){
      return 'pending';
    }
    return userLetter === randomLetter ? 'correct' : 'incorrect';
  }


}
