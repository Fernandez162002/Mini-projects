import React from "react"

export default function Card(props) {
    
    return(
        <main>
            <img className="main--pic" src={`../images/${props.img}`}/>
                <div className="first--line">
                <img className="location--pic" src="./images/location.png"/>
                   <h3 className="country--name">{props.location}</h3>
                   </div>
                      <h2>{props.title} </h2>
                  <div className="date--text">
                    <p className="start--date">{props.startDate}</p>  
                    <span>-</span>
                    <p className="end-date">{props.endDate}</p>
                 </div>
          <p className="para--text">{props.description}</p>
          <hr/>
        </main>
    )
}