import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Moment from 'moment';

class DishDetail extends Component {

    constructor(props) {
        super(props)

        // this.state = {
        //     selectedDish: null
        // }
    }

    renderDish(dish) {

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

    renderComments(dish){
        
        Moment.locale('en');

        const dishComments = dish.comments.map((comment) => {
            return(
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {Moment(comment.date).format('MMM D, YYYY')}</p>
                </div>
            );
        });

        return(
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

    render() {
        if (this.props.currentDish != null){
            return ( 
                <div className="row">
                    {this.renderDish(this.props.currentDish)}
                    {this.renderComments(this.props.currentDish)}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;