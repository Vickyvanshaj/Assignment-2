import NavBar from "./NavBar";
import Welcome from "./Welcome";
const Layout = ({ children }) => {
  return (
    <>
      <NavBar/>
      {children}
    </>
  );
};

export default Layout;
