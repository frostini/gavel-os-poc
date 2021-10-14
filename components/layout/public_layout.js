import { PublicNavbar } from "../navbar"
import { PublicFooter } from "../../footer";

const PublicLayout = ({ children }) => (
  <div className="relative bg-gray-800 overflow-hidden">
    <div className="relative pt-6">
      <PublicNavbar />
      {children}
      <PublicFooter />
    </div>
  </div>
);

export default PublicLayout;