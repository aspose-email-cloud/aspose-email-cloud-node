// @ts-ignore
import * as model from "./index";
/**
 * Request model for EmailConfigApi.discover operation.
 */
export class EmailConfigDiscoverRequest {
    /**
     * Email address.
     */
    public address: string;

    /**
     * Turns on fast processing. All discover systems will run in parallel. First discovered result will be returned.             
     */
    public fastProcessing: boolean;

    /**
     * Request model for emailConfigDiscover operation.
     * @param address Email address.
     * @param fastProcessing Turns on fast processing. All discover systems will run in parallel. First discovered result will be returned.             
     */
    public constructor(
        address?: string, 
        fastProcessing?: boolean) {
        
        this.address = address;
        this.fastProcessing = fastProcessing;
    }
}

export class EmailConfigDiscoverRequestBuilder {
    private model: EmailConfigDiscoverRequest
    public constructor(model: EmailConfigDiscoverRequest) {
        this.model = model;
    }
    public build(): EmailConfigDiscoverRequest {
        const tempModel = this.model;
        this.model = null;
        return tempModel;
    }
        public address(address: string): EmailConfigDiscoverRequestBuilder {
            this.model.address = address;
            return this;
        }
        public fastProcessing(fastProcessing: boolean): EmailConfigDiscoverRequestBuilder {
            this.model.fastProcessing = fastProcessing;
            return this;
        }
}
