import { Card , Button } from "react-bootstrap"
// import { addToCard } from "../rtk/reducers/productSlice"

export default function PCard(props){

    return(
        <>
        <div className="card-con animate__animated animate__fadeIn delay-1s">
                        <Card style={{ height: '35rem' }} className="card-body">
                            <div className="card-img-con">
                    <Card.Img variant="top" src={props.img} />
                            </div>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                        <Card.Text>
                            {props.price} $
                        </Card.Text>
                        <Button variant="danger" onClick={props.action}>Add To Card</Button>
                    </Card.Body>
                    </Card>
        </div>
        </>
    )
}