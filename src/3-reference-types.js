const team1 = {
  name: "Warriors",
  wins: 45,
  losses: 20
};

const team2 = { ...team1 };
team2.wins = 50;
team2.losses = 15;
console.log(team1)
console.log(team2)
/* 
Part A: What will team1.wins and team1.losses be after this code runs? Write your prediction as a comment below:

- Prediction: team1.wins will be 50 and team1.losses will be 15. This is because team2 is holding the reference to team 1 and not a copy so 
when you modify team 2 you are actually modifying team1 and when you check team1 the values would have been changed. 

Part B: Fix the code so that team2 is a TRUE COPY of team1. After making your fix, changing team2 should NOT affect team1.
Part C: Verify your fix by logging both team1.wins (should still be 45) and team2.wins (should be 50)
*/


