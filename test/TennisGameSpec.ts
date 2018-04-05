/// <reference path='../typings/jasmine/jasmine.d.ts' />
/// <reference path='../references.ts' />

describe('For a TennisGame', function() {
    
  var g: TennisGame;

  beforeEach(function() {
    g = new TennisGameImpl();    
    
    // Example 1 "love-all"        

    // Example 2 "15-love"
    // g.wonPoint(Player.A);

    // Example 3 "Advantage A"
    // g.wonPoint(Player.A);
    // g.wonPoint(Player.A);
    // g.wonPoint(Player.A);
    // g.wonPoint(Player.A);
    // g.wonPoint(Player.B);
    // g.wonPoint(Player.B);
    // g.wonPoint(Player.B);

    // Example 4 "Game A"
    g.wonPoint(Player.A);
    g.wonPoint(Player.A);
    g.wonPoint(Player.A);
    g.wonPoint(Player.A);
    g.wonPoint(Player.A);
    g.wonPoint(Player.B);
    g.wonPoint(Player.B);
    g.wonPoint(Player.B);


  });

   //it('Examples 1. when it has just started, the score should be "love-all"', function() {
    //expect(g.getScore()).toBe('love-all');
   //});

//   it('Examples 2. the first player has won one point and second none, the score is "15-love"', function() {
//      expect(g.getScore()).toBe('15-love');
//   });

//   it('Example 3. the first player is named "A" and has won four points and the second player has won three points.', function() {
//     expect(g.getScore()).toBe('Advantage A');
//  });

 it('Example 4. the first player is named "A" and has won five points and the second player has won three points, player "A" has won the game.', function() {
  expect(g.getScore()).toBe('Game A');
});
  
});

