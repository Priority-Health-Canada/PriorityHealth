import { Request, Response } from "express"
import { Send } from "express-serve-static-core"

export interface TypedRequest<RequestBody> extends Request {
    body: RequestBody
}

export interface ResponseProperties {
    message: string,
    token?: string
}

export interface TypedResponse<ResponseBody> extends Response {
    // Send is a generic type used to specify the type of the response body that will be sent in an HTTP response.
    json: Send<ResponseBody, this>
}