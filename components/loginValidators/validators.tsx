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