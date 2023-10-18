import React from 'react'

const Sidebar = () => {
  return (
   <>
    
    {/* <!-- ======= Sidebar ======= --> */}
  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <a class="nav-link " href=" ">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
      {/* <!-- End Dashboard Nav --> */}

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Product</span><i class="bi bi-chevron-right ms-auto"></i>
        </a>
        
      </li>
      {/* <!-- End Components Nav --> */}

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-journal-text"></i><span>Customers</span><i class="bi bi-chevron-right ms-auto"></i>
        </a>
        
      </li>
      {/* <!-- End Forms Nav --> */}

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-wallet"></i><span>Income</span><i class="bi bi-chevron-right ms-auto"></i>
        </a>
     
      </li>
      {/* <!-- End Tables Nav --> */}

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-bar-chart"></i><span>Promote</span><i class="bi bi-chevron-right ms-auto"></i>
        </a>
      
      </li>
      {/* <!-- End Charts Nav --> */}

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href=" ">
          <i class="bi bi-gem"></i><span>Help</span><i class="bi bi-chevron-right ms-auto"></i>
        </a>
   
      </li>
      {/* <!-- End Icons Nav --> */}

      <li className="nav-item dropdown pe-3 fixed-bottom">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href=" "
                data-bs-toggle="dropdown"
              >
                <img
                  src="assets\img\profile-img.png"
                  alt="Profile"
                  className="rounded-circle img-size-200"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  Akash
                </span>
              </a>
              {/* <!-- End Profile Image Icon --> */}

              
              {/* <!-- End Profile Dropdown Items --> */}
    </li>
    

    </ul>

  </aside>
  {/* <!-- End Sidebar--> */}
   </>
  )
}

export default Sidebar