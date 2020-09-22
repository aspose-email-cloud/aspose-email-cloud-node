// @ts-ignore
import * as model from "./index";
/**
 * Request model for DisposableEmailApi.isDisposable operation.
 */
export class DisposableEmailIsDisposableRequest {
    /**
     * An email address to check
     */
    public address: string;

    /**
     * Request model for disposableEmailIsDisposable operation.
     * @param address An email address to check
     */
    public constructor(
        address?: string) {
        
        this.address = address;
    }
}

export class DisposableEmailIsDisposableRequestBuilder {
    private model: DisposableEmailIsDisposableRequest
    public constructor(model: DisposableEmailIsDisposableRequest) {
        this.model = model;
    }
    public build(): DisposableEmailIsDisposableRequest {
        return this.model;
    }
        public address(address: string): DisposableEmailIsDisposableRequestBuilder {
            this.model.address = address;
            return this;
        }
}
