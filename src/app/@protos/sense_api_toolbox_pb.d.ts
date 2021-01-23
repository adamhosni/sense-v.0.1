// package: sense
// file: sense_api_toolbox.proto

import * as jspb from "google-protobuf";

export class ToolboxQuery extends jspb.Message {
  getCommandTool(): ToolboxQuery.ToolsMap[keyof ToolboxQuery.ToolsMap];
  setCommandTool(value: ToolboxQuery.ToolsMap[keyof ToolboxQuery.ToolsMap]): void;

  getIface(): ToolboxQuery.InterfaceMap[keyof ToolboxQuery.InterfaceMap];
  setIface(value: ToolboxQuery.InterfaceMap[keyof ToolboxQuery.InterfaceMap]): void;

  getUseIpv6(): boolean;
  setUseIpv6(value: boolean): void;

  clearHostsList(): void;
  getHostsList(): Array<string>;
  setHostsList(value: Array<string>): void;
  addHosts(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToolboxQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ToolboxQuery): ToolboxQuery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToolboxQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToolboxQuery;
  static deserializeBinaryFromReader(message: ToolboxQuery, reader: jspb.BinaryReader): ToolboxQuery;
}

export namespace ToolboxQuery {
  export type AsObject = {
    commandTool: ToolboxQuery.ToolsMap[keyof ToolboxQuery.ToolsMap],
    iface: ToolboxQuery.InterfaceMap[keyof ToolboxQuery.InterfaceMap],
    useIpv6: boolean,
    hostsList: Array<string>,
  }

  export interface ToolsMap {
    NONE: 0;
    PING: 1;
    NETSTAT: 2;
    IPERF: 3;
    TRACEROUTE: 4;
  }

  export const Tools: ToolsMap;

  export interface InterfaceMap {
    UNKNOWN: 0;
    ETHERNET: 1;
    LTE4G: 2;
  }

  export const Interface: InterfaceMap;
}

export class ToolboxResult extends jspb.Message {
  getCommandResult(): string;
  setCommandResult(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToolboxResult.AsObject;
  static toObject(includeInstance: boolean, msg: ToolboxResult): ToolboxResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToolboxResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToolboxResult;
  static deserializeBinaryFromReader(message: ToolboxResult, reader: jspb.BinaryReader): ToolboxResult;
}

export namespace ToolboxResult {
  export type AsObject = {
    commandResult: string,
  }
}

