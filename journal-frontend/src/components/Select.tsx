import Form from 'react-bootstrap/Form'

interface ItemProp {
    itemList: string[],
    defaultVal: string
}
function Select({itemList, defaultVal} : ItemProp) {
    return (
        <>
            <Form.Select defaultValue={"defaultVal"}>
                <option value="defaultVal" disabled>{defaultVal}</option>
                {
                    itemList.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))
                }
            </Form.Select>
        </>
    )
}

export default Select;