import { React , createContext , useState, useContext} from 'react'


async function postData(url = "", user = {}) {

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return response.json();
}

async function deleteFetch(url=""){
  const response = await fetch(url, {method: 'DELETE'});
  return response.json();
}

const AuthContext = createContext(null) 

export const AuthProvider = ({children}) => {

    //const [user , setUser] = useState(null)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = { email, password};

    const login = async (email, password)=>{

      const response = await postData('/api/login', user);
      console.log("DA LOGIN RESPONSE", response)

     if (response.error) {
      // Handle login error 
      console.error(response.error);
    } else {
      setEmail(email)
      setPassword(password)
    }
  
    }


    const logout = async ()=>{

      try {
    
        await deleteFetch('/api/login');
  
      } catch (error) {
        console.error('Logout failed:', error);
      }
  
    }

  return (
        <AuthContext.Provider value={{user , login , logout}}>
            {children}
        </AuthContext.Provider>
  )
}
export const useAuth = ()=>{
    return useContext(AuthContext)
} 