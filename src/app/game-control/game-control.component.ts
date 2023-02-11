import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  
  @Output() seconds = new EventEmitter<number>();;
  counter = 0
  interval: any;
  gameOn = false;

  onStart(){
    
    
    this.interval = setInterval(()=>{
      this.seconds.emit(this.counter)
      this.counter++
    }, 1000)
    this.gameOn = true;
  }

  onStop(){
    clearInterval(this.interval)
    this.seconds.emit(null)
    this.gameOn = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
