import { Auth} from "./auth";


function Login(){  
    
    return(
        
   Auth.federatedSignIn()
    
    )

}

export default Login;