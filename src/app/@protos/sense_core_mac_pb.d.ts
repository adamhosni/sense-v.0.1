// package: sense
// file: sense_core_mac.proto

import * as jspb from "google-protobuf";

export class TargetListRequest extends jspb.Message {
  getTypemac(): TargetListRequest.TypeMap[keyof TargetListRequest.TypeMap];
  setTypemac(value: TargetListRequest.TypeMap[keyof TargetListRequest.TypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TargetListRequest): TargetListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetListRequest;
  static deserializeBinaryFromReader(message: TargetListRequest, reader: jspb.BinaryReader): TargetListRequest;
}

export namespace TargetListRequest {
  export type AsObject = {
    typemac: TargetListRequest.TypeMap[keyof TargetListRequest.TypeMap],
  }

  export interface TypeMap {
    NONE: 0;
    WIFI: 1;
    BLTH: 2;
    AP: 3;
  }

  export const Type: TypeMap;
}

export class TargetListResponse extends jspb.Message {
  clearTargetmacList(): void;
  getTargetmacList(): Array<TargetListResponse.MacStruct>;
  setTargetmacList(value: Array<TargetListResponse.MacStruct>): void;
  addTargetmac(value?: TargetListResponse.MacStruct, index?: number): TargetListResponse.MacStruct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TargetListResponse): TargetListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetListResponse;
  static deserializeBinaryFromReader(message: TargetListResponse, reader: jspb.BinaryReader): TargetListResponse;
}

export namespace TargetListResponse {
  export type AsObject = {
    targetmacList: Array<TargetListResponse.MacStruct.AsObject>,
  }

  export class MacStruct extends jspb.Message {
    getAddrmac(): string;
    setAddrmac(value: string): void;

    getMarkdeletion(): boolean;
    setMarkdeletion(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MacStruct.AsObject;
    static toObject(includeInstance: boolean, msg: MacStruct): MacStruct.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MacStruct, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MacStruct;
    static deserializeBinaryFromReader(message: MacStruct, reader: jspb.BinaryReader): MacStruct;
  }

  export namespace MacStruct {
    export type AsObject = {
      addrmac: string,
      markdeletion: boolean,
    }
  }
}

