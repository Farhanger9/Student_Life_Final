import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar} from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useState, useEffect } from "react";
import Login from "./components/login/Login";
import LogOut from "./components/logout/logout";
import { Auth } from "./components/login/auth";
import GetMap from "./components/Map/Map";
import Emergency from "./components/Emergency/Emergency";
import Mood from "./components/moodTracker/Mood";
import Assessment from "./components/assessment/Assessment";
import Article from "./components/article/Article";
import "./App.css";
import "leaflet/dist/leaflet.css";
import axios from 'axios'
import qs from 'qs'
import UserProfile from "./components/profile/userProfile";


function App() {
  const [Username, setUsername] = useState("");
  const [Email,setEmail] = useState("")
  const [Name,setName] = useState("")
  const [ID,setID] = useState("")
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function setUserInfo() {
    await timeout(1000);
    try {
      // Get the user's info, see:
      // https://docs.amplify.aws/lib/auth/advanced/q/platform/js/#identity-pool-federation
      
      const currentUser = await Auth.currentSession()
      // If that didn't throw, we have a user object, and the user is authenticated
    
            // Get the user's Identity Token, which we'll use later with our
      // microservce. See discussion of various tokens:
      // https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-with-identity-providers.html
      const name = currentUser.getIdToken().payload.name
      const email = currentUser.getIdToken().payload.email
      
      const username = currentUser.getIdToken().payload["cognito:username"]
      

      //set the user's infos
      setUsername(username);
      setEmail(email)
      setName(name)
      
     
    } catch (err) {
      console.log(err);
     
    }
  }

  var data = qs.stringify({
    'username': Username,
    'email': Email,
    'name': Name,

  });
  var config = {
    method: 'post',
    url: 'https://murmuring-garden-88441.herokuapp.com/api/profiles',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
  };

  const profileURL = `https://murmuring-garden-88441.herokuapp.com/api/profiles/${Username}`
    const FetchProfile = async() =>{
      try{
      const response = await fetch(profileURL);
      const json = await response.json()
     setID(json._id)
     console.log(ID)
    }catch (error) {
     console.log(error);
    }
   }

  useEffect(() => {
  
    
    setUserInfo();
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    //get id
    
   FetchProfile()
    
  });

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>
            <b>MyStudentLife</b>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="container-fluid">
          {Username && (
            <LinkContainer to={`/userprofile/${Username}/${ID}`}>
              <Nav.Link>Your Profile {/* Links to User Profile*/}</Nav.Link>
            </LinkContainer>
          )}
          {Username && (
            <LinkContainer to="/assessment">
              <Nav.Link>Assessment{/*Links to Assessment */}</Nav.Link>
            </LinkContainer>
          )}
          {Username && (
            <LinkContainer to="/mood">
              <Nav.Link>Mood Tracker{/* Links to Mood Tracker*/}</Nav.Link>
            </LinkContainer>
          )}

          {Username && (
            <LinkContainer to="/journals">
              <Nav.Link>Journals{/*Links to Journals */}</Nav.Link>
            </LinkContainer>
          )}
          {Username && (
            <LinkContainer to="/articles">
              <Nav.Link>Articles{/* Links to Articles*/}</Nav.Link>
            </LinkContainer>
          )}

          {Username && (
            <LinkContainer to="/meditation">
              <Nav.Link>Meditation {/*Links to Articles */}</Nav.Link>
            </LinkContainer>
          )}

          {Username && (
            <LinkContainer to="/favourites">
              <Nav.Link>Favourites{/* Links to Favourites List */}</Nav.Link>
            </LinkContainer>
          )}
          {Username && (
            <LinkContainer to="/clinics">
              <Nav.Link> Search For Clinics</Nav.Link>
            </LinkContainer>
          )}
          {Username && (
            <LinkContainer to="/emergency">
              <Nav.Link>Emergency {/*Links to Emergency */}</Nav.Link>
            </LinkContainer>
          )}

          <LinkContainer to={Username ? "/logout" : "/login"}>
            <Nav.Link>
              {Username ? "Logout" : "Login"} {/*Links to Login */}
            </Nav.Link>
          </LinkContainer>
          {Username && (
            <Nav.Item className="ml auto">{<b>Welcome {Username}</b>}</Nav.Item>
          )}
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" />
        {Username && <Route path={'/userprofile/:username/:id/'} element={<UserProfile/>}/>}
        {Username && <Route path="/mood" element={<Mood />} />}
        {Username && <Route path="/articles" element={<Article />} />}
        {Username && <Route path="/assessment" element={<Assessment />} />}
        {/* Mood contains Monthly Assessment*/}
        {Username && <Route path="/journals" />}
        {Username && <Route path="/logout" element={<LogOut />} />}
        {Username && <Route path="/favourites" />}
        {Username && <Route path="/emergency" element={<Emergency />} />}
        {Username && <Route path="/meditation" />}
        {Username && <Route path="/clinics" element={<GetMap />} />}
      </Routes>
    </>
  );
}

export default App;
