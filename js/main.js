(() => {
	//simple JS file - single line comment
    console.log("fired! or loaded... whatever");
    var choices = ["rock", "paper", "scissors"];
    var computer;
    var player = document.querySelector("#weapon");
    var trigger = document.querySelector("#play");
    var status = document.querySelector(".winLose");

    function playGame()
    {
    	//debugger;
    	console.log("called playGame");
    	// make the computer choose a random weapon
    	computer = choices[Math.floor(Math.random() * choices.length)];
        var player_choice = player.value;
        // check for tie first
        if (computer.toLowerCase() === player_choice.toLowerCase())
        {
        	//its a tie
        	status.textContent = "Tie! You live to shoot another day.";
        }
        else if (player_choice.toLowerCase() === "rock")
        {
            if(computer.toLowerCase() === "scissors") {
            	status.textContent = `Win! ${player_choice} beats ${computer}.`;
            } else {
            	status.textContent = `Lose! ${computer} beats ${player_choice}.`;
            } 
        }
        else if (player_choice.toLowerCase() === "paper")
        {
            if(computer.toLowerCase() === "rock") {
            	status.textContent = `Win! ${player_choice} beats ${computer}.`;
            } else {
            	status.textContent = `Lose! ${computer} beats ${player_choice}.`;
            } 
        }
        else if (player_choice.toLowerCase() === "scissors")
        {
            if(computer.toLowerCase() === "paper") {
            	status.textContent = `Win! ${player_choice} beats ${computer}.`;
            } else {
            	status.textContent = `Lose! ${computer} beats ${player_choice}.`;
            } 
        } 

        else {
        	player.value = "";
        	alert("You didnt pick a valid weapon.. try again.");
        } 
   
    }
    

    trigger.addEventListener("click", playGame);
})();