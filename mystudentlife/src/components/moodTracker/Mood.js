import {useState,useEffect} from "react";
import {Auth} from './../login/auth'
import { Form, Card, Navbar,Button,Toast,ToastContainer} from "react-bootstrap";
import axios from 'axios'
import qs from 'qs'


function Mood() {
const [mood,setMood] = useState("");
const[username,setUsername] = useState("")
const [showB, setShowB] = useState(false);
const toggleShowB = () => setShowB(!showB);
const [message,setMessage] = useState("")

//sets the user name

async function setUser() {
  
  try {
    // Get the user's info, see:
    // https://docs.amplify.aws/lib/auth/advanced/q/platform/js/#identity-pool-federation
    
    const currentUser = await Auth.currentSession()
    // If that didn't throw, we have a user object, and the user is authenticated
  
          // Get the user's Identity Token, which we'll use later with our
    // microservce. See discussion of various tokens:
    // https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html
 
    
    const username = currentUser.getIdToken().payload["cognito:username"]
    

    //set the user's infos
    setUsername(username);
   
    
   
    return currentUser;
   
  } catch (err) {
    console.log(err);
    // Unable to get user, return `null` instead
    return null;
  }
}
//Handle Change in Mood Selection
const handleChange = e =>{
  
  setMood(e.target.value);
}
//Handle Submission for Mood
function handleSubmit(e){
  e.preventDefault();
  
  const date = new Date()
  const data = qs.stringify({
    'username': username,
    'mood': mood,
    'date_time': date
  });
  const config = {
    method: 'post',
    url: 'https://murmuring-garden-88441.herokuapp.com/api/moods',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
   console.log(JSON.stringify(response.data))
    setShowB(true);
    setMessage(`${username} is feeling ${mood} at ${date}`)
  })
  .catch(function (error) {
    setShowB(true);
    setMessage("Mood was not recorded");
    console.log(error);
  });
  
 

  
}



useEffect(()=>{
 setUser()

},[])
  return (
    <>
      <Navbar bg="dark" class="text-center" variant="dark">
        <h3 class="text-white bg-dark">Mood Tracker</h3>
      </Navbar>

      <br />

      <h5 class="text-center">
        <b>How are you feeling today?</b>
      </h5>
      <Card class="text-center">
        <div class="card-body">
          <Form class="text-center"  onSubmit={handleSubmit}>
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Group>
                <Form.Check
                  value="perfect"
                  type={type}
                  id={`default-${type}`}
                  label="Perfect"
                  onChange={handleChange}
                  checked={mood === "perfect"}
                />

                <Form.Check
                value="good" 
                type={type} 
                id={`default-${type}`} 
                label="Good" 
                onChange={handleChange}
                checked={mood === "good"}
                />
                <Form.Check
                value="ok" 
                type={type} 
                id={`default-${type}`} 
                label="Ok"
                onChange={handleChange}
                checked={mood === "ok"}
                />
                <Form.Check
                value="not good"
                type={type}
                id={`default-${type}`}
                label="Not Good"
                onChange={handleChange}
                checked={mood === "not good"}
                />
                <Form.Check
                value="awful" 
                type={type} 
                id={`default-${type}`} 
                label="Awful" 
                onChange={handleChange}
                checked={mood === "awful"}
                />

                </Form.Group>
                
              </div>
            ))}
            
            <div class="row">
          <div class="col text-center">
          
            <Button type="submit" variant="success">Submit</Button>
            

            </div>
        </div>
          </Form>
          
        </div>
      </Card>
      
        <ToastContainer position= 'bottom-center'>
        <Toast onClose={toggleShowB} show={showB} animation={true} delay={7000} autohide>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">MyStudentLife</strong>
          
        </Toast.Header>
        <Toast.Body><b>{message}</b></Toast.Body>
      </Toast>
      </ToastContainer>  
   
    </>
  );
}

export default Mood;
