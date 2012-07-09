/**
 * Yuvarlama
 * kaynak: mat-5-yuvarlama.pdf
 * 
 * Halıcı Yazılım
 * Abdullah Karacabey
 * 09.07.2012
 * 
 * 
 */
function SadeceRakam(a,b){var c=a.charCode==undefined?a.keyCode:a.charCode;return/^[0-9]+$/.test(String.fromCharCode(c))||c==0||c==13||isPassKey(c,b)?!0:!1}function isPassKey(a,b){if(b!=null)for(var c=0;c<b.length;c++)if(b[c]==String.fromCharCode(a))return!0;return!1}function SadeceRakamBlur(a,b){var c=a.target?a.target:a.srcElement,d=c.value;d=d.replace(/^\s+|\s+$/g,""),b&&(d=d.replace(/\s{2,}/g," ")),c.value=d}var dogruCevapGosterimRengi="green",kareIlkStrokeColor="black",kareIlkFillColor="white",kareBoyaliStrokeColor="black",kareBoyaliFillColor="red",divSonrakiYaziRenk="white",divSonrakiFillRenk="#4682b4",Animation=function(){};Animation();var Interaction=function(){};Interaction(),Interaction.getFramework=function(){return"paper"},Interaction.init=function(a){function b(){var a=Math.floor(Math.random()*9e3+1e3);return a}Main.setObjective("Aşağıdaki saylar için istenilen yuvarlamayı yaparak klavyeden sayıyı yazınız ve kontrol ediniz."),$(a).append("<div id='cerceve'>"),$("#cerceve").css("width","490px"),$("#cerceve").css("height","60px"),$("#cerceve").css("position","absolute"),$("#cerceve").css("top","0"),$("#cerceve").css("bottom","0"),$("#cerceve").css("left","0"),$("#cerceve").css("right","0"),$("#cerceve").css("margin","auto"),$("#cerceve").css("border","solid 1px black"),$("#cerceve").css("font-size","medium"),$("#cerceve").css("font-weight","bold");var c=b();console.log("Sayi: "+c)};