import React from 'react'
import './MovieDetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
const MovieDetailsBody = () => {
  const [Data, setData] = useState();

  const [name,setName]=useState();
  const [contact,setContact]=useState();
  const [total,setTotal]=useState();
  let { id } = useParams();

  useEffect(() => {

    const func = async () => {

      fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          for (let i = 0; i < data.length; i++) {
            // console.log(data[i].show.id);
            if (parseInt(id) === data[i].show.id) {
              setData(data[i]);
              // console.log("wew");
              break;
            }
          }

        });

    }

    func();




  }, [])

  const ticketBook=()=>{
    // e.preventDefault();
    document.getElementById("ticket").style.display="flex";
  }
  const ticketBook1=()=>{
    document.getElementById("ticket").style.display="none";
  }

  const submitData=()=>{

      if(name==="" || contact==="" || total==="")
      {
        alert("Please fill all the details");
      }
      else{
        alert("Congratulations.... your ticket has been booked");
        document.getElementById("ticket").style.display="none";
        localStorage.setItem("name",name);
        localStorage.setItem("contact",contact);
        localStorage.setItem("totalTicket",total);
      }


  }
  
  return (
    <div>
    {Data ?
        <>
            <div className='ticket_popup' id="ticket">
        <div className='ticket_wrapper'>
          <div><b>Name: </b>{Data.show.name}</div>
              {/* <div><b>Run Time: </b>{Data.show.genres.averageRuntime}</div> */}
              <div><b>Language: </b>{Data.show.language}</div>
              <div><b>Genre: </b>{Data.show.genres[0]}</div>
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name" onChange={e=>setName(e.target.value)}/>
          </div>
          <div class="form-group">
            <label for="contact">Contact No.</label>
            <input type="number" class="form-control" id="contact" placeholder="Contact No" onChange={e=>setContact(e.target.value)}/>
          </div>
          <div class="form-group">
            <label for="contact">No. of Tickets</label>
            <input type="number" class="form-control" id="contact" placeholder="Total Tickets" min={1} max={10} onChange={e=>setTotal(e.target.value)} />
          </div>


          <button type="submit" class="btn btn-primary" onClick={()=>submitData()}>Confirm</button>
          <button type="button" class="btn btn-danger" onClick={()=>ticketBook1()}>Cancel</button>
        </div>
      </div>

    <body class='body'>
        <div class="container">
            <div class="row">

        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
                <div class="col-md-5">
                    <div class="project-info-box mt-0">
                        <h5>ABOUT THE MOVIE</h5>
                        <p class="mb-0" Style={{overflowY:'auto'}}>{Data.show.summary + ""}</p>
                    </div>

                    <div class="project-info-box">
                        <p><b>Name:</b> {Data.show.name}</p>
                        <p><b>Genre:</b> {Data.show.genres[0]}</p>
                        <p><b>Previous Episode:</b> <a href={Data.show._links.previousepisode.href}>Here</a></p>
                    </div>

                    <div class="project-info-box mt-0 mb-0">
                        <p class="mb-0">
                        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={()=>ticketBook()}>Book Now!</button>
                        </p>
                    </div>
                </div>

                <div class="col-md-7">
                    <img src={Data.show.image.medium} alt="movie" class="img rounded"/>
                </div>
            </div>
        </div>
    </body>
    </>
        :

        <div>Error! no data found</div>

      }
    </div>
  )
}

export default MovieDetailsBody