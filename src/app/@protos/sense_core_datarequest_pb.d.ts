// package: sense
// file: sense_core_datarequest.proto

import * as jspb from "google-protobuf";

export class TimeRange extends jspb.Message {
  getFromepochms(): number;
  setFromepochms(value: number): void;

  getToepochms(): number;
  setToepochms(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeRange.AsObject;
  static toObject(includeInstance: boolean, msg: TimeRange): TimeRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeRange;
  static deserializeBinaryFromReader(message: TimeRange, reader: jspb.BinaryReader): TimeRange;
}

export namespace TimeRange {
  export type AsObject = {
    fromepochms: number,
    toepochms: number,
  }
}

export class ItemQuery extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): string;
  setKey(value: string): void;

  hasRegex(): boolean;
  clearRegex(): void;
  getRegex(): string;
  setRegex(value: string): void;

  hasTimerange(): boolean;
  clearTimerange(): void;
  getTimerange(): TimeRange | undefined;
  setTimerange(value?: TimeRange): void;

  getVendor(): string;
  setVendor(value: string): void;

  getInterface(): string;
  setInterface(value: string): void;

  getExcludenodetection(): boolean;
  setExcludenodetection(value: boolean): void;

  getPagenum(): number;
  setPagenum(value: number): void;

  getItemperpage(): number;
  setItemperpage(value: number): void;

  getAscorder(): boolean;
  setAscorder(value: boolean): void;

  getKeylistCase(): ItemQuery.KeylistCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ItemQuery): ItemQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ItemQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemQuery;
  static deserializeBinaryFromReader(message: ItemQuery, reader: jspb.BinaryReader): ItemQuery;
}

export namespace ItemQuery {
  export type AsObject = {
    key: string,
    regex: string,
    timerange?: TimeRange.AsObject,
    vendor: string,
    pb_interface: string,
    excludenodetection: boolean,
    pagenum: number,
    itemperpage: number,
    ascorder: boolean,
  }

  export enum KeylistCase {
    KEYLIST_NOT_SET = 0,
    KEY = 1,
    REGEX = 2,
  }
}

export class WiFiFrameQuery extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): ItemQuery | undefined;
  setItem(value?: ItemQuery): void;

  getFrame(): WiFiFrameQuery.FrameTypeMap[keyof WiFiFrameQuery.FrameTypeMap];
  setFrame(value: WiFiFrameQuery.FrameTypeMap[keyof WiFiFrameQuery.FrameTypeMap]): void;

  getRssi(): number;
  setRssi(value: number): void;

  getSsid(): string;
  setSsid(value: string): void;

  getSortkey(): WiFiFrameQuery.SortKeyMap[keyof WiFiFrameQuery.SortKeyMap];
  setSortkey(value: WiFiFrameQuery.SortKeyMap[keyof WiFiFrameQuery.SortKeyMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WiFiFrameQuery.AsObject;
  static toObject(includeInstance: boolean, msg: WiFiFrameQuery): WiFiFrameQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WiFiFrameQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WiFiFrameQuery;
  static deserializeBinaryFromReader(message: WiFiFrameQuery, reader: jspb.BinaryReader): WiFiFrameQuery;
}

export namespace WiFiFrameQuery {
  export type AsObject = {
    item?: ItemQuery.AsObject,
    frame: WiFiFrameQuery.FrameTypeMap[keyof WiFiFrameQuery.FrameTypeMap],
    rssi: number,
    ssdeviceNumber: string,
    sortkey: WiFiFrameQuery.SortKeyMap[keyof WiFiFrameQuery.SortKeyMap],
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

  export interface SortKeyMap {
    DEFAULT: 0;
    MAC: 1;
    TIME: 2;
    VENDOR: 3;
    FRAME: 4;
    RSSI: 5;
    SSdeviceNumber: 6;
  }

  export const SortKey: SortKeyMap;
}

export class APQuery extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): ItemQuery | undefined;
  setItem(value?: ItemQuery): void;

  getSsid(): string;
  setSsid(value: string): void;

  getSortkey(): APQuery.SortKeyMap[keyof APQuery.SortKeyMap];
  setSortkey(value: APQuery.SortKeyMap[keyof APQuery.SortKeyMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APQuery.AsObject;
  static toObject(includeInstance: boolean, msg: APQuery): APQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: APQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APQuery;
  static deserializeBinaryFromReader(message: APQuery, reader: jspb.BinaryReader): APQuery;
}

export namespace APQuery {
  export type AsObject = {
    item?: ItemQuery.AsObject,
    ssdeviceNumber: string,
    sortkey: APQuery.SortKeyMap[keyof APQuery.SortKeyMap],
  }

  export interface SortKeyMap {
    DEFAULT: 0;
    SSdeviceNumber: 1;
    TIME: 2;
  }

  export const SortKey: SortKeyMap;
}

export class BTFrameQuery extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): ItemQuery | undefined;
  setItem(value?: ItemQuery): void;

  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getSortkey(): BTFrameQuery.SortKeyMap[keyof BTFrameQuery.SortKeyMap];
  setSortkey(value: BTFrameQuery.SortKeyMap[keyof BTFrameQuery.SortKeyMap]): void;

  getFrame(): BTFrameQuery.FrameTypeMap[keyof BTFrameQuery.FrameTypeMap];
  setFrame(value: BTFrameQuery.FrameTypeMap[keyof BTFrameQuery.FrameTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BTFrameQuery.AsObject;
  static toObject(includeInstance: boolean, msg: BTFrameQuery): BTFrameQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BTFrameQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BTFrameQuery;
  static deserializeBinaryFromReader(message: BTFrameQuery, reader: jspb.BinaryReader): BTFrameQuery;
}

export namespace BTFrameQuery {
  export type AsObject = {
    item?: ItemQuery.AsObject,
    name: string,
    type: string,
    sortkey: BTFrameQuery.SortKeyMap[keyof BTFrameQuery.SortKeyMap],
    frame: BTFrameQuery.FrameTypeMap[keyof BTFrameQuery.FrameTypeMap],
  }

  export interface SortKeyMap {
    DEFAULT: 0;
    MAC: 1;
    TIME: 2;
    VENDOR: 3;
    NAME: 4;
    TYPE: 5;
  }

  export const SortKey: SortKeyMap;

  export interface FrameTypeMap {
    UNKNOWN: 0;
    PING: 1;
    BLIND: 2;
  }

  export const FrameType: FrameTypeMap;
}

