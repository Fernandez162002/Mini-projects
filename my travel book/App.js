import React from "react"
import ReactDOM from "react-dom"
import Head from "./components/Head"
import Card from "./components/Card"
import data from "./data"



export default function App() {
    
    const cardDisplay = data.map(items => {
        
        return(
            <Card
                key ={items.id}
               {...items}
            />
        )
    })
    
    return(
        <div>
            <Head/>
            <section className="card-list">
                 {cardDisplay}
            </section>
        </div>
    )
}