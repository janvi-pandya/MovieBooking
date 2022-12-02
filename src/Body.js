import React from 'react'
import {useEffect,useState} from "react"
import {useNavigate} from 'react-router-dom'
import './App.css'
export const Body=()=> {
    const navigate=useNavigate();

    const [Data,SetData]=useState();
  
    useEffect(() => {
    
      const func=async()=>{
    
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(response => response.json())
        .then(data =>{
          SetData(data);
        });
    
      }
    
      func();
     
    }, [])


    const navigateButton=(e)=>{
        navigate("/MovieDetails/"+e);
  
      }
  return (
    <div className='outer'>
     {Data && Data.map((e)=>{
        return(
     <body class='body'>
         <div class="card" Style="width: 18rem;">
           <img src={e.show.image.medium} class="card-img-top" alt="..."/>
           <div class="card-body">
               <h5 class="card-title">{e.show.name}</h5>
               <p class="card-text">
               Genre: {e.show.genres[0]}, {e.show.genres[1]} <br></br>
               Language: {e.show.language} </p>
               <button class="btn btn-primary" onClick={()=>{navigateButton(e.show.id)}}>Know More</button>
           </div>
         </div>
     </body>
        )})
     }
   </div>
  )
}

export default Body