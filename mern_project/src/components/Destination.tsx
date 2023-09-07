import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

interface DestinationProps{
    destination:any;
}

//GETS A SINGLE DESTINATION FROM THE DB
function Destination(props:DestinationProps) {
    const navigate = useNavigate()
    const [destination, setDestination] = useState([])
    const { name } = useParams() //uses the continent param
    const getDestination = async () => {
        try {
            const findDestination = await fetch(`http://localhost:4000/destinations/${name}`)
            const jsonData = await findDestination.json()
            setDestination(jsonData)
        } catch (Error) {
            console.log(Error)
        }
    }

    //DELETE DESTINATION FUNCTION
    const deleteDestination = async () => {
        try {
            await fetch(`http://localhost:4000/destinations/${name}`,
                { method: "DELETE" })
            navigate('/continents') //redirects back to parent destination list
        } catch (Error) {
            console.log(Error)
        }
    }

    useEffect(() => {
        getDestination()
    }, [])

    return (
        < >
            <h1>{props.destination.name} </h1>
            <hr></hr>
            <Row className="text-center">
                <Col>
                    <Card style={{ width: '40rem' }}>
                        <Card.Body>
                            <Card.Title>{props.destination.country_name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{props.destination.continent_name}</Card.Subtitle>
                            <Card.Text>{props.destination.description}</Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">-{props.destination.author} visited on {props.destination.date_visited}</Card.Subtitle>
                            <Link to={`/continents/${props.destination.continent_name}`}>Back to {props.destination.continent_name} destinations</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex flex-row" >
                    <Image src={props.destination.picture} rounded className="img-fluid" />
                </Col>
            </Row>
            <Col className="d-flex flex-row">
                <Link to={`/edit/${props.destination.name}`}>
                    <Button variant="success" size="lg"><i className="fa-solid fa-pen-to-square"></i>  EDIT</Button>
                </Link>
                <Button variant="danger" size="sm" onClick={deleteDestination}><i className="fa-regular fa-trash-can"></i>  DELETE</Button>
            </Col>
        </>
    )
}


export default Destination