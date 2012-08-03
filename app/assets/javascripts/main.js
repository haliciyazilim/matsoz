// This is a manifest file that'll be compiled into main.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require_self
//= require_tree ./library
//= require_tree ./plugins


var Main = function(){
	
	if(navigator.appName == "Microsoft Internet Explorer"){
		console ={
			log: function(){}
		}
	}
	$(document).ready(Main.init);
}

Main.config = {
	defaultLibrary: "raphael"
};

Main.init = function(){
	Main.initializeNavigation();
	
	Main.interaction = $('.etkilesimalan').get(0);
	Main.animation = $('.ornek').get(0);
	Main.objective = $('.mavikontrol').get(0);
	//Main.InteractionContainer.appendChild(Main.ObjectiveContainer);
	
	var framework;
	if (typeof(Interaction.getFramework) == "function") {
		framework = Interaction.getFramework();
	} else {
		framework = Main.config.defaultLibrary;
	}
	
	if (framework == 'raphael') {
		Main.raphaelInit();
		Interaction.init(Main.interaction);
	} else if (framework == 'paper') {
		Main.scale = 1;
		paper.install(window);
		Main.paperInit();
		
		var interactionWidth = $(Main.interaction).width();
		var interactionHeight = $(Main.interaction).height();

		Main.interaction.innerHTML += "<canvas id='interaction_canvas' class='interaction_canvas' keepalive='true' width='"+interactionWidth*Main.scale+"px' height='"+interactionHeight*Main.scale+"px'></canvas>"
		canvas = $('.interaction_canvas').get(0);
		paper.setup(canvas);
		Main.interactionProject = paper.project;
		interactionView = paper.view;
		paper.defaultProject = Main.interactionProject;
		
		var animationWidth = $(Main.animation).width();
		var animationHeight = $(Main.animation).height();

		Main.animation.innerHTML += "<canvas id='animation_canvas' class='animation_canvas' keepalive='true' width='"+animationWidth*Main.scale+"px' height='"+animationHeight*Main.scale+"px'></canvas>"
		canvas = $('.animation_canvas').get(0);
		paper.setup(canvas);
		Main.animationProject = paper.project;
		animationView = paper.view;
		
		AnimationManager();
		
		animationReady = false;
		interactionReady = false;
		
		initializeRunLoop = function () {
			if (animationReady === true && interactionReady === true) {
				interactionView.onFrame = function(event) {
					Main.interactionProject.activate();
					AnimationManager.update(event);
					if (typeof(Interaction.onFrame) == 'function') {
						Interaction.onFrame(event);
					}
				}
				animationView.onFrame = function(event) {
					Main.animationProject.activate();
					AnimationManager.update(event);
					if (typeof(Animation.onFrame) == 'function') {
						Animation.onFrame(event);
					}
				}
			}
		}
		InteractionBase();	
		if(Animation.images == null || Animation.images == undefined) {
			Main.animationProject.activate();
			if (Animation.init) {
				Animation.init(Main.animation);
			}
			animationReady = true;
			initializeRunLoop();
		}
		else {
			Util.loadImages(
				Animation.images, 
				function(){
					Main.animationProject.activate();
					if (Animation.init) {
						Animation.init(Main.animation);
					}
					animationReady = true;
					initializeRunLoop();
				}
			);
		}
		
		
		if(Interaction.images == null || Interaction.images == undefined) {
			Main.interactionProject.activate();
			Interaction.init(Main.interaction);
			interactionReady = true;
			initializeRunLoop();
		}
		else {
			Util.loadImages(
				Interaction.images,
				function(){
					Main.interactionProject.activate();
					Interaction.init(Main.interaction);
					interactionReady = true;
					initializeRunLoop();
				}
			);
		}
	}
};

Main.initializeNavigation = function() {
	var createWordList = function(letter) {
		var entries = wordList[letter];
		var htmlString = "";
		
		for (i = 0; i < entries.length; i++) {
			htmlString += "<a href=" + entries[i].link + " class='sozcuklink " + (entries[i].selected?"sozcukselected":"") + "'>" + entries[i].word + "</a>";
		}
		
		$('#liste').html(htmlString);
	}
	
	$('.navlink').click(function() {
		createWordList($(this).data('letter'));
	})
	
	createWordList(currentLetter);
}

Main.setObjective = function(str){
	Main.objective.innerHTML = str;
};

Main();


console.log = function(){};

