// package: sense
// file: sense_api_mac.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class TargetUpdateRequest extends jspb.Message {
  getTypemac(): TargetUpdateRequest.TypeMap[keyof TargetUpdateRequest.TypeMap];
  setTypemac(value: TargetUpdateRequest.TypeMap[keyof TargetUpdateRequest.TypeMap]): void;

  clearTargetmacList(): void;
  getTargetmacList(): Array<string>;
  setTargetmacList(value: Array<string>): void;
  addTargetmac(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TargetUpdateRequest): TargetUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetUpdateRequest;
  static deserializeBinaryFromReader(message: TargetUpdateRequest, reader: jspb.BinaryReader): TargetUpdateRequest;
}

export namespace TargetUpdateRequest {
  export type AsObject = {
    typemac: TargetUpdateRequest.TypeMap[keyof TargetUpdateRequest.TypeMap],
    targetmacList: Array<string>,
  }

  export interface TypeMap {
    NONE: 0;
    WIFI: 1;
    BLTH: 2;
    AP: 3;
  }

  export const Type: TypeMap;
}

