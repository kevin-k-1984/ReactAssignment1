import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import CommentForm from './CommentForm';
import { Link } from 'react-router-dom';
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

class DishDetail extends Component {

    render() {

        Moment.locale('en');

        const dishComments = this.props.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {Moment(comment.date).format('MMM D, YYYY')}</p>
                </div>
            );
        });

        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row m-2">
                        <RenderDish dish={this.props.dish} />
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardBody>
                                    <CardTitle><h2>Comments</h2></CardTitle>
                                    <CardText>{dishComments}</CardText>
                                    <CommentForm />
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }

}


export default DishDetail;