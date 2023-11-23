import api from "../api/api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
import { Button } from "semantic-ui-react";
import { format } from "date-fns";

function EditPost() {
  const { id } = useParams();
  const [sending, setSending] = useState(false);
  const [postData, setPostData] = useState({
    id: id,
    brand: "",
    model: "",
    productionYear: "",
    power: "",
    image_url: "",
    extras: [],
    tags: [],
    location: "",
    availableFrom: "",
    availableTo: "",
    price: "",
    publishedDate: "",
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get("/tractors/" + id);
        setPostData(response.data);
        setSending(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await api.put("/tractors/" + id, postData);

      setSending(false);
      navigate("/tractors");
    } catch (error) {
      setSending(false);
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  if (sending)
    return (
      <div className="spinnerSending">
        <SpinnerDotted size={50} thickness={100} speed={50} color="#36ad47" />
        <h3>Aktualisiere Änderungen...</h3>
      </div>
    );

  return (
    <div>
      <div className="bg-[url('./assets/machine-shed.webp')] bg-cover bg-center min-h-[80vh] grayscale contrast-50 relative">
        {" "}
      </div>
      <div className="absolute top-[20vh] start-[15vh] md:top-[20vh] md:start-[50vh] lg:top-[20vh] lg:start-[73vh] border-[1px] border-gray-300 w-2/3 md:w-1/3 md:h-2/3 backdrop-blur-md flex flex-col justify-center text-white rounded-md">
        <h3 className="text-center">Was möchtest du ändern?</h3>
        <div className="text-center text-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="md:mr-[20px] lg:mr-[40px]">Hersteller:</label>
              <input
                type="text"
                name="brand"
                onChange={handleChange}
                value={postData.brand}
                className="bg-transparent border-[1px] mx-3 p-1"
              />
            </div>
            <div className="mb-3">
              <label className="md:mr-[35px] lg:mr-[70px]">Model:</label>
              <input
                type="text"
                name="model"
                onChange={handleChange}
                value={postData.model}
                className="bg-transparent border-[1px] mx-3 p-1"
              />
            </div>
            <div className="mb-3">
              <label className="md:mr-[30px] lg:mr-[60px]">Baujahr:</label>
              <input
                type="text"
                name="productionYear"
                onChange={handleChange}
                value={postData.productionYear}
                className="bg-transparent border-[1px] mx-3 p-1"
              />
            </div>
            <div className="mb-3">
              <label className="md:mr-[30px] lg:mr-[60px]">Leistung:</label>
              <input
                type="text"
                name="power"
                onChange={handleChange}
                value={postData.power}
                className="bg-transparent border-[1px] mx-3 p-1"
              />
            </div>
            <div className="mb-3">
              <label className="md:mr-[30px] lg:mr-[60px]">Bild URL:</label>
              <input
                type="text"
                name="image_url"
                onChange={handleChange}
                value={postData.image_url}
                className="bg-transparent border-[1px] mx-3 p-1"
              />
            </div>
            <div className="mb-3">
              <label className="md:mr-[20px] lg:mr-[40px]">Ausstattung:</label>
              <input
                type="text"
                placeholder="Wörter kommagetrennt"
                name="extras"
                onChange={handleChange}
                value={postData.extras}
                className="bg-transparent border-[1px] mx-3 p-1"
              />
            </div>
            <div className="mb-3">
              <label className="md:mr-[47px] lg:mr-[95px]">Tags:</label>
              <input
                type="text"
                placeholder="Wörter kommagetrennt"
                name="tags"
                onChange={handleChange}
                value={postData.tags}
                className="bg-transparent border-[1px] mx-3 p-1"
              />
            </div>
            <div className="mb-3">
              <label className="md:mr-[31px] lg:mr-[63px]">Standort:</label>
              <input
                type="text"
                name="location"
                onChange={handleChange}
                value={postData.location}
                className="bg-transparent border-[1px] mx-3 p-1"
              />
            </div>
            <div className="mb-3">
              <label>Verfügbar ab:</label>
              <input
                type="date"
                name="availableFrom"
                onChange={handleChange}
                value={
                  !postData.availableFrom
                    ? ""
                    : format(new Date(postData.availableFrom), "yyyy-MM-dd")
                }
                className="bg-transparent border-[1px] mx-3 p-1"
              />
            </div>
            <div className="mb-3">
              <label>Verfügbar bis:</label>
              <input
                type="date"
                name="availableTo"
                onChange={handleChange}
                value={
                  !postData.availableTo
                    ? ""
                    : format(new Date(postData.availableTo), "yyyy-MM-dd")
                }
                className="bg-transparent border-[1px] mx-3 p-1"
              />
            </div>
            <div>
              <label className="md:mr-[8px] lg:mr-[16px]">Preis (€) pro Tag:</label>
              <input
                type="text"
                name="price"
                onChange={handleChange}
                value={postData.price}
                className="bg-transparent border-[1px] mx-3 p-1 mb-10"
              />
            </div>
            {/* <div>
                    <label></label>
                    <input type="text" 
                    name="picture"
                    onChange={handleChange}
                    />
                </div> */}
            <Button
              className="hover:scale-125"
              floated="center"
              content="Änderungen abschicken"
              icon="handshake"
              labelPosition="right"
              color="olive"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
