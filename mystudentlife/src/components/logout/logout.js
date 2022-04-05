import { Auth} from "../login/auth";


function LogOut(){  
    
    return(
        
   Auth.signOut()

    
    )

}

export default LogOut