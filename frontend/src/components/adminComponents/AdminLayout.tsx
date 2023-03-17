import { Link, Outlet } from "react-router-dom";

const AdminLayout = (): JSX.Element => {
  return (
    <>
      <nav className="navbar navbar-expand-sm sticky-top c-bg-dark-green">
        <div className="container justify-content-between">
          <Link to="/admin" className="d-flex align-items-center">
            <div className="col-5 p-1 p-lg-2">
              <img
                id="logo"
                src={require("../../resources/icons/logo.png")}
                alt="Website logo"
              />
            </div>
            <span className="col-4 col-lg-6 ps-1 navbar-brand c-green-hover">
              Admin
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarToggler">
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className="nav-item d-flex justify-content-end me-1">
                <Link className="nav-link c-green-hover" to="/admin/act">
                  Activities
                </Link>
              </li>
              <li className="nav-item d-flex justify-content-end me-1">
                <Link className="nav-link c-green-hover" to="/admin/tag">
                  Tags
                </Link>
              </li>
              <li className="nav-item d-flex justify-content-end me-1">
                <Link className="nav-link c-green-hover" to="/admin/loc">
                  Locations
                </Link>
              </li>

              <li className="nav-item d-flex justify-content-end me-1">
                <Link className="nav-link c-green-hover" to="/admin/comp">
                  Companies
                </Link>
              </li>
              <li className="nav-item d-flex justify-content-end me-1">
                <Link className="nav-link c-green-hover" to="/">
                  Website
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container my-4">
        <Outlet />
      </div>
      <footer className="mt-auto">
        <div className="container-fluid c-bg-dark-green c-green text-center">
          <div className="container d-flex justify-content-center py-4">
            <p className="m-0">Admin page</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AdminLayout;
