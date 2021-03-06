// package: sense
// file: sense_api_iam.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class DeviceAuthResponse extends jspb.Message {
  getAuthjwt(): string;
  setAuthjwt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceAuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceAuthResponse): DeviceAuthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceAuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceAuthResponse;
  static deserializeBinaryFromReader(message: DeviceAuthResponse, reader: jspb.BinaryReader): DeviceAuthResponse;
}

export namespace DeviceAuthResponse {
  export type AsObject = {
    authjwt: string,
  }
}

