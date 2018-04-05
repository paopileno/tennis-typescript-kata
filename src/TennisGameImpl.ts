/// <reference path="../references.ts" />

class TennisGameImpl implements TennisGame {  

  pointsA : number;
  pointsB : number;

  constructor() {
    this.pointsA = 0;
    this.pointsB = 0;
  }

  wonPoint(player: Player) {
   if(player == Player.A) {
    this.pointsA++;
   } else if(player == Player.B) {
    this.pointsB++;
   }    
  }

  getScore(): string {    
    var score = "";
    if(this.pointsA == this.pointsB && this.pointsA < 3) {
      score += this.getScoreByPoints(this.pointsA) + "-all";
    } else if(this.pointsA == this.pointsB && this.pointsA >= 3) {
      score = "douce";
    } else if(this.pointsA >= 3 && this.pointsB >= 3 && Math.abs(this.pointsA - this.pointsB) == 1) {
      score = "Advantage " + this.getHigherPlayer(this.pointsA, this.pointsB);
    } else if((this.pointsA >= 4 || this.pointsB >= 4) && Math.abs(this.pointsA - this.pointsB) >= 2) {
      score = "Game " + this.getHigherPlayer(this.pointsA, this.pointsB);      
    } else {
      score = this.getScoreByPoints(this.pointsA) + "-" + this.getScoreByPoints(this.pointsB);
    }

    return score;

  }

  getScoreByPoints(points: number) : string {
    if(points == 0)
      return "love";
    if(points == 1)
      return "15";
    if(points == 2)
      return "30";
    if(points == 3)
      return "40"
    if(points == 4)
      return "game";    
  }

  getHigherPlayer(pointsA: number, pointsB: number) : string {
    if(pointsA > pointsB)
      return "A";
    else
      return "B";
  }
}
