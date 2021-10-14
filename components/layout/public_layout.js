import { PublicNavbar } from "../navbar"
import { AppNavbar } from "../navbar"
import { PublicFooter } from "../../footer";

const PublicLayout = ({ children }) => (
  <>
    <AppNavbar />
    {children}
    <PublicFooter />
  </>
);

export default PublicLayout;