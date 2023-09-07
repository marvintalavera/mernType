import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

interface DestinationProps{
    destination:any;
}

function Destinations(props:DestinationProps) {

    const [destinations, setDestinations] = useState([])
    const { name } = useParams()

    //GET THE DESTINATIONS FROM THE DB WHERE ALL ARE FORM THE SAME CONTINENT
    const getDestinations = async () => {
        try {
            const findDestinations = await fetch(`http://localhost:4000/continents/${name}`)
            const jsonData = await findDestinations.json()
            setDestinations(jsonData)
        } catch (Error) {
            console.log(Error)
        }
    }

    useEffect(() => {
        getDestinations()
    }, [])

    //TAKES THE DESTINATIONS FROM DB ABOVE AND MAKES A LIST OF LINKS 
    const getDestinationList = destinations.map((destination, i) => {
        return (
            <div key={i}>
                <li><i className="fa-solid fa-plane"></i>
                    <Link to={`/destination/${props.destination.name}`}>
                        {props.destination.name}
                    </Link>
                </li>
            </div>)
    })

    return (

        <div >
            <ul>
                {getDestinationList}
            </ul>
            <Link to={`/continents`}> Back to Continents</Link>
        </div>
    )
}


export default Destinations