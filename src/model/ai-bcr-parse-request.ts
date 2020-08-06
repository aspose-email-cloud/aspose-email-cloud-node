
// @ts-ignore
import * as model from "./index";
/**
 * Request model for aiBcrParse operation.
 */
export class AiBcrParseRequest {
    /**
     * File to parse
     */
    public file: Buffer;

    /**
     * Comma-separated codes of countries.
     */
    public countries: string;

    /**
     * Comma-separated ISO-639 codes of languages (either 639-1 or 639-3; i.e. \"it\" or \"ita\" for Italian); it's \"\" by default.             
     */
    public languages: string;

    /**
     * Determines that image contains single VCard or more.
     */
    public isSingle: boolean;

    /**
     * Request model for aiBcrParse operation.
     * @param file File to parse
     * @param countries Comma-separated codes of countries.
     * @param languages Comma-separated ISO-639 codes of languages (either 639-1 or 639-3; i.e. \"it\" or \"ita\" for Italian); it's \"\" by default.             
     * @param isSingle Determines that image contains single VCard or more.
     */
    public constructor(
        file?: Buffer, 
        countries?: string, 
        languages?: string, 
        isSingle?: boolean) {
        
        this.file = file;
        this.countries = countries;
        this.languages = languages;
        this.isSingle = isSingle;
    }
}
