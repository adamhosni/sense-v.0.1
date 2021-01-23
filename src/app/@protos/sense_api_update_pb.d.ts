// package: sense
// file: sense_api_update.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class DeviceUpdateConfigMessage extends jspb.Message {
  getAutoUpdate(): boolean;
  setAutoUpdate(value: boolean): void;

  getServerhost(): string;
  setServerhost(value: string): void;

  getCurversion(): string;
  setCurversion(value: string): void;

  getNewversion(): string;
  setNewversion(value: string): void;

  getUpdatetime(): number;
  setUpdatetime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceUpdateConfigMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceUpdateConfigMessage): DeviceUpdateConfigMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceUpdateConfigMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceUpdateConfigMessage;
  static deserializeBinaryFromReader(message: DeviceUpdateConfigMessage, reader: jspb.BinaryReader): DeviceUpdateConfigMessage;
}

export namespace DeviceUpdateConfigMessage {
  export type AsObject = {
    autoUpdate: boolean,
    serverhost: string,
    curversion: string,
    newversion: string,
    updatetime: number,
  }
}

export class DeviceUpdateHostMessage extends jspb.Message {
  getServerhost(): string;
  setServerhost(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceUpdateHostMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceUpdateHostMessage): DeviceUpdateHostMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceUpdateHostMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceUpdateHostMessage;
  static deserializeBinaryFromReader(message: DeviceUpdateHostMessage, reader: jspb.BinaryReader): DeviceUpdateHostMessage;
}

export namespace DeviceUpdateHostMessage {
  export type AsObject = {
    serverhost: string,
  }
}

export class DeviceUpdateAutoMessage extends jspb.Message {
  getAutoUpdate(): boolean;
  setAutoUpdate(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceUpdateAutoMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceUpdateAutoMessage): DeviceUpdateAutoMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceUpdateAutoMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceUpdateAutoMessage;
  static deserializeBinaryFromReader(message: DeviceUpdateAutoMessage, reader: jspb.BinaryReader): DeviceUpdateAutoMessage;
}

export namespace DeviceUpdateAutoMessage {
  export type AsObject = {
    autoUpdate: boolean,
  }
}

export class DeviceUpdateProgressMessage extends jspb.Message {
  getUpdatesize(): number;
  setUpdatesize(value: number): void;

  getUpdateprogress(): number;
  setUpdateprogress(value: number): void;

  getUpdatestatus(): DeviceUpdateProgressMessage.statusMap[keyof DeviceUpdateProgressMessage.statusMap];
  setUpdatestatus(value: DeviceUpdateProgressMessage.statusMap[keyof DeviceUpdateProgressMessage.statusMap]): void;

  getCurversion(): string;
  setCurversion(value: string): void;

  getNewversion(): string;
  setNewversion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceUpdateProgressMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceUpdateProgressMessage): DeviceUpdateProgressMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceUpdateProgressMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceUpdateProgressMessage;
  static deserializeBinaryFromReader(message: DeviceUpdateProgressMessage, reader: jspb.BinaryReader): DeviceUpdateProgressMessage;
}

export namespace DeviceUpdateProgressMessage {
  export type AsObject = {
    updatesize: number,
    updateprogress: number,
    updatestatus: DeviceUpdateProgressMessage.statusMap[keyof DeviceUpdateProgressMessage.statusMap],
    curversion: string,
    newversion: string,
  }

  export interface statusMap {
    NONE: 0;
    PEND: 1;
    DOWN: 2;
    WIP: 3;
    DONE: 4;
    STOP: 5;
  }

  export const status: statusMap;
}

export class DeviceUpdateTriggerMessage extends jspb.Message {
  getTrigger(): DeviceUpdateTriggerMessage.trigger_typeMap[keyof DeviceUpdateTriggerMessage.trigger_typeMap];
  setTrigger(value: DeviceUpdateTriggerMessage.trigger_typeMap[keyof DeviceUpdateTriggerMessage.trigger_typeMap]): void;

  getUpdatepath(): string;
  setUpdatepath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceUpdateTriggerMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceUpdateTriggerMessage): DeviceUpdateTriggerMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceUpdateTriggerMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceUpdateTriggerMessage;
  static deserializeBinaryFromReader(message: DeviceUpdateTriggerMessage, reader: jspb.BinaryReader): DeviceUpdateTriggerMessage;
}

export namespace DeviceUpdateTriggerMessage {
  export type AsObject = {
    trigger: DeviceUpdateTriggerMessage.trigger_typeMap[keyof DeviceUpdateTriggerMessage.trigger_typeMap],
    updatepath: string,
  }

  export interface trigger_typeMap {
    NONE: 0;
    CHECK: 1;
    UPGRADE: 2;
    FILE: 3;
    URL: 4;
  }

  export const trigger_type: trigger_typeMap;
}

