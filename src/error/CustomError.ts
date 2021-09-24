import { BaseError } from "./BaseError";

export default class CustomError extends BaseError {
    constructor(
        public message: string,
        public code: number,
        public tips?: string | object | undefined
    ) {
        super(message, code)
    }
}