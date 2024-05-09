import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import {Collapse, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

// My components
import SearchBar from "./SearchBar.tsx";
import Select from "./Select.tsx";
import InProgress from "./books/InProgress.tsx";

function BookForm() {
    const [open, setOpen] = React.useState(false);

    const sort = ["Recently Added", "Title", "Author", "Rating"];
    const order = ["Descending", "Ascending"];
    const page = ["5", "10", "25"];
    const books = []
    return (
        <>
            <div className={"m-4"}>
                <a href={"#collapseForm"} onClick={() => setOpen(!open)}>Add A Book</a>
                <hr/>

                <Collapse in={open} className={"space"}>
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

                                    <Button variant={"outline-primary"} type={"submit"}>Add Book</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Collapse>

                <div className={"div-row"}>
                    <div className={"sixty"}>
                        <SearchBar label={"Search Books..."}/>
                    </div>
                    <div className={"thirty"}>
                        <SearchBar label={"Author..."} />
                    </div>
                    <Button variant={"outline-primary"} className={"five"}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Button>
                </div>

                <div className={"div-row"}>
                    <div className={"twenty-five"}>
                        <Select itemList={sort} defaultVal={"Sort by..."}/>
                    </div>
                    <div className={"twenty-five"}>
                        <Select itemList={order} defaultVal={"Order by..."} />
                    </div>
                    <div className={"twenty-five"}>
                        <Select itemList={page} defaultVal={"Number per page..."} />
                    </div>
                </div>

                <div className={"space div-row"}>
                    <div className={"div-thirty"}>
                        <InProgress books={books}></InProgress>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BookForm;