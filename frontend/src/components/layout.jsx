import PropTypes from "prop-types";
import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <div>
        <Navbar/>
        <div className="bg-indigo-50 h-40"></div>
        <section className="my-8 px-8 md:px-20">
            {children}
        </section>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;