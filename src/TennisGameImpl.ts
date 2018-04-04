/// <reference path="../references.ts" />

class TennisGameImpl implements TennisGame {

  wonPoint(player: Player) {
    
  }

  getScore(): string {
    var pointsA = 3;
    var pointsB = 5;
    var score = "";

    if(pointsA == pointsB && pointsA < 3) {
      score += this.getScoreByPoints(pointsA) + "-all";
    } else if(pointsA == pointsB && pointsA >= 3) {
      score = "douce";
    } else if(pointsA > 3 && pointsB > 3 && Math.abs(pointsA - pointsB) == 1) {
      score = "Advantage " + this.getHigherPlayer(pointsA, pointsB);
    } else if(pointsA >= 4 || pointsB >= 4 && Math.abs(pointsA - pointsB) > 2) {
      score = "Game " + this.getHigherPlayer(pointsA, pointsB);      
    } else {
      score = this.getScoreByPoints(pointsA) + "-" + this.getScoreByPoints(pointsB);
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
      return " A";
    else
      return " B";
  }
}
