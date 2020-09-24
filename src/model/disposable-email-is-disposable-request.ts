// @ts-ignore
import * as model from "./index";
/**
 * Request model for disposableEmailIsDisposable operation.
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
