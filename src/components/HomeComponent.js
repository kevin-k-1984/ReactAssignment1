import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({ item }) {

    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    return (
        <div className="contanier">
            <div className="row justify-content-center">
                <div className="col-sm-3 col-md-3 m-3">
                    <RenderCard item={props.dish} />
                </div>
                <div className="col-sm-3 col-md-3 m-3">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-sm-3 col-md-3 m-3">
                    <RenderCard item={props.leader} />
                </div>
            </div >
        </div >
    );
}

export default Home;