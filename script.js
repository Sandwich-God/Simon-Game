//
//Simon Game
//Reuben Clemens
//Due: 2/25/21
//

//Array used for RandVal() to change number to color.
colors = ['yellow', 'blue', 'red', 'green'];

//Arrays used for game and Player pattern.
Game = []; //Game Pattern
Player = []; //Player Pattern

//Used to represent what level the game is at by changing the HTMl for 'button' id.
levels = 0; 

//Int variables for if statements.
x = 0;
y = 0;
z = 0;

//Variables to temporarily hold values.
Color = '';
rand='';

//Variables with true or false statements to lock states.
ImgTorF = true;
TorF = false;

/*
The RandVal() main purpose is to create a random integer from MIN to Max This value
will be used to start/continue the game pattern. 
*/
function RandVal()
{
	TorF = false; //Stops returninput() from activating.
	Player = []; //Clears the Player pattern array.
	rand = Math.floor(Math.random() * 4); //Chooses a random number from the ranges of 0 to 3.
	Game.push(colors[rand]); //Pushes colors[rand] into Color array. what the colors[rand] does is it takes the colors array, then uses rand to pick a position.
	GamePatternTimer() //Calls to GamePatternTimer() function to change images.
	levels++; //Increments levels.
	document.getElementById('level').innerHTML = levels; //Displays levels value to the 'button' id.
	document.getElementById("button").disabled = true; //Disables the 'button' using RandVal().
}


//State 1: Running Game Pattern
/*
The GamePatternTimer() main purpose is to call to GamePatternImg()
And give enough time after clicking to make it look better.
*/
function GamePatternTimer()
{
	setTimeout(GamePatternImg, 300); //Calls to GamePatternImg() after 300 miliseconds.
}

/*
The GamePatternImg() main purpose is to make the image selected look like it was clicked,
Will also call to GamePatternEndImg().
*/
function GamePatternImg()
{
	GameSound() //Calls to GameSound() so that the game pattern when display, will have sound.
	document.getElementById(Game[z]).src= 'images/clicked' + Game[z] + '.jpg'; //Changes the image to an clicked state.
	setTimeout(GamePatternEndImg, 300); //Calls to GamePatternEndImg() after 300 miliseconds.
}
/*
The GamePatternEndImg() main purpose is to make the image selected to be in a unclicked state,
Will also call back to GamePatternImg().
*/
function GamePatternEndImg()
{
	document.getElementById(Game[z]).src= 'images/' + Game[z] + '.jpg'; //Changes the image to an unclicked state.
	z++; //Increments z.
	//Activates if Game Array length is equal to z value.
	//Allows you to click again and resets some values.
	if (Game.length == z)
	{
		TorF = true; //Enables returninput() from activating.
		x = 0; //Changes x to 0.
		z = 0; //Changes z to 0.
	}
	//The else statement will activate if game length is not the same as z. 
	else
	{
		setTimeout(GamePatternImg, 300); //Calls back to GamePatterImg().
	}
}
/*
The GameSound() main purpose is to make a sound for the specific image color.
*/
function GameSound()
{
	//Will activate if Game[z] equals yellow color and will play a sound for it.
	if (Game[z] == 'yellow')
	{
		let clicked1 = new Audio("sound/clicked1.mp3"); //Defines clicked1 to a sound effect.
		clicked1.play(); //Plays a sound.
	}
	//Will activate if Game[z] equals blue color and will play a sound for it.
	if (Game[z] == 'blue')
	{
		let clicked2 = new Audio("sound/clicked2.mp3"); //Defines clicked2 to a sound effect.
		clicked2.play(); //Plays a sound.
	}
	//Will activate if Game[z] equals red color and will play a sound for it.
	if (Game[z] == 'red') 
	{
		let clicked3 = new Audio("sound/clicked3.mp3"); //Defines clicked3 to a sound effect.
		clicked3.play(); //Plays a sound.
	}
	//Will activate if Game[z] equals green color and will play a sound for it.
	if (Game[z] == 'green')
	{
		let clicked4 = new Audio("sound/clicked4.mp3"); //Defines clicked4 to a sound effect.
		clicked4.play(); //Plays a sound.
	}
}

//State 2: Registering Player Input
/*
The returninput(n) main purpose is to return the value from the onclickevent in html.
*/
function returninput(c)
{
	//Will activate if TorF is true.
	//Stops the content inside if in a situation were clicking is not good or necessary.
	if (TorF)
	{
		Color = c; //Color is defined by c.
		Player.push(Color); //Pushes Color into Player array.
		check() //Calls to check() function.
		//Will activate if ImgTorF is true.
		//Stops the changeimg() if you fail.
		if (ImgTorF)
		{
			changeimg() //Calls to changeimg().
		}
	}
}

//State 3: check
/*
The check() main purpose is to check if the clicked value is correct.
*/
function check()
{
	//Will activate if Game[x] is the same value as Color
	//Used to check if click was equal to game pattern.
	if (Game[x] == Color)
	{
		console.log('correct'); //Writes to the console 'correct'.
		x++; //increments x.
	}
	//Activates else if the click value was incorrect from game pattern.
	else
	{
		var Incorrect = new Audio("sound/Fail.mp3"); //Creates a audio clip from sound folder named Fail.mp3 that defines Incorrect.
		Incorrect.play(); //Plays the sound.
		console.log('wrong'); //Writes to the console that you were 'wrong'.
		ImgTorF = false; //Stops Images from changeimg().
		TorF = false; //Stops clicking from returninput().
		failshowed() //Calls to failshowed().
	}
}
/*
The failshowed() main purpose is to change all the images to red to signify you lost.
*/
function failshowed()
{
	//A while statement that will continue to activate until y equals to 4.
	//Changes all the images to red.
	while (y != 4)
	{
		document.getElementById().src= 'images/clickedred.jpg'; //Changes the images to clickedred.
		y++; //increments y.
	}
	y = 0; //y equals 0.
}

//State 4: End/Reset
/*
The Reset() main purpose is to reset all the values to allow to play again without resetting the website.
*/
function Reset()
{
	Game = []; //Empties Game array.
	Player = []; //Empties Player array.
	Color = ''; //Changes Color to null value.
	x = 0; //Makes x equal 0.
	z = 0; //Makes z equals 0.
	TorF = false; //Changes TorF to false to stop clicking.
	ImgTorF = true; //Changes ImgTorF to true to allow images to change.
	levels = 0; //Resets levels to 0.
	document.getElementById('level').innerHTML = levels; //Shows the updated value of levels in 'level' id.
	document.getElementById('button').disabled = false; //Makes the 'button' false, allowing you to press it again.
	resetshowed() //Calls to resetshowed().
}
/*
The resetshowed() main purpose is to change the images back to regular unclicked state.
*/
function resetshowed()
{
	//A while statement that will continue to activate until y equals to 4.
	//Resets all the image to unclicked with proper colors to show its ready to play again.
	while (y != 4)
	{
		document.getElementById(colors[y]).src= 'images/' + colors[y] + '.jpg'; //Changes all the images back to unclicked state.
		y++; //Increments y.
	}
	y = 0; //y equals 0.
}


//Utility

//Timing
/*
The time() main purpose is to show the user that you clicked a image without it being too fast.
*/
function time()
{
	myvar = setTimeout(changeimgback, 300); //Calls to changeimgback() in 300 miliseconds.
}


//Changing Image
/*
the changeimg() main purpose is to change image to a clicked state.
*/
function changeimg()
{
	sound() //Calls to sound() function.
	TorF = false; //TorF becomes false stopping you from clicking during this time.
	document.getElementById(Color).src= 'images/clicked' + Color + '.jpg'; //Changes the image to a clicked state.
	time() //Calls to time().
}

/*
the changeimgback() main purpose is to reset the image to a unclicked state.
*/
function changeimgback()
{
	document.getElementById(Color).src= 'images/' + Color + '.jpg'; //Changes the image to unclicked state.
	Color = ''; //resets Color variable to null.
	TorF = true; //Allows you to start clicking again.
	PatternsMatch() //Calls to PatternsMatch().
}

/*
the PatternsMatch() main purpose is to check if the game and player pattern equal each other.
*/
function PatternsMatch()
{
	//Will activate if game and player length are the same.
	//Resets to show the game pattern again.
	if (Game.length == Player.length)
	{
		console.log('patterns match'); //Writes to the console that the 'patterns match'.
		z = 0; //Resets z to 0.
		RandVal() //Calls to RandVal().
	}
}

//sound
/*
The sound() main purpose is to make a sound for the specific image color.
*/
function sound()
{
	//Will activate if Color equals yellow color and will play a sound for it.
	if (Color == 'yellow')
	{
		let clicked1 = new Audio("sound/clicked1.mp3"); //Defines clicked1 to a sound effect.
		clicked1.play(); //Plays a sound.
	}
	//Will activate if Color equals yellow color and will play a sound for it.
	if (Color == 'blue')
	{
		let clicked2 = new Audio("sound/clicked2.mp3"); //Defines clicked2 to a sound effect.
		clicked2.play(); //Plays a sound.
	}
	//Will activate if Color equals yellow color and will play a sound for it.
	if (Color == 'red')
	{
		let clicked3 = new Audio("sound/clicked3.mp3"); //Defines clicked3 to a sound effect.
		clicked3.play(); //Plays a sound.
	}
	//Will activate if Color equals yellow color and will play a sound for it.
	if (Color == 'green')
	{
		let clicked4 = new Audio("sound/clicked4.mp3"); //Defines clicked4 to a sound effect.
		clicked4.play(); //Plays a sound.
	}
}