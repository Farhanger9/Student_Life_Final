import {useState, useEffect} from "react";
import {Card,ListGroup,Table,Pagination} from 'react-bootstrap'
import {  useParams } from "react-router-dom";

function UserProfile(){
    
    const [profile,setProfile] = useState([])
    const [MoodHistory,setMoodHistory] = useState([])
    const [page,setPage] = useState(1)
    const MAXENTRIES = 20;
    let {username} = useParams()
    const profileURL = `https://murmuring-garden-88441.herokuapp.com/api/profiles/${username}`
    const MoodHistoryURL = `https://murmuring-garden-88441.herokuapp.com/api/moods/${username}`
    
    function PreviousPage(){
      if(page > 1)
  setPage(Page => Page - 1);
  
  }  
  
  function NextPage(){
    if (page > 0 && ((page) * (MAXENTRIES)) < MoodHistory.length){
  setPage(Page => Page + 1);
  
    }
  } 
  
       const FetchProfile = async() =>{
         try{
         const response = await fetch(profileURL);
         const json = await response.json()
        setProfile(json)
       }catch (error) {
        console.log(error);
       }
      }

      const FetchMoodHistory = async()=>{
        try{
          const response = await fetch(MoodHistoryURL);
          const json = await response.json()
         setMoodHistory(json.reverse())
        }catch (error) {
         console.log(error);
        }
      }  

      
    useEffect(()=>{
    
      
      FetchProfile()
      FetchMoodHistory()
      
      
    },[])
        
return(


    <>

<Card style={{marginTop: 50, marginBottom: 50}} >
  <Card.Body>
    <Card.Title>User's Info</Card.Title>
    <ListGroup variant="flush">
    <ListGroup.Item>Username: {profile.username} <br></br></ListGroup.Item>
    <ListGroup.Item>Email: {profile.email} <br></br></ListGroup.Item>
    <ListGroup.Item>Name: {profile.name}</ListGroup.Item>
  </ListGroup>
  <Card.Title>Mood History</Card.Title>
  <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Date/Time</th>
      <th>Mood</th>
    </tr>
  </thead>
  <tbody>
  {
    
      MoodHistory.slice((page-1)*MAXENTRIES,page*MAXENTRIES).map((moodEntry)=>{
       return <tr key={moodEntry._id}>
      <td><b>{moodEntry.date_time}</b></td>
      <td>{moodEntry.mood} </td>
      
    </tr>
      })
    }
  </tbody>
</Table>
  </Card.Body>
</Card>
    
    
<Pagination>
                        <Pagination.Prev onClick={ PreviousPage} />
                        <Pagination.Item>{page}</Pagination.Item>
                        <Pagination.Next onClick={NextPage} />
            </Pagination>  
    
 
    
    
    </>
)




}

export default UserProfile;