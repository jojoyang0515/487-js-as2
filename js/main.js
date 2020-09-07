var htmlBuilder = '';
var tempHighWins = 0;
var tempLeader = 0;

var teams = ["Braves", "Nationals", "Phillies", "Mets", "Marlins", "Cardinals", "Cubs", "Brewers", "Reds", "Pirates", "Dogers", "Diamondbacks", "Giants", "Padres", "Rockies", ];
var wins = [89, 79, 74, 72, 51, 81, 76, 74, 67, 62, 93, 75, 69, 66, 60];
var losses = [55, 63, 68, 70, 91, 62, 66, 68, 77, 81, 52, 68, 74, 76, 84];

console.log(teams);
console.log(wins);
console.log(wins);

for (var i = 0; i < teams.length; i++) {
	if (wins[i] >= tempHighWins) {
		tempHighWins = wins[i];
		tempLeader = i;
	}
}

console.log('The team with the most wins of ' + tempHighWins + ' is ' + teams[tempLeader]);

//HTML table solution credit to https://www.youtube.com/watch?v=Ec5Lq_7soM0
htmlBuilder +=
	'<h2>Teams:</h2>' +
	'<table border=1>' +
	'<tr>' +
	'<th>Team</th>' +
	'<th>Wins</th>' +
	'<th>Losses</th>' +
	'</tr>';

for (var i = 0; i < teams.length; i++) {
	if (tempHighWins === wins[i]) {
		htmlBuilder +=
			'<tr>' +
			'<td><strong>' + teams[i] + '</strong></td>' +
			'<td><strong>' + wins[i] + '</strong></td>' +
			'<td><strong>' + losses[i] + '</strong></td>' +
			'<tr>';
	} else {
		htmlBuilder +=
			'<tr>' +
			'<td>' + teams[i] + '</td>' +
			'<td>' + wins[i] + '</td>' +
			'<td>' + losses[i] + '</td><tr>';
	}
}

htmlBuilder += '</table>';

document.getElementById('teams').innerHTML = htmlBuilder;
