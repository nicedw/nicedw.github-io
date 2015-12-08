 // $(".animsition").animsition();
$("#menu").sticky(); // note don't use #sticker like the documenation said - this is just an arbitrary name
 
 $('#menu').on('sticky-start', function() { 
 	$(".description").html("I build great websites");	 
 });

 $('#menu').on('sticky-end', function() { 	
 	$(".description").html("Nick Edwards"); 
 });


 $('#menu').on('sticky-start', function() { 
 	$(".email").html("<a href='mailto:nicedw@hotmail.com'>Email</a>");	 
 });

 $('#menu').on('sticky-end', function() { 	
 	$(".email").html(""); 
 });