import BookForm from "../components/BookForm.tsx";
import SearchBar from "../components/SearchBar.tsx";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import Select from "../components/Select.tsx";
import InProgress from "../components/books/InProgress.tsx";
import BookList from "../components/books/BookList.tsx";
function Books() {

    const inProgBook = {"title": "IP 1", "date": new Date()};
    const inProgBook2 = {"title": "IP 2", "date": new Date()};

    const sort = ["Recently Added", "Title", "Author", "Rating"];
    const order = ["Descending", "Ascending"];
    const page = ["5", "10", "25"];
    const inProgBooks = [inProgBook, inProgBook2]

    const book1 = {"title": "title1", "author": "author1", "rating": 3, "finishDate": new Date()};
    const book2 = {"title": "title2", "author": "author2", "rating": 4, "finishDate": new Date()};
    const books = [book1, book2]

    return (
        <>
            <BookForm/>
            <div className={"m-4"}>
                <div className={"div-row"}>
                    <div className={"sixty"}>
                        <SearchBar label={"Search Books..."}/>
                    </div>
                    <div className={"thirty"}>
                        <SearchBar label={"Author..."}/>
                    </div>
                    <Button variant={"outline-primary"} className={"five"}>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                    </Button>
                </div>

                <div className={"div-row"}>
                    <div className={"twenty-five"}>
                        <Select itemList={sort} defaultVal={"Sort by..."}/>
                    </div>
                    <div className={"twenty-five"}>
                        <Select itemList={order} defaultVal={"Order by..."}/>
                    </div>
                    <div className={"twenty-five"}>
                        <Select itemList={page} defaultVal={"Number per page..."}/>
                    </div>
                </div>

                <div className={"space div-row"}>
                    <div className={"thirty-five"}>
                        <InProgress books={inProgBooks}></InProgress>
                    </div>
                    <div className={"full-flex"}>
                        <BookList books={books}/>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Books;