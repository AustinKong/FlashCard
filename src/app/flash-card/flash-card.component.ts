import { Component } from '@angular/core';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css']
})

export class FlashCardComponent{

  enteredAnswer = "";

  card = {kanji:"suc",hiragana:"じょせふ.さく",correctAnswer:"joseph suc"}

  onSkip(){
    console.log("skip");
  }

  onSubmit(){
    console.log(this.enteredAnswer);
  }

  onHint(){
    console.log("hint");
  }
}
