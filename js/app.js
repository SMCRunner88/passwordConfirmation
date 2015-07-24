//Problem: hints are shown eve when form is valid
//Solution: hide and show them at appropriate times.
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $username = $("#username");

//Hide hints: 
$("form span").hide();


function isUsernamePresent() {
  return $username.val().length > 0;
}

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

//Find out if password is valid
function passwordEvent() {  
  if(isPasswordValid()) {
    //Hide hint if valid
    $password.next().hide();
  }
  else {
    //show hint
    $password.next().show();
  } 
}

function confirmPasswordEvent() {  
  //find out if pw and confirmation match
  if (arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide()    
  }
  else {
    //else show the hint
    $confirmPassword.next().show()  
  }       
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
    
//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();




