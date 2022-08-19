import React from 'react'
import { Link } from 'react-router-dom'
import logo from "/workspace/dropcases/public/assets/logo.png"
import register_image from '/workspace/dropcases/public/assets/register_image.png'
const Signup = () => {
    return (
        <div>
            <div className="container-fluid fw-bold">
                <div className="row">
                    <form class="col-12 col-xl-7 d-flex align-items-center needs-validation" novalidate>
                        <div className='container'>
                            <div className="w-75 mx-auto">
                                <div className="col-5 text-center mx-auto my-5 ">
                                    <img classname="text-center"
                                        style={
                                            {
                                                width: 100 + "%"
                                            }
                                        }
                                        src={logo}/>
                                </div>
                                <div className='row'>
                                    <div class="col-md-6">
                                        <label for="validationCustom01" class="form-label m-0">Full Name</label>
                                        <input type="text" class="form-control my-1" id="validationCustom01" required/>
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="validationCustomUsername" class="form-label m-0">Lawyer ID</label>
                                        <div class="input-group has-validation">
                                            <input type="text" class="form-control my-1" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                                            <div class="invalid-feedback">
                                                Please provide a valid ID.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <label for="validationCustom03" class="form-label m-0">Email</label>
                                    <input type="text" class="form-control my-1" id="validationCustom03" required/>
                                    <div class="invalid-feedback">
                                        Please provide a valid email.
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <label for="validationCustom02" class="form-label m-0">Paswword</label>
                                    <input type="text" class="form-control my-1" id="validationCustom02" required/>
                                    <div class="valid-feedback">
                                        Password
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <label for="validationCustom05" class="form-label m-0">Verify password</label>
                                    <input type="text" class="form-control my-1" id="validationCustom05"/>
                                    <div class="invalid-feedback">
                                        Please provide a valid password.
                                    </div>
                                </div>
                                <div class="col-12 py-4">
                                    <button class="btn btn-primary col-12" type="submit">Register</button>
                                </div>
                                <div className='text-center'>
                                    <Link to='/login'>
                                    <button className="btn text-secondary fs-6">
                                        <span className="mx-2" onmouseover={{class:'text-decoration-underline'}} ></span>Ya tengo una cuenta,acceder
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
    )
}

export default Signup
