import api from "../api/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SpinnerDotted } from "spinners-react";
import {Button} from 'semantic-ui-react';




function CreateNew() {
    const [postData, setPostData]=useState(
        {
            
            brand: "",
            model: "",
            productionYear: "",
            power: '',
            image_url: "",
            extras: [],
            tags: [],
            location: "",
            availableFrom: "",
            availableTo: "",
            price: "",
            publishedDate: "",
          
            }

    );
    const [sending, setSending]=useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setSending(true);
        try {
          const response = await api.post('/tractors', postData);
          if(response.status===201)
          setPostData( {
            
            brand: "",
            model: "",
            productionYear: "",
            power: '',
            image_url: "",
            extras: [],
            tags: [],
            location: "",
            availableFrom: "",
            availableTo: "",
            price: "",
            publishedDate: "",
          
            });
            setSending(false);
            navigate('/');
            
        } catch (error) {
            setSending(false);
            console.error(error);
        }

    };

    const handleChange = (e) => {
        setPostData({...postData, [e.target.name]: e.target.value});
    };

    if(sending) 
    return (
        <div className="spinnerSending">
            <SpinnerDotted size={50} thickness={100} speed={50} color='#36ad47' />
            <h3>Dein Schlepper wird hochgeladen!</h3>

        </div>
        )

  return (
    <div>
        <h3>Füge deinen Schlepper hinzu!</h3>   
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Hersteller:</label>
                    <input type="text"
                            name='brand'    
                            onChange={handleChange}
                            value={postData.brand}    
                    />
                </div>
                <div>
                    <label>Model</label>
                    <input type="text" 
                           name='model'
                           onChange={handleChange}
                           value={postData.model} 
                    />
                </div>
                <div>
                    <label>Baujahr</label>
                    <input type="text" 
                           name='productionYear'
                           onChange={handleChange}
                           value={postData.productionYear} 
                    />
                </div>
                <div>
                    <label>Leistung</label>
                    <input type="text" 
                           name='power'
                           onChange={handleChange}
                           value={postData.power} 
                    />
                </div>
                <div>
                    <label>Bild</label>
                    <input type="text" 
                           name="image_url"
                           onChange={handleChange}
                           value={postData.image_url} 
                    />
                </div>
                <div>
                    <label>Ausstattung:</label>
                    <input type="text" 
                            placeholder="Wörter kommagetrennt"
                            name="extras"
                            onChange={handleChange}
                            value={postData.extras} 
                    />
                </div>
                <div>
                    <label>Tags:</label>
                    <input type="textarea" 
                    placeholder="Wörter kommagetrennt"
                    name="tags"
                    onChange={handleChange}
                    value={postData.tags} 
                    />

                </div>
                <div>
                    <label>Standort:</label>
                    <input type="text" 
                    name="location"
                    onChange={handleChange}
                    value={postData.location} 
                    />
                </div>
                <div>
                    <label>Verfügbar ab:</label>
                    <input type="date" 
                    name="availableFrom"
                    onChange={handleChange}
                    value={postData.availableFrom} 
                    />
                </div>
                <div>
                    <label>Verfügbar bis:</label>
                    <input type="date" 
                    name="availableTo"
                    onChange={handleChange}
                    value={postData.availableTo} 
                    />
                </div>
                <div>
                    <label>Preis pro Tag:</label>
                    <input type="text" 
                    name='price'
                    onChange={handleChange}
                    value={postData.price} 
                    />
                </div>
                {/* <div>
                    <label></label>
                    <input type="text" 
                    name="picture"
                    onChange={handleChange}
                    />
                </div> */}
                <Button className='newTraktor' floated = 'center' content='Füge dein Schlepper hinzu!' icon='handshake outline' labelPosition='right' basic color="olive" type='submit'/> 

            </form>
        </div>

    </div>
  )
}

export default CreateNew;