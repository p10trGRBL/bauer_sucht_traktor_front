import api from "../api/api";
import { useState, useEffect } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { SpinnerCircularFixed } from "spinners-react";
//import TractorEntry from "../components/TractorEntry";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/tractors");
        setPosts(response.data);
        setLoading(false);
      } catch (error) {}
    };
    fetchPosts();
  }, []);
  if (loading) {
    return (
      <SpinnerCircularFixed
        size={50}
        thickness={100}
        speed={100}
        color="#36ad47"
        secondaryColor="rgba(0, 0, 0, 0.44)"
        className=" m-auto my-10"
      />
    );
  }

  return (
    <div className="bg-[url('./assets/bb_harvest.jpeg')] bg-cover bg-no-repeat pt-5 pb-5 bg-fixed">
      <div className="">
        <h1 className="text-center mb-5 text-yellow-500">Verfügbare Fahrzeuge:</h1>
        <div className="w-1/3 m-auto">
          <Card.Group itemsPerRow={1} className="backdrop-blur-xl">
            {!posts.length
              ? "...Die Schlepper werden verladen!"
              : posts.map((post) => (
                  <Card
                    href={`/tractors/${post._id}`}
                    key={`${post._id}`}
                    fluid
                    color="yellow"
                    className=""
                  >
                    <Card.Content>
                      <Image
                        floated="right"
                        size="small"
                        src={`${post.image_url}`}
                      />
                      <Card.Header>
                        {post.brand} {post.model}
                      </Card.Header>
                      <Card.Meta>{post.power} PS </Card.Meta>
                      <Card.Meta>Baujahr: {post.productionYear} </Card.Meta>

                      <Icon
                        floated="right"
                        name="long arrow alternate right"
                        color="yellow"
                        size="large"
                      />
                    </Card.Content>
                  </Card>
                ))}
          </Card.Group>
        </div>
      </div>
    </div>
  );
}

export default AllPosts;
