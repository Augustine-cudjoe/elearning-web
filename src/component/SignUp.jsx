import React,{useState,useEffect} from 'react'

import { Link,NavLink } from 'react-router-dom'

import "./style.css"

function Signup() {
    const [myeye, setMyeye]=useState(false)
    const handleMyeye=()=>{
      setMyeye(!myeye)
    }
    useEffect(()=>{
      document.title='signup'
     },[])
     const navbar=[
        {
        id:0,
        nav:"Home",
        link:"/"
    },
    {
        id:1,
        nav:"Courses",
        link:"/courses"
    },
    {
        id:2,
        nav:"Blog",
        link:"/blog"
    },
    {
        id:3,
        nav:"FAQ",
        link:"/faq"
    },
    {
        id:4,
        nav:"Contact",
        link:"/contact"
    },
   ]
  return (
    <div className=' signup '>
        <nav className="navbar navbar-expand-lg bg-light fixed-top border-bottom small blur-filter">
    <div className="container ">
        <a href="/" className="navbar-brand">
            Elearning
            </a>
        <button className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-content"
        aria-controls="navbar-content"
        aria-expanded="false"
        aria-label="Toggle Navigation"
        >
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbar-content">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex flex-column flex-md-column flex-lg-row mb-2 mb-md-0">
            {
                navbar.map(nav=>(
                    <NavLink key={nav.id} to={nav.link} 
                     className={({ isActive}) =>
                     isActive ? "text-primary fw-bold " : " text-black mx-2 text-decoration-none"
                  }>
                        {nav.nav}
                    </NavLink>
                ))
            }

        </li>
        
        
       </ul>
       <div className="ms-auto me-1 d-grid d-md-block gap-2 mb-3 mb-md-0">
        <Link to="/signup" className="btn btn-sm btn-danger  align-item-center   d-inline-flex text-center justify-content-center me-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-check me-2" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
              </svg>
            Sign up for free
        </Link>
        <Link to="/login" className="btn btn-sm btn-warning  align-item-center   d-inline-flex text-center justify-content-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right me-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
           <span>  Login</span>
        </Link>

       </div>
       <form className="d-flex my-2 my-md-0" role="search">
 <div className="input-group">
<input type="search" className="form-control form-control-sm" placeholder="search form" />
<button className="btn btn-sm btn-success">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
</button>
</div>
       </form>
    </div>
    </div>
   
      </nav>
     <main className=' '>
        <section className=' py-md-5 py-3 mt-5'>
            <div className="d-flex flex-column justify-content-center align-items-center">
            <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
            <h1 className="text-primary  text-5 fw-normal text-center mb-5">Create your account</h1>
            <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-3 align-items-center " >
             <p className='smedia '>
              <Link className=' btn btn-sm btn-primary rounded-pill px-3 d-inline-flex align-items-center mb-md-2 gap-1 smedia'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
             <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
              </svg>
              <span className='font-medium md:text-sm text-xs'>
              Continue with Google
             </span>
              </Link>
            
              
             
             </p>
             <p className='smedia '> 
             <Link to="#" className="btn btn-sm btn-primary rounded-pill px-3 d-inline-flex align-items-center mb-md-2  smedia">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook me-md-2 me-1 " viewBox="0 0 16 16">
                 <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
               </svg>

               <span  className='fw-medium  text-6'> Continue with Facebook</span>
                 </Link>
                  </p>
            
            </div>
            
            <div className="d-flex flex-column   mb-3 position-relative">
                <input className=' border border-white mb-2  p-2 rounded-md shadow  bg-body-white rounded' type='text' placeholder='Last Name'/>
                <input className=' border border-white mb-2  p-2 rounded-md shadow  bg-body-white rounded' type='text' placeholder='First Name'/>
                
                <input className=' border border-white mb-2  p-2 rounded-md shadow  bg-body-white rounded' type='email' placeholder='Email Address'/>
                <input className='border border-white mb-2  p-2 rounded-md shadow  bg-body-white rounded ' type='password' placeholder='Password'/>
               
                
                <p  onClick={handleMyeye} className='position-absolute end-0 bottom-0 p-1'> 
            {
             myeye? (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
              className="bi bi-eye text-gray-460 cursor-pointer text-2xl" viewBox="0 0 16 16">
             <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
             <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
           </svg>):(<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-eye-slash text-gray-460 cursor-pointer text-2xl" viewBox="0 0 16 16">
                                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                                              <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                        </svg>)
            }
               </p>
                
            </div>
            <p className='text-6 fw-normal text-center'> By clicking “Sign in”, you agree to our Term of Use and our Privacy Policy </p>
            <div className="d-flex  align-items-center justify-content-center mb-0">
           <button type='button' className='btn btn-outline-primary bg-primary text-white  fw-bold p-3 rounded-md my-5' id='login-btn'>Sign Up</button>
            </div>
            <p className='text-6 fw-normal text-center '> Forget your password ?</p>
              <div className="d-flex align-items-center justify-content-center gap-5  mt-4">
              <p className='d-flex align-items-center gap-3 text-center  text-6 '> Already have an account? 
              <Link to='/login' className='text-[#3C0644] font-semibold ' >Login</Link>
              </p>
            
              </div>
            </div>
            </div>
        </section> 
     </main>
    </div>
  )
}

export default Signup;