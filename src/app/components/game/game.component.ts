import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }
  board !:Array<string>
  player_turn="X";
  winning_board= [
    [0,1,2],
    [3,4,5],
    [5,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
  ]

  ngOnInit(): void {
    this.board= new Array(9).fill("")
  }
  handlePlayer(index:number){
    this.board[index] = this.player_turn
    this.player_turn = (this.player_turn==="X") ? "O" : "X";

   for(let i=0; i<this.winning_board.length; i++) {
      let winning_check = this.winning_board[i];
      let p1 = winning_check[0];
      let p2 = winning_check[1];
      let p3 = winning_check[2];
      if(this.board[p1]!= "" && this.board[p1]==this.board[p2] &&
       this.board[p2]==this.board[p3] &&
       this.board[p1] == this.board[p3]
      ){
        alert("Player " + this.board[p1] + " Won The Game ")

  }
}
}
}
