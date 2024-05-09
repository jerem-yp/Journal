import {InputGroup, Form} from "react-bootstrap";
function SearchBar({label = "Search..."}) {
    return (
        <>
            <InputGroup className={"mb-3"}>
                <Form.Control placeholder={label} aria-label={label} />
            </InputGroup>

        </>
    )
}

export default SearchBar;