import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

interface QuestionTag {
    question: string,
    tags: string[]
    title: string[]
}
interface Question {
    question: QuestionTag
}

function tagLabel(tag: string) {
    // Little tags
    return (
        <>
            <Badge pill bg={"success"} className={"set-margin-right-small"} key={tag}>
                {tag}
            </Badge>
        </>
    )
}

function PromptCard({question}: Question) {

    return (
        <>
            <Card className={"set-margin-right set-padding-all float-shadow"} >
                {/*<Card.Title><em>Prompt</em></Card.Title>*/}
                <Card.Header as={"h6"}><b>{question.title}</b></Card.Header>
                <Card.Body>{question.question}</Card.Body>
                <Card.Body>
                    {question.tags.map((tag) => (
                        tagLabel(tag)
                    ))}
                </Card.Body>
            </Card>
        </>
    )
}

export default PromptCard;