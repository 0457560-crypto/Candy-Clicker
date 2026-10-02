//constants, values that will not change
const candyBtn = document.getElementById("candy-btn")


//variables. we're also going to 
let totalCandy = 0;


let candyPerClick = 1

let clickUpgradeCost = 25;



//when candy button is clicked, increase candy by candy/click number
/**first we add an event listener, which waits for a specifc thing to happen to an element
 and runs a function**/
candyBtn.addEventListener("click", addCandy)

//we add event listeners after variables but before main code. add another to run a function when 
// the upgrade button is clicked*/
clickUpgradeBtn.addEventListener("click", buyClickUpgrade)

//function that adds candy to our total based on candy/click number, so long as we have less than 5000 candies
function addCandy(){
   
}

//check to see if we can buy an upgrade, so we can grey out or brighten purchase button. adds or removes special css classes
function canUserIncreaseClick(){
}


//buy a click upgrade if we have enough coins. also used Math.trunc to remove pesky decimals
function buyClickUpgrade(){
}