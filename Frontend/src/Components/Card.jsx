import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImage from '../assets/react.png'
import axios from "axios";
import GlobalAPI from '../Services/GlobalAPI';
import { useEffect, useState } from 'react';
import GetID from './GetId';


function Cards() {
  const[runsList, setRunsList] = useState([]);
  useEffect(() => {
    getAllRuns();
  },[])
  const getAllRuns = async () => {
    const result = await axios.get("http://localhost:8080/api/runs")
    setRunsList(result.data)
  }



  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={myImage} />
      <Card.Body>
        <GetID/>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


export default Cards;