var coins = 0;
var pets = 0;
var damage = 10;
var timeInterval = 1000;
var tiun = 2;
var health = 200;
var monsterLevel = 1;
var monstersKilled = 0;

var canvas = document.getElementById("healthBar");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 200, 10);


function Clicked(){
    health -= damage * 2;
    document.getElementById("healthBar").style.color="#00000";
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 200, 10);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, health, 10);
    if (health <= 0) {
        health = 200;
        coins = coins + (monsterLevel * 10);
        document.getElementById("coins").innerHTML = coins;
        monstersKilled += 1;
        document.getElementById("monstersKilled").innerHTML = monstersKilled;
    };
};

function buyPet(){
    var petCost = Math.floor(10 * Math.pow(1.1,pets));     
    if(coins >= petCost){                                   
        pets = pets + 1;                                   
    	coins = coins - petCost;                          
        document.getElementById('pets').innerHTML = pets;  
        document.getElementById('coins').innerHTML = coins;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,pets));       
    document.getElementById('petCost').innerHTML = nextCost;  
};

function upgradeDamage(){
    var upgradeDamageCost = Math.floor(10 * Math.pow(1.1,damage - 10));
    if (coins >= upgradeDamageCost){
        damage += 1;
        coins = coins - upgradeDamageCost;
        document.getElementById('damage').innerHTML = damage;  
        document.getElementById('coins').innerHTML = coins;  

    };
    var nextCost = Math.floor(10 * Math.pow(1.1,damage - 10));       
    document.getElementById('upgradeDamageCost').innerHTML = nextCost;
};

function upgradeTimeInterval(){
    var upgradeIntervalCost = Math.floor(10 * Math.pow(1.1,tiun));
    if (coins >= upgradeIntervalCost){
        timeInterval = timeInterval - 10;
        tiun = tiun + 1
        coins = coins - upgradeIntervalCost;
        document.getElementById('timeInterval').innerHTML = timeInterval;  
        document.getElementById('coins').innerHTML = coins;  

    };
    var nextCost = Math.floor(10 * Math.pow(1.1,tiun));       
    document.getElementById('intervalUpgradeCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
    health -= pets * 2;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 200, 10);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, health, 10);
	if (health <= 0) {
        health = 200;
        coins = coins + (monsterLevel * 10);
        document.getElementById("coins").innerHTML = coins;
        monstersKilled += 1;
        document.getElementById("monstersKilled").innerHTML = monstersKilled;
    };
    if (monstersKilled >= 10) {
    monsterLevel += 1;
    monstersKilled = 0;
    document.getElementById("level").innerHTML = monsterLevel;
    };
}, timeInterval);

