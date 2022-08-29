const validateInfo = (values) => {
    let errors = {};
    console.log(values.name)
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
        errors.email = "Email no valido";
    }
    if (!values.password) {
        errors.password = "Contraseña es requerida";
    } else if (values.password.length < 8) {
        errors.password = "la contraseña debe tener 8 caracteres";
    }

    if (validatePassword === false) {
        errors.verifiedPassword = "La contraseña no coincide";
    }
    return errors;
}
const validateLogin = (values) => {
    let errors = {};
    console.log(values.email)
    if (!values.email) {
        errors.email = "Email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email no valido";
    }

    if (!values.password) {
        errors.password = "Contraseña es requerida";
    } else if (values.password.length < 8) {
        errors.password = "la contraseña debe tener 8 caracteres";
    }
    return errors;
}
const validateEmail = (values) => {
    let errors = {};
    if (!values.email) {
        errors.email = "Email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email no valido";
    }
    return errors;
}
const valPassword = (values,validatePassword) => {
    let errors = {};
  
    if (!values.new_password) {
        errors.password = "Escribe la contraseña";
    } else if (values.new_password.length < 8) {
        errors.password = "Contraseña invalida";
    }
    if (validatePassword === false) {
        errors.verifiedPassword = "La contraseña no coincide";
    }
    console.log(errors)
    return errors;
}
const validateCode = (values) => {
    console.log(values.code)
    let errors = {};
    if (!values.code) {
        errors.code = "Email es requerido";
    } else if (!/^[0-9]+$/.test(values.code)) {
        errors.code = "Email no valido";
    }
    return errors;
}
export { validateInfo, validateLogin, validateEmail, validateCode, valPassword }
