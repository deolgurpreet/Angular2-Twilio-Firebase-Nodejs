import {FormControl} from "@angular/forms";

// My custom form validation functions - small pices to compose them togheter and reuse in letter projects

// check if the 2 passwords match - coud be used for anuy 2 or more fields..
// export function matchingPasswords (passwordKey: string, passwordConfirmationKey:string){
//   return function (group: ControlGroup):{[key:string]: boolean}{
//     let passwordInput = group.controls[passwordKey];
//     let passwordConfirmationInput = group.controls[passwordConfirmationKey];
//
//     if (passwordInput.value !== passwordConfirmationInput.value){
//       return passwordConfirmationInput.setErrors({notEquivalent: true})
//     }
//   };
// }


// second function to check if passwords match
export function matchPasswords(group): {[key:string]: boolean} {
  let password = group.controls.password;
  let confirm = group.controls.confirm;

  // Don't kick in until user touches both fields
  if (password.pristine || confirm.pristine) {
    return null;
  }

  // Mark group as touched so we can add invalid class easily
  group.markAsTouched();

  if (password.value === confirm.value) {
    return null;
  }

  return {
    passwordsDoNotMatch: true
  };
}

// check if email is valid
export function isEmail(control: FormControl):{[key:string]: boolean} {
  if(!control.value.match(/\S+@\S+\.\S+/)) {
    return {"isNotEmail": true}; // if true is returned the validation shows the error..
  }else{
    return null;
  }
}


// check if value provided is numeric
export function isNumeric(control:FormControl): {[s:string]:boolean}{
  if(!control.value.match(/^\d+$/)){
    return {"isNotNumeric": true};
  }else{
    return null;
  }
}

// check if email has already been taken
export function checkIfEmailIsAlreadyTaken(control: FormControl): Promise<{[key:string]:boolean}> {

    return new Promise((resolve, reject)=> {
        resolve({"emailAlreadyTaken":true});
        // setTimeout(()=>{
        //   if(control.value === "gicu@gmail.com"){
        //
        //     return resolve({'emailAlreadyTaken':true});
        //   }
        //   // this is the case when no email was found in db.
        //   return resolve(null);
        //
        // },3000);
    });
}

export function exampleValidator(control: FormControl): {[key:string]:boolean}{
  if(control.value === "example"){
    return {example:true}
  }
  return null;
}


// check if value provided has at least one upper case letter.
export function hasUppercaseLetter(control:FormControl): {[key:string]:boolean}{
  if(!control.value.match(/[A-Z]/)){
    return {"hasUppercaseLetter": true};
  }else{
    return null;
  }
}

// check if value provided has at least one digit.
export function containsDigit(control:FormControl): {[key:string]:boolean}{
  if(!control.value.match(/\d/)){
    return {"hasUppercaseLetter": true};
  }else{
    return null;
  }
}

// check if value provided has at least one special character.
export function containsSpecialCharacter(control:FormControl): {[key:string]:boolean}{
  if(!control.value.match(/[^a-zA-Z\d]/)){
    return {"hasUppercaseLetter": true};
  }else{
    return null;
  }
}
