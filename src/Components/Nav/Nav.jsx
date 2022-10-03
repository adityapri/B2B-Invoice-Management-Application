import './nav.css'
function Nav(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid d-flex flex-row" id="logo" >
    <div > 
      <h3 style={{color:'white'}}>ABC Products</h3>
    </div>
    <div >
      <img src="https://www.buurst.com/wp-content/uploads/2021/02/highradius-White-Transparent-1.png" ></img>
    </div>
    <div> </div>
  </div>
</nav>
        </>
    );
}
export default Nav;