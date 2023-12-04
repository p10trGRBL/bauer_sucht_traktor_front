import api from "../api/api";
import { useState, useEffect } from "react";
import { Card, Image, Label, Button, Icon } from "semantic-ui-react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { format } from "date-fns";
import { nanoid } from "nanoid";
import { SpinnerCircularFixed } from "spinners-react";
import {toast} from "react-toastify";
import { useAuth } from "../context/AuthProvider.jsx";

function SinglePost() {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const {userData, isLoggedIn } = useAuth();
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
      toast.success("Fahrzeug storniert");
      navigate("/tractors");
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error(error.response.data.message || "Sorry - etwas ist schief gelaufen :(")
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
 
  extrasArray = post.extras[0].split(",");
  tagsArray = post.tags[0].split(",");
  //console.log(userData._id);
  //console.log(post.owner._id)
  return (
    <div className="relative">
      <div className="bg-[url('/machine-shed.webp')] bg-cover bg-center min-h-[80vh] sepia contrast-50"> </div>

     <div className="absolute xxl:top-[10vh] xl:top-[5vh] xl:left-[40vw] lg:top-[4vh] lg:left-[35vw] md:top-[2vh] md:left-[30vw] sm:top-[4vh] sm:left-[20vw] top-[5vh] left-[10vw]">
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
            {userData._id===post.owner._id?(
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
            ):(
              <div className="ui buttons">
             
                <Button basic color="grey"
                onClick={() => {
                  toast.info("Nicht dein Fahrzeug! Melde dich an oder registriere dich, um Fahrzeuge hinzufügen zu können.");
                }}>
                  <Icon name="edit" />
                </Button>
             
              <Button
                basic color="grey"
                onClick={() => {
                  toast.info("Nicht dein Fahrzeug! Melde dich an oder registriere dich, um Fahrzeuge hinzufügen zu können.");
                }}
                
              >
                <Icon name="trash alternate" />
              </Button>
            </div>
            )}
            
          </Card.Content>
        </Card>
      </div>
      </div>
     
  );
}

export default SinglePost;
