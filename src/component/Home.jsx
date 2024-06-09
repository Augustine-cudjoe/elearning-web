import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'
function Home() {
    const courseList= [
        {
            id:0,
            title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium impedit doloribus ",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, iste tempore cum quis aut temporibus ipsa! Animi neque exercitationem, dicta voluptatum illo ",
            img:"https://i.pinimg.com/564x/9c/90/0f/9c900ffa5103767ce9c4757d019dbbb0.jpg ",
            rate:"  Rating 4.7 ",
            price:" Price:$40"
        },
        {
            id:1,
            title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium impedit doloribus ",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, iste tempore cum quis aut temporibus ipsa! Animi neque exercitationem, dicta voluptatum illo ",
            img:"https://i.pinimg.com/564x/9c/90/0f/9c900ffa5103767ce9c4757d019dbbb0.jpg ",
            rate:"  Rating 4.7 ",
            price:" Price:$40"
        },
        {
            id:2,
            title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium impedit doloribus ",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, iste tempore cum quis aut temporibus ipsa! Animi neque exercitationem, dicta voluptatum illo ",
            img:"https://i.pinimg.com/564x/9c/90/0f/9c900ffa5103767ce9c4757d019dbbb0.jpg ",
            rate:"  Rating 3.7 ",
            price:" Price:$30"
        },
        {
            id:3,
            title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium impedit doloribus ",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, iste tempore cum quis aut temporibus ipsa! Animi neque exercitationem, dicta voluptatum illo ",
            img:"https://i.pinimg.com/564x/9c/90/0f/9c900ffa5103767ce9c4757d019dbbb0.jpg ",
            rate:"  Rating 4.7 ",
            price:" Price:$100"
        },
        {
            id:4,
            title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium impedit doloribus ",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, iste tempore cum quis aut temporibus ipsa! Animi neque exercitationem, dicta voluptatum illo ",
            img:"https://i.pinimg.com/564x/9c/90/0f/9c900ffa5103767ce9c4757d019dbbb0.jpg ",
            rate:"  Rating 6.7 ",
            price:" Price:$40"
        },
        {
            id:5,
            title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium impedit doloribus ",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, iste tempore cum quis aut temporibus ipsa! Animi neque exercitationem, dicta voluptatum illo ",
            img:"https://i.pinimg.com/564x/9c/90/0f/9c900ffa5103767ce9c4757d019dbbb0.jpg ",
            rate:"  Rating 4.7 ",
            price:" Price:$40"
        },
        {
            id:6,
            title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium impedit doloribus ",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, iste tempore cum quis aut temporibus ipsa! Animi neque exercitationem, dicta voluptatum illo ",
            img:"https://i.pinimg.com/564x/9c/90/0f/9c900ffa5103767ce9c4757d019dbbb0.jpg ",
            rate:"  Rating 4.7 ",
            price:" Price:$40"
        },
        {
            id:7,
            title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium impedit doloribus ",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, iste tempore cum quis aut temporibus ipsa! Animi neque exercitationem, dicta voluptatum illo ",
            img:"https://i.pinimg.com/564x/9c/90/0f/9c900ffa5103767ce9c4757d019dbbb0.jpg ",
            rate:"  Rating 4.7 ",
            price:" Price:$40"
        }
    ]
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
     document.title="home"
    },[])
    
  return (
    <div className=''>
    

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

<section className="main-header py-5 border-bottom gx-md-5 mt-5">
        <div className="container">
            <div className="row align-item-center">
                <div className="col-md-6">
                    <div className="home-header-text-holder pe-md-5">
                        <h1 className="fs-3 fw-normal">Lorem ipsum dolor  </h1>
                        <h2 className="fs-5 fw-light text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores est excepturi unde eos similique enim laborum voluptas blanditiis odit, praesentium molestias. Rerum aspernatur.</h2>
                        <a href="#" className="btn btn-sm  btn-success mt-2 mb-3 d-inline-flex align-item-center justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-check me-2" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z"/>
                              </svg> 
                            Sign-up to Get Started
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="home-header-image-holder">
                        <img  className="img-fluid rounded  shadow-sm full-width h-25" src="https://i.pinimg.com/564x/68/2e/ff/682effd33fc6ddd6baa3239e900dcaa9.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
</section>
<section className="side-features py-4 border-bottom ">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="feature-item d-flex align-item-center  bg-white p-3 border-rounded mb-md-0 mb-3 gap-2">
                        <div className="flex-shrink-0 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                              </svg>
                        </div>
                        <div className="flex-grow-1 ">
                            <h3 className="fs-5">Lorem ipsum dolor sit  </h3>
                          <p className="small text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit.  </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature-item d-flex align-item-center bg-white p-3 border-rounded mb-md-0 mb-3 gap-2 ">
                        <div className="flex-shrink-0 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                              </svg>
                        </div>
                        <div className="flex-grow-1 ">
                            <h3 className="fs-5">Lorem ipsum dolor sit  </h3>
                          <p className="small text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit.  </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature-item d-flex align-item-center bg-white p-3 border-rounded mb-md-0 mb-3  gap-2">
                        <div className="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fullscreen-exit" viewBox="0 0 16 16">
                                <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z"/>
                              </svg>
                        </div>
                        <div className="flex-grow-1">
                            <h3 className="fs-5">Lorem ipsum dolor sit  </h3>
                          <p className="small text-secondary"> 
                           Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 </section>
 <section className="course-loop py-4 border-bottom">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
         <div className="course-loop-heading text-md-center mb-4">
     <h4 className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corrupti, modi incidunt molestias </h4>
        <p className="small text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores eaque, quo recusandae nisi laboriosam quis dicta dolores, sequi fuga cumque debitis? Aliquam voluptates </p>
   <Link to="/courses" className="btn btn-sm btn-success d-inline-flex align-item-center justify-content-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mortarboard-fill me-2" viewBox="0 0 16 16">
        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
      </svg>
      View all courses
    </Link>     
</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="list-group small mb-3">
                        <div className="list-group-item text-bg-light fw-bold ">Courses Categories </div>
                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            Premium Courses
                            <span className="badge text-bg-warning rounded-pill">14</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            Free Courses
                            <span className="badge text-bg-warning rounded-pill">1</span>
                        </a>
                    </div>
                    <div className="list-group small mb-3">
                        <div className="list-group-item text-bg-light fw-bold "> Courses by Topics </div>
                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                           HTML
                            <span className="badge text-bg-warning rounded-pill">14</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Coding
                             <span className="badge text-bg-warning rounded-pill">14</span>
                         </a>
                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                          Pragramming
                            <span className="badge text-bg-warning rounded-pill">1</span>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                            Design
                              <span className="badge text-bg-warning rounded-pill">1</span>
                          </a>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="list-group small">
                        <div className="list-group-item text-bg-light fw-bold d-flex justify-content-between align-items-center">
                            List of all courses
                           <span className="badge text-bg-warning rounded-pill">24 courses</span>
                            
                        </div>
                        
                        {
                            courseList.map(course=>(
                             
                              <Link to={`/singleCourse/${course.id}`} key={course.id} style={{textDecoration:"none"}} className='list-group-item list-group-item-action mb-2'>
                               < div className="row align-items-center g-3" >
                                <div className="col-md-4">
                                   <div className="course-image-holder">
                                    <img className="rounded img-fluid mb-md-0 mt-md-o mt-2" src={course.img} alt=""/>

                                   </div> 
                                </div>
                                <div className="col-md-8">
                                    <h5 className='text-black'>{course.title}</h5>
                                    <p className="text-secondary"> {course.description} </p>
                                    <p className="d-inline-flex align-items-center">
                                        <span className=" me-2 rounded-pill text-bg-warning px-2 py-1 small d-inline-flex align-item-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill me-2" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                              </svg>
                                           {course.rate}
        
                                         </span>
                                         <span className="rounded-pill text-bg-success px-2 py-1 small">
                                           {course.price}
                                         </span>
                                    </p>
                                </div>
   
                            </div>
                              </Link>
                                
                            ))
                         }
                       
                    </div>
                </div>
            </div>
        </div>
</section>
<section className="home-page-content py-4 mb-3">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="home-content-holder pe-md-3">
                        <h2 className="fs-5">Lorem ipsum dolor si Ducimus quaerat dolores voluptate </h2>
                       <p className="small text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloremque consequuntur eius molestias perferendis, esse exercitationem quos, vero dolore porro et maiores sapiente qui perspiciatis impedit tenetur? Sequi, unde vero.
                       </p>
                       <h2 className="fs-5">Lorem ipsum dolor si Ducimus  </h2>
                       <p className="small text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloremque consequuntur eius molestias perferendis, esse exercitationem quos, vero dolore porro et maiores sapiente qui perspiciatis impedit tenetur? Sequi, unde vero.
                       </p>
                       <a href="#" className="btn btn-sm btn-success d-inline-flex align-items-center mb-md-0 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" bi bi-info-circle me-2" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                          </svg>
                        Sing-up to get more info
                       </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="home-content-image">
                        <img src="https://i.pinimg.com/564x/68/2e/ff/682effd33fc6ddd6baa3239e900dcaa9.jpg" alt="home-image" className="img-fluid full-width shadow-sm h-25" />
                    </div>
                </div>
            </div>
        </div>
    </section>

<section className="subcribe py-5">
<div className="container">
 <div className="row justify-content-center">
     <div className="col-lg-4 col-md-6">
         <div className="subscribe-heading text-danger text-md-end text-center">
             <h5 className="fs-4 fw-light m-0 mb-md-0 mb-3">Subscribe for newsletter</h5>
         </div>
     </div>
     <div className="col-lg-4 col-md-6">
         <form className="d-flex justify-content-center">
             <div className="input-group">
                 <input type="email" className="form-control form-control-sm" placeholder="your email" />
                <button className="btn btn-sm btn-success d-inline-flex align-items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-check me-2" viewBox="0 0 16 16">
                     <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                     <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                   </svg>
                 Subscribe
                </button>
             </div>
         </form>
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

<div className="copy py-4 small">
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

export default Home