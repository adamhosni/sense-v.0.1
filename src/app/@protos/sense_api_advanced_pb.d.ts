// package: sense
// file: sense_api_advanced.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class TriggerRequest extends jspb.Message {
  getTrigger(): boolean;
  setTrigger(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerRequest): TriggerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerRequest;
  static deserializeBinaryFromReader(message: TriggerRequest, reader: jspb.BinaryReader): TriggerRequest;
}

export namespace TriggerRequest {
  export type AsObject = {
    trigger: boolean,
  }
}

