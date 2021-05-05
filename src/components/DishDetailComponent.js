import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Moment from 'moment';

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>

    );
}

function RenderComments({ comments }) {

    Moment.locale('en');

    const dishComments = comments.map((comment) => {
        return (
            <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {Moment(comment.date).format('MMM D, YYYY')}</p>
            </div>
        );
    });

    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardBody>
                    <CardTitle><h2>Comments</h2></CardTitle>
                    <CardText>{dishComments}</CardText>
                </CardBody>
            </Card>
        </div>

    );
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}


export default DishDetail;