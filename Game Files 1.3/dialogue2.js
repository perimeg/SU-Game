
// - - - - - Dialogue Accessories - - - - -

var dialogue_start = 0; var dialogue_running = false;

function placeDialogueBox()
	{
	ctx5.clearRect(0,0, 1000, 800);
	
	if (dialogue_running == false)
		{
		var dialogue_interval = setInterval(dialogue_interval2,20); dialogue_anim = 800;
		dialogue_running = true;
		}
	else
		{
		var dialogue_box = new Image();

		dialogue_box.src ="Graphics/Misc/dialoguebox.png";

		dialogue_box.onload = function()
			{
			ctx5.drawImage(dialogue_box, 500-798/2, 535);
			}
		}
	
	function dialogue_interval2()
		{
		if (dialogue_anim > 550)
			{
			dialogue_anim = dialogue_anim - 50; ctx5.clearRect(0,0, 1000, 800);
			var dialogue_box = new Image();

			dialogue_box.src ="Graphics/Misc/dialoguebox.png";

			dialogue_box.onload = function()
				{
				ctx5.drawImage(dialogue_box, 500-798/2, dialogue_anim);
				}
			}
		else
			{
			clearInterval(dialogue_interval); ctx5.clearRect(0,0, 1000, 800);
			dialogue_anim = 535;
			var dialogue_box = new Image();

			dialogue_box.src ="Graphics/Misc/dialoguebox.png";

			dialogue_box.onload = function()
				{
				ctx5.drawImage(dialogue_box, 500-798/2, dialogue_anim);
				}
			}
		}
	}

function removeAllDialogue()
	{
	ctx8.clearRect(0,0, 1000, 800); //Character Name
	ctx7.clearRect(0,0, 1000, 800);	//Dialogue Text
	ctx5.clearRect(0,0, 1000, 800);	//Dialogue Box
	ctx9.clearRect(0,0, 1000, 800); //Animations
	animation_var = false;
	dialogue_running = false;
	}

var nextvis = ""; var center_var = false;

function removeNextButton()
	{
	ctx6.clearRect(0,0, 1000, 800);
	nextvis = false;
	window.removeEventListener( "keydown", doKeyDown, true);
	}

function placeNextButton()
	{
	nextvis = true;
	window.addEventListener( "keydown", doKeyDown, true);

	var star_button = new Image();
	star_button.src ="Graphics/Misc/star_button.png";
	star_y = 743;
	
	star_button.onload = function()
		{
		ctx6.drawImage(star_button, 500-40/2, star_y);
		var star_interval = setInterval(draw, 400);
		function draw()
			{
			if (nextvis == true)
				{
				if (star_y == 743)
					{
					ctx6.clearRect(0, 0, 1000, 800);
					ctx6.drawImage(star_button, 500-40/2, star_y);
					star_y = 748;
					}
				else
					{
					ctx6.clearRect(0, 0, 1000, 800);
					ctx6.drawImage(star_button, 500-40/2, star_y);
					star_y = 743;
					}				
				}
			else if (nextvis == false)
				{
				clearInterval(star_interval);
				ctx6.clearRect(0,0, 1000, 800);
				}
			}
		}
	}

function doKeyDown(e)
	{
	if ( e.keyCode == 32 )
		{
		scanDialogue(current_scene,scene_num);
		scene_num++;
		}
	else if (e.keyCode == 83) //save
		{
		//localStorage.getItem('save');
		//localStorage.setItem('save', 'value');
		}	
	}

var continue_var = false; continue_var2 = 1;

function continue1(my_time)
	{
	continue_var = true;
	continue_var2 = 1;
	var continue_interval = setInterval(continuefunction2,my_time);
	function continuefunction2()
		{
		if (continue_var == true && continue_var2 == 1)
			{
			continue_var = false;
			continue_var2++;
			}
		else if (continue_var2 == 2)
			{
			scanDialogue(current_scene,scene_num);
			scene_num++; continue_var2++;
			}
		else
			{
			clearInterval(continue_interval);
			}
		}
	}

var scene_num = ""; var current_scene = ""; var scene_name = ""; var scene_length = "";

function start_scene(new_scene)
	{
	current_scene = new_scene;
	scene_length = new_scene.length - 1;
	scene_name = new_scene[0];
	scene_num = 1;

	scanDialogue(current_scene,scene_num);
	scene_num++;
	}




