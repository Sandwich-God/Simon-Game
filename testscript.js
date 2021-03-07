colors = ['yellow', 'blue', 'red', 'green'];
randvalue = [];
Game = [];
levels = 0; 
z = 0;

function RandVal()
{
	Player = []; //Clears the Player pattern array.
	rand = Math.floor(Math.random() * 4); //Chooses a random number from the ranges of 0 to 3.
	Game.push(colors[rand]); //Pushes colors[rand] into Color array. what the colors[rand] does is it takes the colors array, then uses rand to pick a position.
	randvalue.push(rand);
	console.log(randvalue);
	GamePatternTimer() //Calls to GamePatternTimer() function to change images.
	levels++; //Increments levels.
	document.getElementById('level').innerHTML = levels; //Displays levels value to the 'button' id.
	document.getElementById("button").disabled = true; //Disables the 'button' using RandVal().
}

function GamePatternTimer()
{
	setTimeout(GamePatternImg, 100); //Calls to GamePatternImg() after 300 miliseconds.
}

/*
The GamePatternImg() main purpose is to make the image selected look like it was clicked,
Will also call to GamePatternEndImg().
*/
function GamePatternImg()
{
	GameSound() //Calls to GameSound() so that the game pattern when display, will have sound.
	document.getElementById(Game[z]).src= 'images/clicked' + Game[z] + '.jpg'; //Changes the image to an clicked state.
	setTimeout(GamePatternEndImg, 100); //Calls to GamePatternEndImg() after 300 miliseconds.
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
		z = 0; //Changes z to 0.
		RandVal()
	}
	//The else statement will activate if game length is not the same as z. 
	else
	{
		setTimeout(GamePatternImg, 100); //Calls back to GamePatterImg().
	}
}
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