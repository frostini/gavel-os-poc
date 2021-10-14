import { PublicNavbar } from "../navbar"

const PublicLayout = ({ children }) => (
  <div className="relative bg-gray-800 overflow-hidden">
    <div className="relative pt-6 pb-16 sm:pb-24">
      <PublicNavbar/>
      {children}
    </div>
  </div>
);

export default PublicLayout;