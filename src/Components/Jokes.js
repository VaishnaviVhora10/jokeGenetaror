import React from 'react';
import {useState,useEffect} from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'

function Jokes() {
const [data,setData] = useState([]);
console.log(data)
const url = "https://icanhazdadjoke.com/slack";

const getData = async() =>{
    try{
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    setData(json.attachments[0].fallback)
    }
    catch(error){
    console.log(error);
    }
}

const handleJoke = () =>{
 getData()
}

  return (
    <Card className="mx-auto mt-5" style={{width:"50%", height:"200px", background:"yellow"}}>
      {data.length > 0 ? <p>{data}</p> : <p>No Data Available</p>}
      <Button variant="primary" onClick={()=>handleJoke()}>Next Joke</Button>
    </Card>
  )
}

export default Jokes