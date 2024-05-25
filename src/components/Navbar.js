import 'bootstrap/dist/css/bootstrap.min.css';
// import { Dropdown, DropdownButton } from 'react-bootstrap';
// import spvLogo from '../spv.jpg'
import '../styles/index.css'
function Navbar1(){
    return(
        <>
        <nav class="navbar navbar-expand-lg  bg-body-secondary " >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {/* <img src={spvLogo} alt="Bootstrap" width="60" height="40"/> */}
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">ABOUT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">CONTACT</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              {/* <button class="btn custom-login-btn" type="submit" >Login</button> */}
              <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                 </a>
                       <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                   <a class="dropdown-item" href="#">Action</a>
               <a class="dropdown-item" href="#">Another action</a>
               <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
               </div>
               </li>
            </form>
          </div>
        </div>
      </nav>
        </>
    )
}
export default Navbar1;