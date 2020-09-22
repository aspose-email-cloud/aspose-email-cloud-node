// @ts-ignore
import * as model from "./index";
/**
 * Request model for AiNameApi.parse operation.
 */
export class AiNameParseRequest {
    /**
     * A name to parse.
     */
    public name: string;

    /**
     * An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian).             
     */
    public language: string;

    /**
     * A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France.             
     */
    public location: string;

    /**
     * A character encoding name.
     */
    public encoding: string;

    /**
     * A writing system code; starts with the ISO-15924 script name.
     */
    public script: string;

    /**
     * Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public style: string;

    /**
     * Request model for aiNameParse operation.
     * @param name A name to parse.
     * @param language An ISO-639 code of the language; either 639-1 or 639-3 (e.g. \"it\" or \"ita\" for Italian).             
     * @param location A geographic code such as an ISO-3166 two letter country code, for example \"FR\" for France.             
     * @param encoding A character encoding name.
     * @param script A writing system code; starts with the ISO-15924 script name.
     * @param style Name writing style. Enum, available values: Formal, Informal, Legal, Academic
     */
    public constructor(
        name?: string, 
        language?: string, 
        location?: string, 
        encoding?: string, 
        script?: string, 
        style?: string) {
        
        this.name = name;
        this.language = language;
        this.location = location;
        this.encoding = encoding;
        this.script = script;
        this.style = style;
    }
}

export class AiNameParseRequestBuilder {
    private model: AiNameParseRequest
    public constructor(model: AiNameParseRequest) {
        this.model = model;
    }
    public build(): AiNameParseRequest {
        return this.model;
    }
        public name(name: string): AiNameParseRequestBuilder {
            this.model.name = name;
            return this;
        }
        public language(language: string): AiNameParseRequestBuilder {
            this.model.language = language;
            return this;
        }
        public location(location: string): AiNameParseRequestBuilder {
            this.model.location = location;
            return this;
        }
        public encoding(encoding: string): AiNameParseRequestBuilder {
            this.model.encoding = encoding;
            return this;
        }
        public script(script: string): AiNameParseRequestBuilder {
            this.model.script = script;
            return this;
        }
        public style(style: string): AiNameParseRequestBuilder {
            this.model.style = style;
            return this;
        }
}
