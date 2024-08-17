import React, { useEffect, useState } from "react";
import CardItems from "../CardItems/CardItems";

const Card = () => {
  const [data,setData] = useState([]);
  const [loading,setloading] = useState(true);
  const [error,setError] = useState(null);
  useEffect(() =>{
    const fetchData = async () =>{
     try{
       const response = await fetch('data.json')
       console.log(data);
       if(!response.ok){
        throw new Error('response was not ok')
       };
       const result = await response.json();
       setData(result);
     }catch(error){
       setError(error);
     }finally{
       setloading(false);
     }
    };
    fetchData()
  },[]);
  if(loading){
    return loading;
  }
  if(error){
    return error;
  }
  return (
    <div>
      {
        data?.map(item => (
          <div key={item.id}>
           <CardItems item={item}></CardItems>
          </div>
        ))
      }
    </div>
  );
};

export default Card;
