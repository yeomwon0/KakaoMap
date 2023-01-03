$(".menu").click(function(){
   $(this).parent().toggleClass("close");
});
 

// $("#switch").click(function(){
//    $(this).toggleClass("on off");
// });

$("#switch").click(function(){
	$(this).toggleClass("active");
	$(this).hasClass("active") ? onFunc() : offFunc();
});



var innerWidthsize = document.getElementById("size");

window.onresize = function(event){
	var innerWidth = window.innerWidth;
	innerWidthsize.textContent = innerWidth;
}

// var innerHeightsize = document.getElementById("size");
// window.onresize = function(event){
// 	var innerHeight = window.innerHeight;
// 	innerHeightsize.textContent = innerHeight;
// }
// $(window).height(windowHeight); // returns height of browser viewport
// $(document).height(); // returns height of HTML document