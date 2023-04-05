import { Request, Response } from "express"
import { Send } from "express-serve-static-core"

// RequestBody can take the shape of the typed interfaces defined in types folder
export interface TypedRequest<RequestBody> extends Request {
    body: RequestBody
}

export interface ResponseProperties {
    message: string,
    token?: string
}

// ResponseBody takes the shape of ResponseProperties interface
export interface TypedResponse<ResponseBody> extends Response {
    // Send is a generic type used to specify the type of the response body that will be sent in an HTTP response.
    json: Send<ResponseBody, this>
}