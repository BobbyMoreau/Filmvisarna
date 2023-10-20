import { Children } from "react";
import {Navigate, useNavigate} from 'react-router-dom';


async function getFetch(url=""){
  const response = await fetch(url);
  return response.json();
  }
  


const RequireAuth = async ({Children})=>{

  const loggedInUser = await getFetch('/api/login')

  if(!loggedInUser){

    return <Navigate to= "/loggain" />;
  }

 return Children;

}

export default RequireAuth;