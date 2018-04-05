/// <reference path='../typings/jasmine/jasmine.d.ts' />
/// <reference path='../references.ts' />

describe('For a TennisGame', function() {
    
  var g: TennisGame;

  beforeEach(function() {
    g = new TennisGameImpl();    
    g.wonPoint(Player.A);
  });

   //it('Examples 1. when it has just started, the score should be "love-all"', function() {
    //expect(g.getScore()).toBe('love-all');
   //});

  it('Examples 2. the first player has won one point and second none, the score is "15-love"', function() {
     expect(g.getScore()).toBe('15-love');
  });
  
});

