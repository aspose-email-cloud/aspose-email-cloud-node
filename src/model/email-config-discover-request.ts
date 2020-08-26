// @ts-ignore
import * as model from "./index";
/**
 * Request model for emailConfigDiscover operation.
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
