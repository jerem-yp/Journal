import {Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar as SolidStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as EmptyStar} from "@fortawesome/free-regular-svg-icons";

interface Book {
    title: string,
    author: string,
    rating: number,
    finishDate: Date
};

interface Books {
    books: Book[]
}

function BookList({books}: Books) {
    return (
        <>
            <Card className={"set-margin-bottom"}>
                <Card.Body>
                        <div className={"div-row"}>
                            <div className={"twenty-space"}>
                                <Card.Title>Title</Card.Title>
                            </div>
                            <div className={"twenty-space"}>
                                <Card.Title>Author</Card.Title>
                            </div>
                            <div className={"twenty-space"}>
                                <Card.Title>Rating</Card.Title>
                            </div>
                            <div className={"twenty-space"}>
                                <Card.Title>Finish Date</Card.Title>
                            </div>
                        </div>
                </Card.Body>
            </Card>

            {
                books.map((book: Book) => (
                    <Card className={"set-margin-bottom"} key={book.title + book.author}>
                        <Card.Body>
                            <div className={"div-row"}>
                                <div className={"twenty-space"}>
                                    <Card.Text>{book.title}</Card.Text>
                                </div>
                                <div className={"twenty-space"}>
                                    <Card.Text>{book.author}</Card.Text>
                                </div>
                                <div className={"twenty-space"}>
                                    <Card.Text>
                                        {book.rating >= 1 ? (<FontAwesomeIcon icon={SolidStar} className={"orange"}/>) : (<FontAwesomeIcon icon={EmptyStar} />)}
                                        {book.rating >= 2 ? (<FontAwesomeIcon icon={SolidStar} className={"orange"}/>) : (<FontAwesomeIcon icon={EmptyStar} />)}
                                        {book.rating >= 3 ? (<FontAwesomeIcon icon={SolidStar} className={"orange"}/>) : (<FontAwesomeIcon icon={EmptyStar} />)}
                                        {book.rating >= 4 ? (<FontAwesomeIcon icon={SolidStar} className={"orange"}/>) : (<FontAwesomeIcon icon={EmptyStar} />)}
                                        {book.rating === 5 ? (<FontAwesomeIcon icon={SolidStar} className={"orange"}/>) : (<FontAwesomeIcon icon={EmptyStar} />)}
                                    </Card.Text>
                                </div>
                                <div className={"twenty-space"}>
                                    <Card.Text>{book.finishDate.toDateString()}</Card.Text>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                ))
            }
        </>
    )
}

export default BookList;