import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

export default function ProtectedRout({children}) {
    const { isAuthenticated, loginWithRedirect } = useAuth0();


   useEffect(() => {
    if (!isAuthenticated) loginWithRedirect();
  }, [isAuthenticated]);

  return children;

}
