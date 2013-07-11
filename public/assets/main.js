/*!
 * Paper.js v0.22
 *
 * This file is part of Paper.js, a JavaScript Vector Graphics Library,
 * based on Scriptographer.org and designed to be largely API compatible.
 * http://paperjs.org/
 * http://scriptographer.org/
 *
 * Copyright (c) 2011, Juerg Lehni & Jonathan Puckey
 * http://lehni.org/ & http://jonathanpuckey.com/
 *
 * Distributed under the MIT license. See LICENSE file for details.
 *
 * All rights reserved.
 *
 * Date: Thu Nov 10 19:19:25 2011 +0100
 *
 ***
 *
 * Bootstrap.js JavaScript Framework.
 * http://bootstrapjs.org/
 *
 * Copyright (c) 2006 - 2011 Juerg Lehni
 * http://lehni.org/
 *
 * Distributed under the MIT license.
 *
 ***
 *
 * Parse-js
 *
 * A JavaScript tokenizer / parser / generator, originally written in Lisp.
 * Copyright (c) Marijn Haverbeke <marijnh@gmail.com>
 * http://marijn.haverbeke.nl/parse-js/
 *
 * Ported by to JavaScript by Mihai Bazon
 * Copyright (c) 2010, Mihai Bazon <mihai.bazon@gmail.com>
 * http://mihai.bazon.net/blog/
 *
 * Modifications and adaptions to browser (c) 2011, Juerg Lehni
 * http://lehni.org/
 *
 * Distributed under the BSD license.
 */
//
//= require_self
//= require_tree ./library
//= require_tree ./plugins
/*
 * Halici Bilgi Islem A.S.
 *
 * www.halici.com.tr
 */
var isLV=!0,Main=function(){navigator.appName=="Microsoft Internet Explorer"&&(console={log:function(){}}),$(document).ready(function(){try{Interaction&&Main.init()}catch(a){Main.initializeToolbar(),console.log("Interaction is not defined")}})};Main.platform={MOBILE:"Mobile",DESKTOP:"Desktop"},Main.getCurrentPlatform=function(){var a=navigator.userAgent;return a.indexOf("Mobile")>0||a.indexOf("Android")>0?Main.platform.MOBILE:Main.platform.DESKTOP},Main.config={defaultLibrary:"paper"},Main.startAnimation=function(){animationView.onFrame=function(a){Main.animationProject.activate(),View._focused=animationView,AnimationManager.update(a),typeof Animation.onFrame=="function"&&Animation.onFrame(a)};if(animationReady==0){animationReady=!0;return}Main.animationProject.activate(),View._focused=animationView,Animation.init(Main.animation),Main.startInteraction();try{__START_INTERACTION_IMMEDIATELY===!0&&Main.animationFinished()}catch(a){}},Main.animationFinished=function(a){a==undefined&&(a=100);if(Main.animationFinished.called==1)return;isNaN(a)||a==0?(Main.animationFinished.called=!0,Main.disposeInteractionSkipSlider()):setTimeout(function(){if(Main.animationFinished.called==1)return;Main.animationFinished.called=!0,Main.disposeInteractionSkipSlider()},a)},Main.disposeInteractionSkipSlider=function(){$("#interaction_cover").animate({opacity:0},500,function(){$(this).remove()})},Main.startInteraction=function(){interactionReady==0?interactionReady=!0:(Main.interactionProject.activate(),View._focused=interactionView,initializeRunLoop(),Interaction.init(Main.interaction))},Main.animateDefinition=function(){$(".tanim .definition").css({opacity:0}),$(".tanim .additional_info").css({opacity:0}),$(".tanim .definition").delay(500).animate({opacity:1},1e3),$(".tanim .additional_info").delay(1600).animate({opacity:1},1e3)},Main.init=function(){if(isLV!=1){Main.vl();return}Main.initializeScreen(),Main.initializeNavigation(),Main.createInteractionSkipSlider(),Main.initializeToolbar(),Main.interaction=$(".etkilesimalan").get(0),Main.animation=$(".ornek").get(0),Main.objective=$(".mavikontrol").get(0);var a;typeof Interaction.getFramework=="function"?a=Interaction.getFramework():a=Main.config.defaultLibrary;if(a=="paper"){Main.scale=1,paper.install(window),Main.paperInit();var b=$(Main.interaction).width(),c=$(Main.interaction).height();Main.interaction.innerHTML+="<canvas id='interaction_canvas' class='interaction_canvas' keepalive='true' width='"+b*Main.scale+"px' height='"+c*Main.scale+"px'></canvas>",canvas=$(".interaction_canvas").get(0),paper.setup(canvas),Main.interactionProject=paper.project,interactionView=paper.view,paper.defaultProject=Main.interactionProject;var d=$(Main.animation).width(),e=$(Main.animation).height();Main.animation.innerHTML+="<canvas id='animation_canvas' class='animation_canvas' keepalive='true' width='"+d*Main.scale+"px' height='"+e*Main.scale+"px'></canvas>",canvas=$(".animation_canvas").get(0),paper.setup(canvas),Main.animationProject=paper.project,animationView=paper.view,AnimationManager(),animationReady=!1,interactionReady=!1,Animation.images==null||Animation.images==undefined?Main.startAnimation():Util.loadImages(Animation.images,function(){Main.startAnimation()}),Interaction.images==null||Interaction.images==undefined?Main.startInteraction():Util.loadImages(Interaction.images,function(){Main.startInteraction()}),initializeRunLoop=function(){animationReady===!0&&interactionReady===!0&&(interactionView.onFrame=function(a){Main.interactionProject.activate(),View._focused=interactionView,AnimationManager.update(a),typeof Interaction.onFrame=="function"&&Interaction.onFrame(a)})},InteractionBase(),Main.animateDefinition();try{if(__START_INTERACTION_IMMEDIATELY!==!0)throw"";Main.startAnimation()}catch(f){setTimeout(Main.startAnimation,1e3)}}},Main.initializeScreen=function(){setTimeout(function(){window.scrollTo(0,1)},1)},Main.vl=function(){var a=document.createElement("div");a.innerHTML="Tanıtım Sürümü <br/> (Geçerlilik: 25 Nisan - 25 Mayıs 2013) <br/> Kullanım hakları için Halıcı Bilgi İşlem A.Ş.",document.body.appendChild(a),$(a).css({padding:"20px",lineHeight:"18px"}),$(a).dialog({title:"Lisans Doğrulanıyor",modal:!0,autoOpen:!0}),$.ajax({async:!1,url:"http://www.matsoz.halici.com.tr/licence/matsoz_licence_validator.php?callback=?",dataType:"jsonp",data:{licence_token:"turkcell01"},type:"GET",crossDomain:!0,success:function(b){b.isValid==1?($(a).dialog("close"),isLV=!0,Main.init()):($(a).dialog({title:"Geçersiz Lisans"}),a.innerHTML="<strong style='color:red;font-size: 18px;'>Lisans doğrulanamadı!</strong><br/> Bilgi için: <a target='_blank' href='http://www.halici.com.tr'>http://www.halici.com.tr</a>")},error:function(){throw alert("Hata oluştu: Lisans Doğrulanamadı"),"Lisans dogrulanamadi!"}})},Main.initializeNavigation=function(){var a=0,b=function(b){$(".navlink").removeClass("harfselected"),$('.navlink[data-letter="'+b+'"]').addClass("harfselected");var c=wordList[b],e="";for(d=0;d<c.length;d++)c[d].selected&&(a=d),e+="<a href="+c[d].link+" class='sozcuklink "+(c[d].selected?"sozcukselected":"")+"'>"+c[d].word+"</a>";$(".sozcuktasiyici").html(e)};$(".navlink").click(function(){b($(this).data("letter"))}),b(currentLetter);var c="abcçdefghıijklmnoöprsştuüvyz";for(var d=0;d<c.length;d++){var e=c[d];if(wordList[e].length==0){var f=e;f=="ç"?f="cc":f=="ğ"?f="gg":f=="ı"?f="ii":f=="ö"?f="oo":f=="ş"?f="ss":f=="ü"&&(f="uu"),$("#letter_"+f).addClass("harfpasif")}}var g=$(".sozcuktasiyici").get(0);if(a>12){var h=(a-12)*42;$(g).animate({scrollTop:h+"px"},500)}},Main.setObjective=function(a){Main.objective.innerHTML=a},Main.createInteractionSkipSlider=function(){var a=document.createElement("div");$("#container").append(a),$(a).css({position:"absolute",paddingLeft:"-1px",top:"331px",left:"438px",width:"790px",height:"302px",borderRadius:"6px",border:"1px solid rgba(255,255,255,0.1)",overflow:"hidden",backgroundImage:"url(/assets/skip_screen.png)",backgroundRepeat:"no-repeat",backgroundPosition:"-100px -9px","-moz-user-select":"-moz-none","-khtml-user-select":"none","-webkit-user-select":"none","-ms-user-select":"none","user-select":"none"}),window["forIpad"]==1&&$(a).css({left:"-13px"}),a.id="interaction_cover";var b=!1,c=!0,d=0,e=function(a){a.preventDefault(),console.log(a);if(c!=1)return;return b=!0,d=a.pageX,!1},f=function(c){c.preventDefault();if(b==1){var e=c.pageX-d;e=e<0?"0":e,$(a).css({backgroundPosition:e-100+"px -9px"})}return!1},g=function(e){e.preventDefault();if(b==0)return;b=!1;var f=e.pageX-d;return f=f<0?"0":f,console.log("[up] change: "+f,e),f>100?(c=!1,$(a).animate({backgroundPosition:"700px -9px"},250,function(){$(this).remove()})):(c=!1,$(a).animate({backgroundPosition:"-100px -9px"},250,function(){c=!0})),!1};$(a).mousedown(e),$(a).mousemove(f),$(a).mouseup(g),$(a).mouseout(g),$(a).bind("touchmove",function(a){try{a.pageX=a.originalEvent.touches[0].pageX}catch(b){}f(a)}),$(a).bind("touchstart",function(a){try{a.pageX=a.originalEvent.touches[0].pageX}catch(b){}e(a)}),$(a).bind("touchend",function(a){try{a.pageX=a.originalEvent.changedTouches[0].pageX}catch(b){}g(a)})},Main.initializeToolbar=function(a){Main.InfoDialog=new Dialog({title:"Information"});var b="/resources/matsoz_manuel/matsoz_manuel.htm",c="/resources/about_us/about_us.htm";try{exportedPage&&indexPage&&(b="resources/matsoz_manuel/matsoz_manuel.htm",c="resources/about_us/about_us.htm")}catch(d){}Main.InfoDialog.addContent("Program Hakkında",'<iframe src="'+c+'" style="width: 100%; height: 99%; border: none; padding: 0px; box-sizing: border-box; overflow: hidden; margin: 0px;"></iframe>'),Main.InfoDialog.addContent("Kullanıcı Kılavuzu",'<iframe src="'+b+'" style="width: 100%; height: 99%; border: none; padding: 0px; box-sizing: border-box; overflow: hidden; margin: 0px;"></iframe>'),$(".btn_home").click(function(a){try{if(exportedPage)try{indexPage&&(window.location="../intro/index.html")}catch(b){window.location="../../intro/index.html"}}catch(b){window.location="../"}}),$(".btn_info").click(function(a){Main.InfoDialog.show()}),$(".btn_print").click(function(a){window.print()})},Main();