import api from "../api/api";
import { useState, useEffect } from "react";
import { Card, Image, Label, Button, Icon } from "semantic-ui-react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { nanoid } from "nanoid";

function SinglePost() {
  const [post, setPost] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/tractors/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleDelete = async (id) => {
    await api.delete(`/tractors/${id}`);

    navigate("/tractors");
  };

  return (
   <div>
      <div className="bg-[url('./assets/machine-shed.webp')] bg-cover bg-center min-h-[80vh] sepia contrast-50 relative"></div>
      

      <div className="absolute md:top-[28vh] md:start-[84vh] top-[20vh] start-[15vh] bg-transparent ">
        {!post ? (
          <h3>...Der Schlepper kommt gleich!</h3>
        ) : (
          <Card>
            <Image src={`${post.image_url}`} wrapped ui={false}/>
            <Card.Content>
              <Card.Header>
                {post.brand} {post.model}
              </Card.Header>
              <Card.Meta>{post.power} PS </Card.Meta>
              <Card.Meta>Baujahr: {post.productionYear} </Card.Meta>
              <Card.Description>
                Verfügbarkeit:
                <br />
                ab: {format(
                  new Date(post.availableFrom),
                  "dd-MM-yyyy"
                )} bis: {format(new Date(post.availableTo), "dd-MM-yyyy")}
                <br />
                <Label size={"big"} color="green">
                  {" "}
                  Preis: {post.price} €/Tag{" "}
                </Label>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group color="olive">
                {post.extras.map((item) => {
                  const id = nanoid();
                  return (
                    <>
                      <Label key={id}>{item}</Label>
                    </>
                  );
                })}
              </Label.Group>
              <br />
              <Label.Group tag color="yellow">
                {post.tags.map((item) => {
                  const id = nanoid();

                  return (
                    <>
                      <Label key={id}>{item}</Label>
                    </>
                  );
                })}
              </Label.Group>
            </Card.Content>
            <Card.Content extra>
             
              <Button.Group>
                <Link to={`/update/${id}`}>
                  <Button basic color="red">
                    <Icon name="edit" />
                  </Button>
                </Link>
                <Button
                  basic
                  color="red"
                  onClick={() => {
                    handleDelete(post._id);
                  }}
                >
                  <Icon name="trash alternate" />
                </Button>
              </Button.Group>
          
            </Card.Content>
          </Card>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
