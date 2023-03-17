import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const AdminHomePage = (): JSX.Element => {
  return (
    <>
      <h2>Admin Home Page</h2>
      <div className="mt-3 c-dark-green-hover">
        <Link to="/admin/act">
          Modify activities <MdKeyboardDoubleArrowRight className="ms-1" />
        </Link>
      </div>
      <div className="mt-3 c-dark-green-hover">
        <Link to="/admin/tag">
          Modify tags <MdKeyboardDoubleArrowRight className="ms-1" />
        </Link>
      </div>
      <div className="mt-3 c-dark-green-hover">
        <Link to="/admin/loc">
          Modify locations <MdKeyboardDoubleArrowRight className="ms-1" />
        </Link>
      </div>
      <div className="mt-3 c-dark-green-hover">
        <Link to="/admin/comp">
          Modify companies <MdKeyboardDoubleArrowRight className="ms-1" />
        </Link>
      </div>
    </>
  );
};

export default AdminHomePage;
