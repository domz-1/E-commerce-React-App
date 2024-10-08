import { Container } from "react-bootstrap";

import 'animate.css/animate.css'

export default function Home(){
    return(
<Container className="mt-3  my-home ">
    <div className="home-text">
            <span className="circle-top animate__animated animate__bounceInLeft"></span>
            <h1 className="animate__animated animate__fadeInDownBig">Welcome to My E-Commerce Site</h1>
            <span className="circle-btm animate__animated animate__bounceInRight"></span>
    </div>
</Container>
    )
}