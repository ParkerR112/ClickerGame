var coins = 0;
var monsters = 0;
var clickWorth = 1;

function Clicked(){
    coins = coins + clickWorth;
    document.getElementById("coins").innerHTML = coins;
};

function buyMonster(){
    var monsterCost = Math.floor(10 * Math.pow(1.1,monsters));     
    if(coins >= monsterCost){                                   
        monsters = monsters + 1;                                   
    	coins = coins - monsterCost;                          
        document.getElementById('monsters').innerHTML = monsters;  
        document.getElementById('coins').innerHTML = coins;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,monsters));       
    document.getElementById('monsterCost').innerHTML = nextCost;  
};

function upgradeClickWorth(){
    var upgradeClickCost = Math.floor(10 * Math.pow(1.1,clickWorth));
    if (coins >= upgradeClickCost){
        clickWorth = clickWorth + 1;
        coins = coins - upgradeClickCost;
        document.getElementById('clickWorth').innerHTML = clickWorth;  
        document.getElementById('coins').innerHTML = coins;  

    };
    var nextCost = Math.floor(10 * Math.pow(1.1,clickWorth));       
    document.getElementById('upgradeClickCost').innerHTML = nextCost;
};

window.setInterval(function(){
	
    coins = coins + monsters;
    document.getElementById("coins").innerHTML = coins;
	
}, 1000);
