import React,{useEffect} from 'react'
import { NavLink ,Link} from 'react-router-dom'
export default function SingleBlog() {
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
   useEffect(()=>{
    document.title="singleblog"
   },[])
  return (
    <div>
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
     <section className="post-header py-5 border-bottom gx-md-5 mt-5">
        <div className="container">
            <div className="row align-item-center">
                <div className="col-md-6">
                    <div className="post-header-text-holder pe-md-5">
                        <h1 className="fs-3 fw-normal">Lorem ipsum dolor  </h1>
                        <p className="d-md-inline-flex align-items-center">
                            <span className="badge text-bg-dark rounded-pill me-2">
                            <strong>Posted on</strong>
                              <span className="fw-light"> 2nd July 2023</span>
                           </span>
                           <span className="badge text-bg-dark rounded-pill me-2">
                             <strong>Category</strong>
                               <span className="fw-light"> Tech</span>
                            </span>
                            <span className="badge text-bg-dark rounded-pill me-2">
                             <strong>Author:</strong>
                               <span className="fw-light">Ucdan</span>
                            </span>
                             </p>
                        <h2 className="fs-5 fw-light text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores est excepturi unde eos similique enim laborum voluptas blanditiis odit, praesentium molestias. Rerum aspernatur.</h2>
                      
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="home-header-image-holder">
                        <img  className="img-fluid rounded  shadow-sm full-width" src="https://i.pinimg.com/564x/68/2e/ff/682effd33fc6ddd6baa3239e900dcaa9.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="post-content py-5 border-bottom">
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="post-content-holder">
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta illo optio consequuntur necessitatibus quod dignissimos rem enim, laborum dolore. Eligendi doloremque dicta repellendus autem optio, deleniti vel aliquam fuga?</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ducimus dolorem delectus? Laborum molestias voluptatum perspiciatis minima a! Quae optio odit autem esse maxime natus iure, inventore sapiente quod sunt?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aliquid soluta adipisci, inventore eveniet labore mollitia voluptatibus cupiditate, ipsa sunt, voluptates est atque quibusdam. Dicta animi cumque provident ex! Dolor?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aliquid soluta adipisci, inventore eveniet labore mollitia voluptatibus cupiditate, ipsa sunt, voluptates est atque quibusdam. Dicta animi cumque provident ex! Dolor?</p>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos optio autem, sint qui, expedita, temporibus omnis delectus voluptatibus eaque corrupti alias dolorem itaque. Distinctio enim accusamus adipisci totam cum obcaecati!</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aliquid soluta adipisci, inventore eveniet labore mollitia voluptatibus cupiditate, ipsa sunt, voluptates est atque quibusdam. Dicta animi cumque provident ex! Dolor?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia aliquid soluta adipisci, inventore eveniet labore mollitia voluptatibus cupiditate, ipsa sunt, voluptates est atque quibusdam. Dicta animi cumque provident ex! Dolor?</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="list-group small mb-3">
                        <div className="list-group-item text-bg-light fw-bold ">Archives </div>
                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            2021
                            <span className="badge text-bg-warning rounded-pill">104</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            2022
                            <span className="badge text-bg-warning rounded-pill">100</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            2023
                            <span className="badge text-bg-warning rounded-pill">200</span>
                        </a>
                    </div>
                    <div className="list-group small mb-3">
                        <div className="list-group-item text-bg-light fw-bold ">Categories </div>
                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            Tech
                            <span className="badge text-bg-warning rounded-pill">44</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                          Tutorials
                            <span className="badge text-bg-warning rounded-pill">45</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            Tips
                            <span className="badge text-bg-warning rounded-pill">10</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                          Product Services
                            <span className="badge text-bg-warning rounded-pill">10</span>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    <footer className="main-footer text-bg-dark py-5 small">
 <div className="container">
     <div className="row justify-content-center">
        <div className="col-md-3">
            <div className="brand-icon mb-2">
                <img src="https://i.pinimg.com/564x/1b/7b/e2/1b7be209fee3fd17943a981b5508384e.jpg" className="img-fluid rounded footlogo text-start" alt="" />
            </div>
            <address className="small text-secondary">
                ul studencka 15 <br/>
                 Ligota Akademicki  <br/>
                  Katowice,Poland
            </address>
            <p className="small text-secondary">
               ucdan@gmail.com
            </p>
           </div>
           <div className="col-md-2">
            <h6>Main Menu</h6>
            <ul className="list-unstyled small">
              <li className=" text-decoration-none text-secondary">
                <a href="/" className="text-white text-decoration-none ">Home</a>
              </li>  
               
              <li className=" text-decoration-none text-secondary">
                <a href="/courses" className="text-white text-decoration-none ">Courses</a>
              </li>  
              <li className=" text-decoration-none text-secondary">
                <a href="/blog" className="text-white text-decoration-none ">Blog</a>
              </li>  
            </ul>
           </div>
           <div className="col-md-2">
            <h6>Mics</h6>
            <ul className="list-unstyled small">
              <li className="a text-decoration-none text-secondary">
                <a href="/faq" className="text-white text-decoration-none ">FAQ</a>
              </li>  
              <li className="a text-decoration-none text-secondary">
                <a href="/contact" className="text-white text-decoration-none ">Contact</a>
              </li>  
               
            </ul>
           </div>
        <div className="col-md-5">
         <h6>Follow Us</h6>
        <p  >
         <a href="#" className="btn btn-sm btn-primary rounded-pill px-3 d-inline-flex align-items-center mb-md-2 ">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook me-md-2 " viewBox="0 0 16 16">
                 <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
               </svg>

            <span className="d-md-block d-none">facebook</span>
         </a>
         <a href="#" className="btn btn-sm btn-primary rounded-pill px-3 d-inline-flex align-items-center mb-md-2 mx-1">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter mx-1" viewBox="0 0 16 16">
                 <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
               </svg>

           <span className="d-md-block d-none">twitter</span>
         </a>
         <a href="#" className="btn btn-sm btn-danger rounded-pill px-3 d-inline-flex align-items-center mb-md-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube me-md-2 " viewBox="0 0 16 16">
                 <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
               </svg>

           <span className="d-md-block d-none">youtube</span>
         </a>
         
        </p>
        </div>
     </div>
 </div>
</footer>

<div className="copy py-4 small bg-black">
        <div className="container">
            <div className="row justify-content-center text-center text-white">
                <p className="m-0 small">   Copyright&copy; 2023. All Right Reserved</p>
            </div>
        </div>
</div>

<div className="mobile-padding pt-5 pb-4 d-md-none bg-black" >
 
</div>

<div className="d-md-none d-block d-flex p-3 fixed-bottom justify-content-center blur-filter shadow-lg">
 <a href="#" className="rounded-pill btn btn-sm btn-warning small px-3 fw-bold d-inline-flex align-items-center">
    
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-check-fill me-2" viewBox="0 0 16 16">
         <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
         <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
       </svg>
     Sign-up for free
 </a>
</div>

<div className="modal fade" 
id="subscribe_modal" 
tabIndex="-1"
aria-labelledby="subscribe_modal" 
aria-hidden="true"
data-bs-backdrop="static"
 data-bs-keyboard="false" 
 >
 <div className="modal-dialog modal-dialog centerd">
    <div className="modal-content">
        <div className="modal-header text-bg-dark">
            <h5 className="modal-tittle">Subscribe to newsletters</h5>
            <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
            >

            </button>
        </div>
        <div className="modal-body">
            <form>
                <div className="row gx-2">
                    <div className="col-md-6">
                        <div className="mb-2">
                            <input type="text"  className="form-control form-control-sm" placeholder="First Name" required />

                        </div>
                       
                    </div>
                    <div className="col-md-6">
                        <div className="mb-2">
                            <input type="text"  className="form-control form-control-sm" placeholder="Last Name" required />

                        </div>
                       
                    </div>
                    <div className="col-md-12">
                        <div className="mb-2">
                            <input type="email"  className="form-control form-control-sm" placeholder="Your email" required />

                        </div>
                       
                    </div>
                    
                    <div className="col-md-12">
                        <div className="d-grid mb-2">
                        <button className="btn btn-sm btn-success d-inline-flex align-items-center justify-content-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                              </svg>
                           Subscribe
                        </button> 
                        </div>
                       
                    </div>
                    
        
        
        
                </div>
            </form> 
        </div>
    </div>
 </div>

</div>
    </div>
  )
}
