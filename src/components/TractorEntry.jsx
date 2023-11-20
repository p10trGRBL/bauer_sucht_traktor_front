import { Card, Image } from 'semantic-ui-react'

const TractorEntry = (posts) => {
   const {_id, brand, model, power, productionYear} = posts;

  <Card  href={`/tractors/${_id}`} >
    <Card.Content>
         <Image floated='right' size='mini' src='https://images.ctfassets.net/i6i4u8iowebg/t7kmUHJsHWTbBbsAYbcBF/47b3eda7732fb09775a27fc4297ff87b/Fendt_275S.jpeg'/>
         <Card.Header>{brand}</Card.Header>
        <Card.Meta>{power} PS  </Card.Meta>
        <Card.Meta>Baujahr: {productionYear}  </Card.Meta>
    </Card.Content>
</Card>
};

//export default TractorEntry;