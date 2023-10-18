import React from 'react'
import PieChart from './PieChart'

const Main = () => {
  return (
    <>
        <main id="main" className="">

<div className="pagetitle">
  
  <nav>
    <ol className="breadcrumb">
      
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}

<section className="section dashboard">
  <div className="row">

 
    {/* <!-- Left side columns --> */}
    <div className="col-lg-12">
      <div className="row">

       
      
       
        {/* <!-- Earning Card --> */}
        <div className="col-xxl-4 col-md-3">
          <div className="card info-card earning-card">

           

            <div className="card-body">
              <h5 className="card-title">Earning</h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <div className="ps-3">
                  <h6>$198k</h6>
                  <span className="text-success small pt-1 fw-bold">37.8%</span> this month<span className="text-muted small pt-2 ps-1"></span>

                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <!-- End Earning Card --> */}
        {/* <!-- Orders Card --> */}
        <div className="col-xxl-4 col-md-3">
          <div className="card info-card orders-card">

           

            <div className="card-body">
              <h5 className="card-title">Orders</h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-journal-text"></i>
                </div>
                <div className="ps-3">
                  <h6>$2.4k</h6>
                  <span className="text-success small pt-1 fw-bold">2%</span> this month<span className="text-muted small pt-2 ps-1"></span>

                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <!-- End Orders Card --> */}
        <div className="col-xxl-4 col-md-3">
          <div className="card info-card balance-card">

           

            <div className="card-body">
              <h5 className="card-title">Balance</h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-wallet"></i>
                </div>
                <div className="ps-3">
                  <h6>$2.4k</h6>
                  <span className="text-success small pt-1 fw-bold">2%</span> this month<span className="text-muted small pt-2 ps-1"></span>

                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <!-- End Sales Card --> */}
        <div className="col-xxl-4 col-md-3">
          <div className="card info-card totalsales-card">

           

            <div className="card-body">
              <h5 className="card-title">Total Sales</h5>                       

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-bag"></i>
                </div>
                <div className="ps-3">
                  <h6>$89k</h6>
                  <span className="text-success small pt-1 fw-bold">11%</span> this week <span className="text-muted small pt-2 ps-1"></span>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    {/* <!-- End Left side columns --> */}
    {/* next row */}   
  </div>
  <div className="row">
    <div className="col-lg-8">
      <div className="row">

       
      
       
        {/* <!-- Overview Card --> */}
        <div className="col-md-12">
          <div className="card ">

           
      


            <div className="card-body">
              <h5 className="card-title">Overview</h5>

              <div className="align-items-center justify-content-center items-center">
                <div className="row text-center">
                  <div className="col-md-1 border border-rounded bg-danger-light" > 
                                      <br />
                                      <br />
                                      <br />
                                      <br />
                                      <br />
                  </div>
                  <div className="col-md-1 border border-rounded bg-danger-light"  > 
                                      <br />
                                      <br />
                                      <br />
                                      <br />
                  </div>
                  <div className="col-md-1 border border-rounded bg-danger-light"  > 
                                      <br />
                                      <br />
                                      <br />
                                      
                  </div>
                  <div className="col-md-1 border border-rounded bg-danger-light"  > 
                                      <br />
                                      <br />
                                      <br />
                                      <br />
                  </div>
                  <div className="col-md-1 border border-rounded bg-danger-light"  > 
                                      <br />
                                      <br />
                                      <br />
                                      <br />
                  </div>
                  <div className="col-md-1 border border-rounded bg-danger-light"  > 
                                      <br />
                                      <br />
                                      <br />
                                      <br />
                  </div>
                  <div className="col-md-1 border border-rounded bg-danger-light"  > 
                                      <br />
                                      <br />
                                      <br />
                                      <br />
                  </div>
                  <div className="col-md-1 border border-rounded bg-danger"  > 
                                      <br />
                                      <br />
                                      <br />
                                      <br />
                  </div>
                  <div className="col-md-1 border border-rounded bg-danger-light"  > 
                                      <br />
                                      <br />
                                      <br />
                                      <br />
                  </div>
                  <div className="col-md-1 border border-rounded bg-danger-light"  > 
                                      <br />
                                      <br />
                                      <br />
                                      <br />
                  </div>
                  <div className="col-md-1 border border-rounded bg-danger-light"  > 
                                      <br />
                                      
                  </div>
                  <div className="col-md-1 border border-rounded bg-danger-light"  > 
                                      <br />
                                      <br />
                                      <br />
                                      <br />
                  </div>
                                 
                </div> 
              </div>
            </div>

          </div>
        </div>
        {/* <!-- End Overview Card --> */}

      </div>
    </div>
    <div className="col-lg-4 card"><PieChart/></div>
    
  </div>
</section>

</main>
{/* <!-- End #main --> */}
    </>
  )
}

export default Main