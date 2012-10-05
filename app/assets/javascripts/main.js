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

Main.startAnimation = function(){
    animationView.onFrame = function(event) {
        Main.animationProject.activate();
        AnimationManager.update(event);
        if (typeof(Animation.onFrame) == 'function') {
            Animation.onFrame(event);
        }
    }
    if (animationReady == false) {
        animationReady = true;
        return;
    } else {
       Main.animationProject.activate();
       Animation.init(Main.animation);
    }
    Main.startInteraction();
    try{
        if(__START_INTERACTION_IMMEDIATELY === true)
            Main.animationFinished();
    }
    catch(e){
    }    
}
Main.animationFinished = function(delay){
	if (delay == undefined) {
		delay = 100;
	}
	if(Main.animationFinished.called == true)
        return;
    if(isNaN(delay) || delay == 0){
        Main.animationFinished.called = true;
        Main.disposeInteractionSkipSlider();
    }
    else {
        setTimeout(function(){
            if(Main.animationFinished.called == true)
                return;
            Main.animationFinished.called = true;
            Main.disposeInteractionSkipSlider();
		}, delay);
	}
}
Main.disposeInteractionSkipSlider = function(){
    $('#interaction_cover').animate({opacity:0},500,function(){$(this).remove()});
}
Main.startInteraction = function(){
    if (interactionReady == false) {
        interactionReady = true;
    } else {
        Main.interactionProject.activate();
        initializeRunLoop();
        Interaction.init(Main.interaction);
    }
}

Main.animateDefinition = function(){
    $(".tanim .definition").css({opacity:0});
    $(".tanim .additional_info").css({opacity:0});
    $(".tanim .definition").delay(500).animate({opacity:1},1000);
    $(".tanim .additional_info").delay(1600).animate({opacity:1},1000);
}

Main.init = function(){
	Main.initializeNavigation();
	Main.createInteractionSkipSlider();
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
		
        if(Animation.images == null || Animation.images == undefined) {
             Main.startAnimation();
        }
        else {
            Util.loadImages(
                Animation.images, 
                function(){
                    Main.startAnimation();
                }
            );
        }
        if(Interaction.images == null || Interaction.images == undefined) {
            Main.startInteraction();
        }
        else {
            Util.loadImages(
                Interaction.images,
                function(){
                    Main.startInteraction();
                }
            );
        }
		initializeRunLoop = function () {
            //console.log("I'm here");
			if (animationReady === true && interactionReady === true) {
				interactionView.onFrame = function(event) {
					Main.interactionProject.activate();
					AnimationManager.update(event);
					if (typeof(Interaction.onFrame) == 'function') {
						Interaction.onFrame(event);
					}
				}
			}
		}
		InteractionBase();	
		Main.animateDefinition();
        try{
            if(__START_INTERACTION_IMMEDIATELY === true)
                Main.startAnimation();
            else
                throw '';
        }
        catch(e){
            setTimeout(Main.startAnimation,/*Main.calculateDefinitionWaitTime()*/1000);
        }
    }
};
Main.calculateDefinitionWaitTime = function(){
    function removeHTMLTags(htmlString){
        if(htmlString){
            var mydiv = document.createElement("div");
            mydiv.innerHTML = htmlString;
            if (document.all)// IE Stuff
                return mydiv.innerText;
            else // Mozilla does not work with innerText
                return mydiv.textContent;
        }
        return null;
    }
    function countWords(s){
        s = s.replace(/(^\s*)|(\s*$)/gi,"");
        s = s.replace(/[ ]{2,}/gi," ");
        s = s.replace(/\n /,"\n");
        return s.split(' ').length;
    }
    var html = $('.definition').html();
    html = removeHTMLTags(html);
    return countWords(html)*400+500;
}
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
	});
	createWordList(currentLetter);
}

Main.setObjective = function(str){
	Main.objective.innerHTML = str;
};

Main.createInteractionSkipSlider = function(){
    var div = document.createElement('div');
    $('#inter_container').append(div);
    $(div).css({
        position:'absolute',
        paddingLeft:'-1px',
        top:'395px',
        left:'30px',
        width:'790px',
        height:'302px',
        borderRadius:'6px',
        border:'1px solid #000',
        overflow:'hidden',
        backgroundImage:'url(/assets/skip_screen.png)',
        backgroundRepeat:'no-repeat',
        '-moz-user-select': '-moz-none',
        '-khtml-user-select': 'none',
        '-webkit-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none'
    });
    div.id = 'interaction_cover';

    var isDragging = false;
    var isDraggable = true;
    var startPosition = 0;
    var down = function(event){
        event.preventDefault();
        console.log(event)
        if(isDraggable != true)
            return;
        isDragging = true;
        startPosition = event.pageX;
        return false;
    }
    var drag = function(event){
        event.preventDefault();
        if(isDragging==true){
            var change = event.pageX - startPosition;
            change = change < 0 ? '0':change;
            $(div).css({
                backgroundPosition:change+'px 0px'
            });
        }
        return false;
    }
    var up = function(event){
        event.preventDefault();
        if(isDragging == false)
            return;
        isDragging = false;
        var change = event.pageX - startPosition;
        change = change < 0 ? '0':change;
        console.log('[up] change: '+change,event)
        if(change > 100){
            isDraggable = false;
            var animHelper = new AnimationHelper({
                change:change
            });
            animHelper.animate({
                style:{change:800},
                duration:250,
                animationType:'easeIn',
                update:function(){
                    $(div).css({backgroundPosition:this.change+'px 0px'});
                },
                callback:function(){
                    $(div).animate({opacity:0},500,function(){$(this).remove()});
                }
            })
        }
        else{
            isDraggable = false;
            var animHelper = new AnimationHelper({
                change:change
            });
            animHelper.animate({
                style:{change:0},
                duration:100,
                animationType:'easeIn',
                update:function(){
                    $(div).css({backgroundPosition:this.change+'px 0px'});
                },
                callback:function(){
                    isDraggable = true;
                }
            })
        }
        return false;
    }
    $(div).mousedown(down);
    $(div).mousemove(drag);
    $(div).mouseup(up);
    $(div).mouseout(up);
    $(div).bind('touchmove',function(event){
        try{
            event.pageX = event.originalEvent.touches[0].pageX;
        }
        catch(e){}
        drag(event);
    });
    $(div).bind('touchstart',function(event){
        try{
            event.pageX = event.originalEvent.touches[0].pageX;
        }
        catch(e){}
        down(event);
    });
    $(div).bind('touchend',function(event){
        try{
            event.pageX = event.originalEvent.changedTouches[0].pageX;
        }
        catch(e){}
        up(event);
    });

}
Main();
