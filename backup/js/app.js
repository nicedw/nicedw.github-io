


// $( "#questions" ).submit(function( event ) {
// 	if (	$( "input[name='drink']" ).val() === "correct"    ){
// 		alert("correct!");
// 	}

//     // $( "span" ).text( "Validated..." ).show();
  
// });


// $( "#questions" ).submit(function( event ) {
// 	$( "input[name='drink2']" ).val($( "input[name='drink']" ).val()) ;
// });




$( "#page0copy" ).click (function() {
	
	

	// Copy all the user's inputs to the formspree form
	$( "input[name='usersname']" ).val($( "input[name='usernameinput']" ).val()) ;

	// Clear page0 then display page1
	$( "#page0").hide();   
	$( "#page1").show();


	// Display the user's name on page1
	 var name = $("input[name='usersname']" ).val();
	 $( "#page1" ).prepend("<h2>Welcome "+ name + "</h2>");
});



$( "#page1copy" ).click (function() {
	
	// Copy all the user's inputs to the formspree form. Check the final state of the checkboxes and copy to the formspree form.
	if ($('#userlatte').is(':checked')){
		$('#latte').prop('checked', true);
	}

	if ($('#usercappuccino').is(':checked')){
		$('#cappuccino').prop('checked', true);
	}


	if ($('#usergreentea').is(':checked')){
		$('#greentea').prop('checked', true);
	}




	
	// Clear page 1 then display page 2 - to do : make this into a seperate function to call
	$( "#page1").hide();
	$( "#page2").show();
});


$( "#finishbutton" ).click(function() {
// Copy all the user's inputs to the formspree form

// to do
$( "input[name='comments']" ).val($( "input[name='usercomments']" ).val()) ;
$( "input[name='food']" ).val($( "input[name='userfood']" ).val()) ;




// submit the form when the finish button is pressed
  $( "#submitform" ).submit();
});




$( "#anotherorder" ).click (function() {

 	window.location = "index.html";


});



