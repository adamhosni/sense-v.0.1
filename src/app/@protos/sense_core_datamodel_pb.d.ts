// package: sense
// file: sense_core_datamodel.proto

import * as jspb from "google-protobuf";

export class BasicMacMsg extends jspb.Message {
  getMac(): string;
  setMac(value: string): void;

  getVendor(): string;
  setVendor(value: string): void;

  getInterface(): string;
  setInterface(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicMacMsg.AsObject;
  static toObject(includeInstance: boolean, msg: BasicMacMsg): BasicMacMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicMacMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicMacMsg;
  static deserializeBinaryFromReader(message: BasicMacMsg, reader: jspb.BinaryReader): BasicMacMsg;
}

export namespace BasicMacMsg {
  export type AsObject = {
    mac: string,
    vendor: string,
    pb_interface: string,
  }
}

export class WiFiFrameMsg extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): BasicMacMsg | undefined;
  setInfo(value?: BasicMacMsg): void;

  getFrame(): WiFiFrameMsg.FrameTypeMap[keyof WiFiFrameMsg.FrameTypeMap];
  setFrame(value: WiFiFrameMsg.FrameTypeMap[keyof WiFiFrameMsg.FrameTypeMap]): void;

  getRssi(): number;
  setRssi(value: number): void;

  getSsid(): string;
  setSsid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WiFiFrameMsg.AsObject;
  static toObject(includeInstance: boolean, msg: WiFiFrameMsg): WiFiFrameMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WiFiFrameMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WiFiFrameMsg;
  static deserializeBinaryFromReader(message: WiFiFrameMsg, reader: jspb.BinaryReader): WiFiFrameMsg;
}

export namespace WiFiFrameMsg {
  export type AsObject = {
    info?: BasicMacMsg.AsObject,
    frame: WiFiFrameMsg.FrameTypeMap[keyof WiFiFrameMsg.FrameTypeMap],
    rssi: number,
    ssdeviceNumber: string,
  }

  export interface FrameTypeMap {
    UNKNOWN: 0;
    MGMT: 1;
    CTRL: 2;
    DATA: 3;
    RTS: 4;
    CTS: 5;
    ACK: 6;
    OTHER: 7;
  }

  export const FrameType: FrameTypeMap;
}

export class WiFiFramePointMsg extends jspb.Message {
  hasFrame(): boolean;
  clearFrame(): void;
  getFrame(): WiFiFrameMsg | undefined;
  setFrame(value?: WiFiFrameMsg): void;

  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WiFiFramePointMsg.AsObject;
  static toObject(includeInstance: boolean, msg: WiFiFramePointMsg): WiFiFramePointMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WiFiFramePointMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WiFiFramePointMsg;
  static deserializeBinaryFromReader(message: WiFiFramePointMsg, reader: jspb.BinaryReader): WiFiFramePointMsg;
}

export namespace WiFiFramePointMsg {
  export type AsObject = {
    frame?: WiFiFrameMsg.AsObject,
    time: number,
  }
}

export class WiFiFrameTimeSerieMsg extends jspb.Message {
  hasFrame(): boolean;
  clearFrame(): void;
  getFrame(): WiFiFrameMsg | undefined;
  setFrame(value?: WiFiFrameMsg): void;

  clearTimeList(): void;
  getTimeList(): Array<number>;
  setTimeList(value: Array<number>): void;
  addTime(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WiFiFrameTimeSerieMsg.AsObject;
  static toObject(includeInstance: boolean, msg: WiFiFrameTimeSerieMsg): WiFiFrameTimeSerieMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WiFiFrameTimeSerieMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WiFiFrameTimeSerieMsg;
  static deserializeBinaryFromReader(message: WiFiFrameTimeSerieMsg, reader: jspb.BinaryReader): WiFiFrameTimeSerieMsg;
}

export namespace WiFiFrameTimeSerieMsg {
  export type AsObject = {
    frame?: WiFiFrameMsg.AsObject,
    timeList: Array<number>,
  }
}

export class AccessPointsReplyMsg extends jspb.Message {
  getSsid(): string;
  setSsid(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessPointsReplyMsg.AsObject;
  static toObject(includeInstance: boolean, msg: AccessPointsReplyMsg): AccessPointsReplyMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccessPointsReplyMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessPointsReplyMsg;
  static deserializeBinaryFromReader(message: AccessPointsReplyMsg, reader: jspb.BinaryReader): AccessPointsReplyMsg;
}

export namespace AccessPointsReplyMsg {
  export type AsObject = {
    ssdeviceNumber: string,
    count: number,
  }
}

export class BTFrameMsg extends jspb.Message {
  hasInfo(): boolean;
  clearInfo(): void;
  getInfo(): BasicMacMsg | undefined;
  setInfo(value?: BasicMacMsg): void;

  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getFrame(): BTFrameMsg.FrameTypeMap[keyof BTFrameMsg.FrameTypeMap];
  setFrame(value: BTFrameMsg.FrameTypeMap[keyof BTFrameMsg.FrameTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTFrameMsg.AsObject;
  static toObject(includeInstance: boolean, msg: BTFrameMsg): BTFrameMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BTFrameMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTFrameMsg;
  static deserializeBinaryFromReader(message: BTFrameMsg, reader: jspb.BinaryReader): BTFrameMsg;
}

export namespace BTFrameMsg {
  export type AsObject = {
    info?: BasicMacMsg.AsObject,
    name: string,
    type: string,
    frame: BTFrameMsg.FrameTypeMap[keyof BTFrameMsg.FrameTypeMap],
  }

  export interface FrameTypeMap {
    UNKNOWN: 0;
    PING: 1;
    BLIND: 2;
  }

  export const FrameType: FrameTypeMap;
}

export class BTFramePointMsg extends jspb.Message {
  hasFrame(): boolean;
  clearFrame(): void;
  getFrame(): BTFrameMsg | undefined;
  setFrame(value?: BTFrameMsg): void;

  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTFramePointMsg.AsObject;
  static toObject(includeInstance: boolean, msg: BTFramePointMsg): BTFramePointMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BTFramePointMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTFramePointMsg;
  static deserializeBinaryFromReader(message: BTFramePointMsg, reader: jspb.BinaryReader): BTFramePointMsg;
}

export namespace BTFramePointMsg {
  export type AsObject = {
    frame?: BTFrameMsg.AsObject,
    time: number,
  }
}

export class BTFrameTimeSerieMsg extends jspb.Message {
  hasFrame(): boolean;
  clearFrame(): void;
  getFrame(): BTFrameMsg | undefined;
  setFrame(value?: BTFrameMsg): void;

  clearTimeList(): void;
  getTimeList(): Array<number>;
  setTimeList(value: Array<number>): void;
  addTime(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTFrameTimeSerieMsg.AsObject;
  static toObject(includeInstance: boolean, msg: BTFrameTimeSerieMsg): BTFrameTimeSerieMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BTFrameTimeSerieMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTFrameTimeSerieMsg;
  static deserializeBinaryFromReader(message: BTFrameTimeSerieMsg, reader: jspb.BinaryReader): BTFrameTimeSerieMsg;
}

export namespace BTFrameTimeSerieMsg {
  export type AsObject = {
    frame?: BTFrameMsg.AsObject,
    timeList: Array<number>,
  }
}

