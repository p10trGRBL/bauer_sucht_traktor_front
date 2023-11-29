import api from "../api/api";
import { useState, useEffect } from "react";
import { Card, Image, Label, Button, Icon } from "semantic-ui-react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { nanoid } from "nanoid";
import { SpinnerCircularFixed } from "spinners-react";

function SinglePost() {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  let extrasArray = [];
  let tagsArray = [];

  useEffect(() => {
    api
      .get(`/tractors/${id}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tractors/${id}`);

      navigate("/tractors");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

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
  console.log(post.extras);
  console.log(post.tags);
  extrasArray = post.extras[0].split(",");
  tagsArray = post.tags[0].split(",");

  return (
    <div className="relative">
      <div className="bg-[url('/machine-shed.webp')] bg-cover bg-center min-h-[80vh] sepia contrast-50"> </div>

     <div className="absolute xxl:top-[10vh] xl:top-[5vh] xl:left-[40vw] lg:top-[4vh] lg:left-[35vw] md:top-[2vh] md:left-[30vw] top-[1vh] left-[20vw]">
        <Card className="">
          <Image src={`${post.image_url}`} wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              {post.brand} {post.model}
            </Card.Header>
            <Card.Meta>{post.power} PS </Card.Meta>
            <Card.Meta>Baujahr: {post.productionYear} </Card.Meta>
            <Card.Description>
              Verfügbarkeit:
              <br />
              ab: {format(new Date(post.availableFrom), "dd-MM-yyyy")} bis:{" "}
              {format(new Date(post.availableTo), "dd-MM-yyyy")}
              <br />
              <Label size={"big"} color="green">
                {" "}
                Preis: {post.price} €/Tag{" "}
              </Label>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Card.Meta>Besitzer: {post.owner.username} </Card.Meta>
            <Label.Group color="olive">
              {extrasArray.map((item) => {
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
              {tagsArray.map((item) => {
                const id = nanoid();

                return (
                  <>
                    <Label key={id}>{item}</Label>
                  </>
                );
              })}
            </Label.Group>
          </Card.Content>
          <Card.Content extra >
            <div className="ui buttons">
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
            </div>
          </Card.Content>
        </Card>
      </div>
      </div>
     
  );
}

export default SinglePost;
