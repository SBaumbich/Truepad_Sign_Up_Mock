
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
var $fullName = $("#fullName");

//hide hints
$("form span").hide();

function isUsernamePresent() {
  return $fullName.val().length > 0;
}

function isPasswordValid(){
  return $password.val().length > 8;
}

function isPasswordConfirmed(){
  return $confirmPassword.val() === $password.val();
}

function canSubmit(){
  return isPasswordValid() && isPasswordConfirmed() && isUsernamePresent();
}

function passwordEvent (){
 // identify if pass is valid
  if (isPasswordValid()) {
    // hide hint if valid
    $password.next().hide();
  }
  else {  // else show hint
     $password.next().show();
  }
}

function confirmPasswordEvent(){
 // find out if password and conform are a match
 if(isPasswordConfirmed()){
   // hide hint if valid
    $confirmPassword.next().hide();
  }
  else {  // else show hint
     $confirmPassword.next().show();
  }
}

function enableSubmitEvent(){
  $("#submit").prop("disabled", !canSubmit());
}

// when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

// when event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
//------------------------------------------------------
