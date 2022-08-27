import React, {useContext, useState, useEffect} from "react";
import {Context} from "../../store/appContext.js"
import login_image from "../../../../../public/assets/login-image.png";
import logo from "../../../../../public/assets/logo.png";
import {BiLockAlt} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import { SendCode } from "../../components/Login/SendCode";
import NewPassword from "../../components/Login/NewPassword";

const Login = () => {

    

    const navigate = useNavigate();
    const {actions, store} = useContext(Context);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [login, setLogin] = useState({email: "", password: ""})
    const [stage, setStage] = useState(false);


    const handleChange = ({target}) => {
        setLogin({
            ...login,
            [target.name]: target.value
        });
    };
    function validateInfo(values) {
        let errors = {};

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
        return errors;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errores = validateInfo({email: login.email, /*password: login.password*/});
        if (Object.keys(errores).length === 0) {
            if (restore == false) {
                let signin = await actions.login({email: login.email, password: login.password})
                console.log(store.status)
                if (store.alert.msg == "Bad username or password") {
                    console.log("Usuario o contraseña incorrectos")
                } else if (store.alert.msg == "You are not a registered user,sign up to continue or go away!!!") {
                    console.log("No hay ningun usuario registrado con este email")
                } else {
                    setIsSubmitting(true)
                    console.log(store.status)
                }
            } else {
                let res = await actions.forgotPassword({email: login.email})
                console.log(store.status)
                if (store.alert.msg == "Email not registered") {
                    console.log("No hay ningun usuario exitente con ese correo electronico")
                }else {
                    setIsSubmitting(true)
                    console.log(store.status)
                }
            }

        }
        setErrors(errores);
    };

    useEffect(() => {
        if (isSubmitting) 
            navigate("/dashboard");
    }, [isSubmitting]);


    return (
        <div className="container-fluid fw-bold">
            <div className="row">
                <div className="col-xl-5 p-0 d-none d-lg-block vh-100">
                    <img className="img-responsive"
                        style={
                            {objectFit: "cover"}
                        }
                        src={login_image}/>
                </div>

                <form className="col-12 col-xl-7  d-flex align-items-center needs-validation"
                    onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="w-75 m-auto">
                            <div className="col-6 text-center mx-auto ">
                                <img className="text-center"
                                    style={
                                        {
                                            width: 100 + "%"
                                        }
                                    }
                                    src={logo}/>
                            </div>
                            {
                            restore ? (
                                <Reset></Reset>
                            ) : (
                                <div>
                                    <div className="col-xxl-12 py-2">
                                        <label htmlFor="validationCustom01" className="form-label px-0 mb-0">
                                            Correo electronico
                                        </label>
                                        <input name="email" type="text" className="form-control" id="validationCustom01" placeholder="email " required
                                            onChange={handleChange}/> {
                                        errors.email && <p> {
                                            errors.email
                                        }</p>
                                    }
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                    <div className="col-xxl-12">
                                        <label htmlFor="validationCustom02" className="form-label px-0 mb-0">
                                            Contraseña
                                        </label>
                                        <input name="password" type="password" className="form-control" id="validationCustom02" placeholder="password"
                                            onChange={handleChange}
                                            required/> {
                                        errors.password && <p> {
                                            errors.password
                                        }</p>
                                    }
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                    <div className="align-items-center d-flex justify-content-between py-2">
                                        <div>
                                            <div>
                                                <input className="form-check-input" type="checkbox" value=""/>
                                                <span className="mx-2">Recordar cuenta</span>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn btn-link pe-0 "
                                                onClick={
                                                    () => setRestore(true)
                                            }>
                                                <span className="mx-2">
                                                    <BiLockAlt/>
                                                </span>
                                                Olvide mi contraseña
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary col-12" type="submit">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            )
                        } </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;
