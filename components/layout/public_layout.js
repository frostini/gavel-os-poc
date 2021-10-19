import { PublicNavbar } from "../navigation"
import { AppNavbar } from "../navigation"
import { PublicFooter } from "../../footer";

const PublicLayout = ({ children }) => (
  <>
    <AppNavbar />
    {children}
    <PublicFooter />
  </>
);

export default PublicLayout;