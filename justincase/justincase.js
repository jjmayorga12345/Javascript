<script>
var highScoreList = [
    {name: 'Joel', score: 1000},
    {name: 'Leynadth', score: 980}
];

var menus = document.querySelector('#menus');

var message = '';

for (var i = 0; i < highScoreList.length; i++) {
    var highscorePlayer = highScoreList[i];


    message += `
        <div id="high-scores">
            Player: ${highscorePlayer.name}, Score: ${highscorePlayer.score}
        </div>`;
}

menus.innerHTML = message;
</script>

<script>
var highScoreList = [
    {name: 'Joel', score: 1000},
    {name: 'Leynadth', score: 980}
];

var menus = document.querySelector('#menus');


var message = '';


for (var i = 0; i < highScoreList.length; i++) {
    var highscorePlayer = highScoreList[i];

    var playerHs = document.createElement('div');
    playerHs.setAttribute('id', 'high-scores');
    playerHs.textContent = `
        Player: ${highscorePlayer.name}, Score: ${highscorePlayer.score}`;

    menus.appendChild(playerHs);
}
</script>