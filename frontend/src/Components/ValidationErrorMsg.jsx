import { Alert } from "react-bootstrap";

function ValidationErrorMsg({showErrorProp}) {
    // Render Alert message with the prop value if "showErrorProp" is truthy
    return(
        showErrorProp && (
            <Alert variant="danger">
              {showErrorProp}
            </Alert>
        )
    )

}
export default ValidationErrorMsg;