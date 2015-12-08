// create select element store it in $select var
var $select = $("<select></select>");
//add $select to div id="menu" (.append())
$("#menu").append($select);
//cycle over all links (loop) (.each())
$("#menu a").each(function(){
 //create option element and store it in $option var
 var $option = $("<option></option>");
 // create $anchor variable for each link
var $anchor = $(this);
if($anchor.parent().hasClass("selected")){
	$option.prop("selected",true);
}
  // set the value of each $option to the href attr from each link
//(.attr(), val())
$option.val($anchor.attr("href"));
// set option's text to links text (get the text from link and set the option text)
//(.text())
$option.text($anchor.text());
// append $option to $select
$select.append($option);
});

// add event click to button (.click());
$select.change(function(){
//window.location = value of select element.
window.location = $select.val();

});


// we should go to css, for screen size less than 768px
//hide ul from #menu

//for screen size bigger than 768 
//hide select and button from #menu

// add property selected to the selected page or current page
//(.prop("selected",))