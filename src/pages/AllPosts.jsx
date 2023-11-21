
import api from "../api/api";
import { useState, useEffect } from "react";
import { Card, Image, Icon } from 'semantic-ui-react';
import {SpinnerCircularFixed} from 'spinners-react';
//import TractorEntry from "../components/TractorEntry";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading]=useState(true);
  
  useEffect(()=> {
    const fetchPosts = async () => {
        try { 
            const response = await api.get('/tractors');
            setPosts(response.data); 
            setLoading(false);
        } catch (error) {
            
        }
    }
    fetchPosts();
   
  }, []);
  if (loading) {
    return (
      <SpinnerCircularFixed
      size={50}
      thickness={100}
      speed={100}
      color='#36ad47'
      secondaryColor='rgba(0, 0, 0, 0.44)'

    />
    )
  }

  return (

    <div className="m-6">
      
        <h1 className="text-center">Verfügbare Fahrzeuge:</h1>
        <div className="postList">
        <Card.Group itemsPerRow={1}>
        { !posts.length? ('...Die Schlepper werden verladen!') : 
        (
          posts.map((post) => (
            <Card  href={`/tractors/${post._id}`} key={`${post._id}`} fluid color='yellow'>
                <Card.Content>
                    <Image floated='right' size='tiny' src={`${post.image_url}`} />
                    <Card.Header >{post.brand} {post.model}</Card.Header>
                    <Card.Meta >{post.power} PS  </Card.Meta>
                    <Card.Meta>Baujahr: {post.productionYear}  </Card.Meta>
                    
                    <Icon floated = 'right' name='long arrow alternate right'/>
                </Card.Content>
            </Card>
            
          ))
        )
        }
        </Card.Group>
        </div>
      
    </div>
  )
}

export default AllPosts;

 
