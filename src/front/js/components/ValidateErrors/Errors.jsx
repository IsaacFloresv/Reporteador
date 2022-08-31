const validateInfo = (values) => {
  let errors = {};
  if (!values.name.trim()) {
    errors.name = "Nombre es requerido";
  } else if (!/^[a-zA-Z]+$/.test(values.name)) {
    errors.name = "Ingresa nombre correcto";
  }
  if (!values.lastname.trim()) {
    errors.lastname = "Apellido es requerido";
  } else if (!/^[a-zA-Z]+$/.test(values.lastname)) {
    errors.lastname = "Ingresa apellido correcto";
  }
  if (!values.lawyer_identification) {
    errors.lawyer_identification = "Id de abogado es requerido";
  } else if (!/^[a-zA-Z-0-9]+$/.test(values.lawyer_identification)) {
    errors.lawyer_identification = "ingresa un Carnet de abogado correcto";
  }
  if (!values.email) {
    errors.email = "Email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email invalido";
  }
  if (!values.password) {
    errors.password = "La Contraseña es requerida";
  } else if (values.password.length < 8) {
    errors.password = "Tu contraseña debe tener al menos 8 caracteres";
  }
  if (!values.validatePassword) {
    errors.validatePassword = "Contraseña de verificacion es requerida";
  } else if (values.validatePassword.length < 8) {
    errors.validatePassword = "Tu contraseña debe tener al menos 8 caracteres";
  }
  if(values.password !== values.validatePassword){
    errors.validatePassword="Contraseñas no coinciden"}
  return errors;
};
const validateLogin = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email no valido";
  }

  if (!values.password) {
    errors.password = "Contraseña es requerida";
  } else if (values.password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres";
  }
  return errors;
};
const validateEmail = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email invalido";
  }
  return errors;
};
const valPassword = (values, validatePassword) => {
  let errors = {};
 if (values.new_password.length < 8) {
    errors.password = "Contraseña invalida";
  }
  if (validatePassword === false) {
    errors.verifiedPassword = "Las contraseñas no coinciden";
  }
  return errors;
};
const validateCode = (values) => {
  let errors = {};
  if (!values.code) {
    errors.code = "Ingresa el codigo de verificación";
  } else if (!/^[0-9]+$/.test(values.code)) {
    errors.code = "Codigo debe ser numérico";
  }
  return errors;
};
export {
  validateInfo,
  validateLogin,
  validateEmail,
  validateCode,
  valPassword,
};
