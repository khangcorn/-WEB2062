const game = {
    team1: 'Bayern Munich',
    team1: 'United',
players: [
    [
        'Messi',
        'Parvard',
        'Martinax',
        'Alabama',
        'Coman',
        'Muller',
        'Lewandowski',
        'Davide',
        'Suze',
        'Sasuke',
        'GuMAZUSI',


    ],
    [
        'Rolando',
        'Neyma',
        'Empapa',
        'Haland',
        'Rolandinho',
        'Haxx',
        'Lewandowski',
        'Sancho',
        'Hakimi',
        'Itachi',
        'PePe',


    ],
  

],
score: '1:2',
scored: ['Messi','Rolando','Gumazusi'],
date: "Jan , 2024",
odds : {
    team1: 2.33,
    x: 3.24,
    team2: 7.5,
},



}
//1
const [players1 , players2] = game.players;
console.log(players1,players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk,fieldPlayers);
const [gk2, ...numberOfPlayer] = players2;
console.log(gk2,fieldPlayers);


//3 
const allPlayer  = [...players1,...players2]
console.log(allPlayer);


//4
const players1Final = [...players1, 'James', 'Curry','Thiago'];

//5 
const {odds: {team1, x: draw , team2}} = game;
console.log(team1,draw,team2);

//6 
const printGoal = function name(...players) {
    console.log(`${players.length} goals was scored `);

};
    printGoal('Empapa',
    'Haland',
    'Rolandinho',
    'Haxx',);
    
    printGoal('Empapa',
    'Haland',
    )
    printGoal(...game.scored);

// 7 
team1 < team2 && console.log('Team 1 is  more likely to win ');
team1 >  team2 && console.log('Team 1 is  more likely to win ');
