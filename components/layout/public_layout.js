// import { PublicNavbar } from "../navigation"
import { AppNavbar } from "../navigation"
import { PublicFooter } from "../../footer";
import { useAuth } from '../../contexts/auth'

const PublicLayout = ({ children }) => {
  const { user, loading, logout } = useAuth();
// console.log('user :', user)
  return (
    <>
      <AppNavbar user={user} loading={loading} logout={logout} />
      { children }
      <PublicFooter />
    </>
  )
}

export default PublicLayout;