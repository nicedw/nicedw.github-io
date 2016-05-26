// All comments made by Nick
// nick: This is what was called by the index.html file:
//         $(document).ready(function(){
//             $("#SignupForm").formToWizard({ submitButton: 'SaveAccount' })  //
//         });
// This plugin gets called imediately after the page has loaded.


(function($) {
    $.fn.formToWizard = function(options) { // nick: options will be the object: { submitButton: 'SaveAccount' } passed from index.html   
        






        // commenting out everything below still works - so i'm not too sure why you need it----------------------------------------------------------
        options = $.extend({   // nick: merging 2 objects together https://api.jquery.com/jquery.extend/
            submitButton: ""  
        }, options);  // ????????????????????????????????? i need to find out what's going here and the purpose
        // commenting out everything above still works --------------------------------------------------------------------------------------------








        var element = this; // assumably referring to $("#SignupForm")  i.e. the <form>

        var steps = $(element).find("fieldset"); // note that element was decalared above without $(...) because we only use $(...) when we want to perform a Jquery method on the DOM element
        var count = steps.size(); // based on the html count will be 3
        var submmitButtonName = "#" + options.submitButton; // options.submitButton will be SaveAccount
        $(submmitButtonName).hide(); // hides the submit button
        // 2
        $(element).before("<ul id='steps'></ul>"); // In the html, this will insert "<ul id='steps'></ul>" BEFORE  the <form> (refered to by $(element))

        steps.each(function(i) { // when you call each it will be a bit like a foreach loop (iterating through each fieldset one) and each iteration's index will be i 
            $(this).wrap("<div id='step" + i + "'></div>"); // wrap is placing a '<div id' on the outside of each fieldstep (wrapping it)
            $(this).append("<p id='step" + i + "commands'></p>"); // this is just appending a p tag with an id of e.g step0command onto the last element inside the fieldstep
            // 2
            var name = $(this).find("legend").html(); // 'this' is the fieldset at the particular iteration i of the loop that we are currently in. When i=0 name will be assigned "account information"
            $("#steps").append("<li id='stepDesc" + i + "'>Step " + (i + 1) + "<span>" + name + "</span></li>");
      
            if (i == 0) { //  the first iteration is going to be the first page so it only needs a next button
                createNextButton(i);
                selectStep(i); // // this is only for styling (to make the current step bold)
            }
            else if (i == count - 1) { // if it's the last iteration it only needs a previous button
                $("#step" + i).hide(); // #step has been wrapped (using .wrap above ) around each fieldstep
                createPrevButton(i);
            }
            else {
                $("#step" + i).hide();
                createPrevButton(i);
                createNextButton(i);
            }
        });

        function createPrevButton(i) {
            var stepName = "step" + i;
            $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Prev' class='prev'>< Back</a>");

            $("#" + stepName + "Prev").bind("click", function(e) {
                $("#" + stepName).hide();
                $("#step" + (i - 1)).fadeIn();
                $(submmitButtonName).hide();
                selectStep(i - 1); // this is only for styling (to make the current step bold)
            });
        }

        function createNextButton(i) {
            var stepName = "step" + i;
            $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Next' class='next'>Next ></a>");

            $("#" + stepName + "Next").bind("click", function(e) {
                $("#" + stepName).hide();
                $("#step" + (i + 1)).fadeIn();
                if (i + 2 == count)
                    $(submmitButtonName).fadeIn();
                selectStep(i + 1); // this is only for styling (to make the current step bold)
            }); 
        }

        function selectStep(i) { // this is only for styling (to make the current step bold)
             $("#steps li").removeClass("current");
             $("#stepDesc" + i).addClass("current");
        }

    }
})(jQuery); // ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????