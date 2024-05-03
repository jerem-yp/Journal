import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Collapse, Card} from 'react-bootstrap';
import React from 'react';

function BookForm() {
    const [open, setOpen] = React.useState(false);
    const margins = {
        "margin-left": "10px",
        "margin-bottom": "10px"
    };
    return (
        <>
            <div className={"m-4"}>
                <a href={"#collapseForm"} onClick={() => setOpen(!open)}>Toggle Form</a>
                <hr/>

                <Collapse in={open}>
                    <div id={"collapseForm"}>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group className={"mb-3"} controlId={"bookTitle"}>
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type={"text"} placeholder={"Title"} />
                                    </Form.Group>

                                    <Form.Group className={"mb-3"} controlId={"bookAuthor"}>
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control type={"text"} placeholder={"Author"} />
                                    </Form.Group>

                                    <Form.Group className={"mb-3"} controlId={"bookRtg"}>
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control type={"number"} placeholder={"Rating"} />
                                    </Form.Group>

                                    <Form.Group className={"mb-3"} controlId={"bookSummary"}>
                                        <Form.Label>Summary</Form.Label>
                                        {/*NEEDS TO BE OWN COMPONENT <Button className={margins} variant={"secondary"}>Fetch</Button>*/}
                                        <Form.Control as={"textarea"} type={"text"} placeholder={"Summary"} />
                                    </Form.Group>

                                    <Button variant={"primary"} type={"submit"}>Submit</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Collapse>

            </div>
        </>
    )
}

export default BookForm;