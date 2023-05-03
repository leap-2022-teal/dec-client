import { useState } from "react";

export function emailValidator({ email }: any) {
  if (!email) {
    return "Emailee burtguulne uu";
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return "Email bish bn";
  }
  return "Success";
}

export function passwordValidator({ password }: any) {
  if (!password) {
    return "Nuuts uge orulnu";
  } else if (password.length < 8) {
    return "nuuts ug 8 oron oos deesh baih estoi";
  }
  return "";
}

export function confirmPasswordValidator({ password, cpassword }: any) {
  if (!cpassword) {
    return "nuuts ugee battganu";
  } else if (cpassword.length < 8) {
    return "nuuts ug 8 oron oos deesh baih estoi";
  } else if (cpassword !== password) {
    return "nuuts ug hoorondo taarahgui bn";
  }
  return "nuuts ug batalgaajla";
}

// function PasswordAndConfirmPasswordValidation() {
//   const [passwordError, setPasswordError] = useState("");
//   const [confirmPasswrodError, setConfirmPasswordError] = useState("");
//   const [passwordInput, setPasswordInput] = useState({
//     password: "",
//     confirmPassword: "",
//   });

//   const handlePasswordChange = (evnt : any) =>{

//     const passwordInputValue = evnt.target.value.trim();
//     const passwordInputFieldName = evnt.target.name;
//     const NewPassWordInput = {...passwordInput, [passwordInputFieldName]:passwordInputValue} setPasswordInput(NewPassWordInput);
//   }

//   const handleValidation = (evnt : any) => {

//     const passwordInputValue = evnt.target.value.trim()
//     const passwordInputFieldName = evnt.target.name
//   }

//   if(passwordInputFieldName === "password"){
//     const uppercaseRegExp   = /(?=.*?[A-Z])/;
//     const lowercaseRegExp   = /(?=.*?[a-z])/;
//     const digitsRegExp      = /(?=.*?[0-9])/;
//     const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
//     const minLengthRegExp   = /.{8,}/;

//     const passwordLenght = passwordInputValue.length;
//     const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
//     const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
//     const digitsPassword = digitsRegExp.test(passwordInputValue);
//     const specialCharPassword = specialCharRegExp.test(passwordInputValue);
//     const minLengthPassword = minLengthRegExp.test(passwordInputValue);

//     let errMsg = "";
//     if(passwordLenght === 0){
//       errMsg="Password is empty";
//     } else if(!uppercasePassword){
//       errMsg="At least one Uppercase"
//     } else if(!lowercasePassword){
//       errMsg="At least one Lowercase"
//     } else if(!digitsPassword){
//       errMsg="At least one digits"
//     } else if(!specialCharPassword){
//       errMsg="At least one Special Characters"
//     } else if(!minLengthPassword){
//       errMsg="At least minumum 8 characters"
//     } else {
//       errMsg=""
//     }
//     setPasswordError(errMsg)
//   }

// if(passwordInputFieldName === "confirmPassword" || (passwordInputFieldName === "password" && passwordInput.confirmPassword.length > 0)){

//   if(passwordInput.confirmPassword !== passwordInput.password){
//     setConfirmPasswordError("Confirm password is not matched")
//   } else {
//     setConfirmPasswordError("")
//   }
// }
// }

// return(<div className="row">
// <div className="col-sm-4">
//   <PasswordInputField handlePasswordChange={handlePasswordChange} handlev/>
// </div>
// </div>)
