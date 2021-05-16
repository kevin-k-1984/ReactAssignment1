import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Label, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        console.log(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();

        // alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
        // event.preventDefault();
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group m-1">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" defaultValue="3" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option selected>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group m-1">
                                <Label htmlFor="yourname">Your Name</Label>
                                <Control.text model=".yourname" id="yourname" name="yourname" placeholder="Your Name" className="form-control"
                                    validators={{
                                        required, minLength: minLength(2), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors className="text-danger" model=".yourname" show="touched"
                                    messages={{
                                        required: ' Required ',
                                        maxLength: ' Must be 15 charactors or less',
                                        minLength: ' Must be greater than 2 characters'
                                    }}
                                />
                            </Row>
                            <Row className="m-1">
                                <Label htmlFor="message">Comment</Label>
                                <Control.textarea model=".message" id="message" name="message" rows="10" className="form-control" />
                            </Row>
                            <Row className="m-1">
                                <Button type="submit" color="primary">Submit</Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>

        );
    }
}

export default CommentForm;