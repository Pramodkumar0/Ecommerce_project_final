import React, { useState } from 'react'

const Login = ({chooseState}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(email,password);
        try{
        async  function fetches(){
        await fetch("https://ecom-backend-with-mongoose-71la81f5j-pramodkumar0.vercel.app/login",{
            method : "POST",
            crossDomain : true,
            headers : {
                "Content-Type" : "application/json",
                Accept : "application/json",
                "Across-Control-Allow-Origin" : "*",
            },
            body : JSON.stringify({
                email,
                password
            }),
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userRegister");
            chooseState(data.name);
            localStorage.setItem('name',data.name)
            if(data.status==="ok"){
                alert(`Successfully logged in`)
            }else{
                alert(data.error)
                console.log(data.error);
            }
        })
    }
    fetches();
        // console.log(localStorage.getItem('email'));
    }catch(error){
        console.log(error);
    }

    }

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
               <span className="fa fa-sign-in me-1"></span> Login
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                               <span className="fa fa-google me-2"></span> Sign in With Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                               <span className="fa fa-facebook me-2"></span> Sign in With Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}  required />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)} required />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                    <button type="submit" className="btn btn-outline-primary w-100 mt-5" onClick={handleSubmit} >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
                    )
}

                    export default Login
