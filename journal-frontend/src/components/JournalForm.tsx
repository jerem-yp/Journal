import {Button, Card, Form} from "react-bootstrap";
import PromptCard from "./PromptCard.tsx";
import {useState} from 'react'

function retrieveJournals() {
    // Holder function until this backend piece is built
    let test_journals = ['Journal 1', 'Journal 2']
    return test_journals;
}

function retrieveQuestions() {
    let q1 = {'question': 'This is question 1?', 'tags': ['tag 1', 'tag 2'], 'title': 'Title1'}
    let q2 = {'question': 'This is question 2?', 'tags': ['tag 2', 'tag 3'], 'title': 'Title2'}
    let test_questions = [q1, q2]
    return test_questions;
}



function JournalForm() {

    const [prompt, setPrompt] = useState('')
    const promptSelection = (event) => {
        setPrompt(event.target.value)
    }
    const promptClick = (event) => {
        const question = event.currentTarget.dataset.myValue
        setPrompt(question);
    }

    return (
        <>
            <div id={"collapseForm"}>
                <Card>
                    <Card.Body>
                        <Form>
                            <Form.Group className={"mb-3"} controlId={"journalName"}>
                                <div className={"div-row"}>
                                    <Form.Select>
                                        {retrieveJournals().map((option, index) => (
                                            <option key={index} value={option}>{option}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </div>
                            </Form.Group>

                            <Form.Group className={"mb-3"} controlId={"journalTitle"}>
                                {/*<Form.Label>Title</Form.Label>*/}
                                <div className={"div-row"}>
                                    <div className={"sixty"}>
                                        <Form.Control type={"text"} placeholder={"Title"}/>
                                    </div>
                                    <div className={"full-flex"}>
                                        <Form.Control type={"date"} placeholder={"Date"}/>
                                    </div>
                                </div>
                            </Form.Group>

                            <Form.Group className={"mb-3"} controlId={"journalPrompt"}>
                                {/*<Form.Label></Form.Label>*/}
                                <Form.Control type={"text"} placeholder={"Prompt"} value={prompt} onChange={promptSelection}/>
                            </Form.Group>

                            <div className={"d-flex flex-nowrap"}>
                                {retrieveQuestions().map((question) => (
                                    // <div onClick={promptClick}>
                                    <div onClick={promptClick} data-my-value={question.question}>
                                        <PromptCard question={question}/>
                                    </div>
                                ))}
                            </div>

                            <hr />

                            <Form.Group className={"mb-4"} controlId={"bookSummary"}>
                                {/*NEEDS TO BE OWN COMPONENT <Button className={margins} variant={"secondary"}>Fetch</Button>*/}
                                <Form.Control className={"half-screen-height"} as={"textarea"} type={"text"} placeholder={""}/>
                            </Form.Group>

                            <div className={"div-row"}>
                                <Button className={"flex-full"} variant={"outline-success"} type={"submit"}>Done!</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default JournalForm;