/// <reference types="node" />
export declare class Post {
    id: number;
    name: string;
    integer: string;
    int4: string;
    int: string;
    smallint: string;
    int2: string;
    bigint: string;
    int8: string;
    int64: string;
    doublePrecision: number;
    float4: number;
    float8: number;
    real: number;
    numeric: string;
    decimal: string;
    dec: string;
    char: string;
    character: string;
    varchar: string;
    characterVarying: string;
    charVarying: string;
    string: string;
    text: string;
    bytes: Buffer;
    bytea: Buffer;
    blob: Buffer;
    date: string;
    interval: any;
    time: string;
    timeWithoutTimeZone: string;
    timestamp: Date;
    timestampWithTimeZone: Date;
    timestampWithoutTimeZone: Date;
    timestamptz: Date;
    boolean: boolean;
    bool: boolean;
    inet: string;
    uuid: string;
    jsonb: Object;
    json: Object;
    array: string[];
    simpleArray: string[];
    simpleJson: {
        param: string;
    };
}