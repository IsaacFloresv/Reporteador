import React, {useContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Context} from "/workspace/dropcases/src/front/js/store/appContext.js"
import {Link} from "react-router-dom";
import logo from "/workspace/dropcases/public/assets/logo.png";
import register_image from "/workspace/dropcases/public/assets/register_image.png";

const Signup = () => {
    let navigate = useNavigate();
    const {actions, store} = useContext(Context);
    const [user, setUser] = useState({
        name: "",
        lastname: "",
        lawyer_identification: "",
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [validatePassword, setValidatePassword] = useState(null);

    const handleChange = ({target}) => {
        if (target.name === "verifiedPassword") {
            setValidatePassword(target.value === user.password ? true : false)
        }
        setUser({
            ...user,
            [target.name]: target.value
        });
    };
    function validateInfo(values) {
        let errors = {};

        if (! values.name.trim()) {
            errors.name = "Nombre es requerido";
        } else if (!/^[a-zA-Z]+$/.test(values.name)) {
            errors.name = "Ingresa nombre correcto";
        }
        if (! values.lastname.trim()) {
            errors.lastname = "Apellido es requerido";
        } else if (!/^[a-zA-Z]+$/.test(values.lastname)) {
            errors.lastname = "Ingresa apellido correcto";
        }
        if (! values.lawyer_identification) {
            errors.lawyer_identification = "Id de abogado es requerido";
        } else if (!/^[a-zA-Z-0-9]+$/.test(values.lawyer_identification)) {
            errors.lawyer_identification = "ingresa un Carnet de abogado correcto";
        }
        if (! values.email) {
            errors.email = "Email es requerido";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email no valido";
        }
        if (! values.password) {
            errors.password = "Contraseña es requerida";
        } else if (values.password.length < 8) {
            errors.password = "la contraseña debe tener 8 caracteres";
        }

        if (validatePassword === false) {
            errors.verifiedPassword = "La contraseña no coincide";
        }
        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateInfo({
            name: user.name,
            lastname: user.lastname,
            lawyer_identification: user.lawyer_identification,
            email: user.email,
            password: user.password
        });
        if (Object.keys(errors).length === 0) {
            let signup = await actions.register({
                name: user.name,
                lastname: user.lastname,
                lawyer_identification: user.lawyer_identification,
                email: user.email,
                password: user.password
            })
            console.log(store.status)
            if (store.status == "user_duplicate") 
            {console.log("Usuario ya existe")} 
            else {
                setIsSubmitting(true)
                console.log(store.status)
            }
        }
        setErrors(errors);
    };
    useEffect(() => {
        if (isSubmitting) 
            navigate("/login");
        

    }, [isSubmitting]);


    return (
        <div>
            <div className="container-fluid fw-bold">
                <div className="row">
                    <form className="col-12 col-xl-7 d-flex align-items-center needs-validation" noValidate
                        onSubmit={
                            e => handleSubmit(e)
                    }>
                        <div className="container">
                            <div className="w-75 mx-auto">
                                <div className="col-5 text-center mx-auto my-5 ">
                                    <img className="text-center"
                                        style={
                                            {
                                                width: 100 + "%"
                                            }
                                        }
                                        src={logo}/>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label for="validationCustom01" className="form-label m-0">
                                            Full Name
                                        </label>
                                        <input type="text" className="form-control my-1" name="name" required
                                            onChange={
                                                e => handleChange(e)
                                            }/> {
                                        errors.name && <p> {
                                            errors.name
                                        }</p>
                                    } </div>

                                    <div className="col-md-6">
                                        <label className="form-label m-0">
                                            Apellido
                                        </label>
                                        <div className="input-group has-validation">
                                            <input type="text" className="form-control my-1" name="lastname"
                                                onChange={
                                                    e => handleChange(e)
                                                }
                                                required/> {
                                            errors.lastname && <p> {
                                                errors.lastname
                                            }</p>
                                        } </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <label for="validationCustom03" className="form-label m-0">
                                        lawyer_identification
                                    </label>
                                    <input type="text" className="form-control my-1" name="lawyer_identification"
                                        onChange={
                                            e => handleChange(e)
                                        }
                                        required/> {
                                    errors.lawyer_identification && <p> {
                                        errors.lawyer_identification
                                    }</p>
                                } </div>
                                <div className="col-md-12">
                                    <label for="validationCustom03" className="form-label m-0">
                                        Email
                                    </label>
                                    <input type="text" className="form-control my-1" name="email"
                                        onChange={
                                            e => handleChange(e)
                                        }
                                        required/> {
                                    errors.email && <p> {
                                        errors.email
                                    }</p>
                                } </div>
                                <div className="col-md-12">
                                    <label for="validationCustom02" className="form-label m-0">
                                        Password
                                    </label>
                                    <input type="text" className="form-control my-1" name="password"
                                        onChange={
                                            e => handleChange(e)
                                        }
                                        required/> {
                                    errors.password && <p> {
                                        errors.password
                                    }</p>
                                } </div>
                                <div className="col-md-12">
                                    <label for="validationCustom05" className="form-label m-0">
                                        Verify password
                                    </label>
                                    <input type="text" className="form-control my-1" name="verifiedPassword"
                                        onChange={
                                            e => handleChange(e)
                                        }
                                        required/> {
                                    errors.verifiedPassword && <p> {
                                        errors.verifiedPassword
                                    }</p>
                                } </div>
                                <div className="col-12 py-4">

                                    <button className="btn btn-primary col-12" type="submit">
                                        Register
                                    </button>

                                </div>
                                <div className="text-center">
                                    <Link to="/login">
                                        <button className="btn text-secondary fs-6">
                                            <span className="mx-2"></span>Ya tengo una cuenta,acceder
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="col-xl-5 p-0 d-none d-lg-block vh-100">
                        <img className="img-responsive "
                            style={
                                {objectFit: "cover"}
                            }
                            src={register_image}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
