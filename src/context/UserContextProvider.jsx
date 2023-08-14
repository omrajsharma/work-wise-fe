import React from 'react'
import { createContext } from 'react'

export const UserContext = createContext();

function UserContextProvider({children}) {
  const [userInfo, setUserInfo] = React.useState(null);
  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider