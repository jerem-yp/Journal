import Card from 'react-bootstrap/Card';
import {ListGroup} from "react-bootstrap";

interface Book {
    title: string,
    date: Date
}
interface bookList {
    books: Book[]
}
function InProgress({books} : bookList) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>In Progress</Card.Title>
                <ListGroup>
                    {
                        books.map((book: Book) => (
                            <ListGroup.Item key={book.title + book.date}>
                                <div className={"div-row"}>
                                    <div className={"sixty"}>
                                        {book.title}
                                    </div>
                                    <div className={"thirty-right"}>
                                        {book.date.toDateString()}
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default InProgress;