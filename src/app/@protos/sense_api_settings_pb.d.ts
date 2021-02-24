// package: sense
// file: sense_api_settings.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class DeviceInfoMessage extends jspb.Message {
  getDevicename(): string;
  setDevicename(value: string): void;

  getDeviceid(): string;
  setDeviceid(value: string): void;

  getDevicefirmwareversion(): string;
  setDevicefirmwareversion(value: string): void;

  getIssetting(): boolean;
  setIssetting(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfoMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfoMessage): DeviceInfoMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceInfoMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfoMessage;
  static deserializeBinaryFromReader(message: DeviceInfoMessage, reader: jspb.BinaryReader): DeviceInfoMessage;
}

export namespace DeviceInfoMessage {
  export type AsObject = {
    devicename: string,
    devicedeviceNumber: string,
    devicefirmwareversion: string,
    issetting: boolean,
  }
}

export class DeviceDiagnosticsMessage extends jspb.Message {
  getCputemp(): number;
  setCputemp(value: number): void;

  getInternaltemp(): number;
  setInternaltemp(value: number): void;

  getExternaltemp(): number;
  setExternaltemp(value: number): void;

  getExthumidity(): number;
  setExthumidity(value: number): void;

  getCpuperf(): number;
  setCpuperf(value: number): void;

  getRamusage(): number;
  setRamusage(value: number): void;

  getHumiditylvl(): number;
  setHumiditylvl(value: number): void;

  getHddusage(): number;
  setHddusage(value: number): void;

  getPressure(): number;
  setPressure(value: number): void;

  getPoeamp(): number;
  setPoeamp(value: number): void;

  getPoevolt(): number;
  setPoevolt(value: number): void;

  getSysamp(): number;
  setSysamp(value: number): void;

  getSysvolt(): number;
  setSysvolt(value: number): void;

  getJackamp(): number;
  setJackamp(value: number): void;

  getJackvolt(): number;
  setJackvolt(value: number): void;

  getPiceamp(): number;
  setPiceamp(value: number): void;

  getPcievolt(): number;
  setPcievolt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceDiagnosticsMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceDiagnosticsMessage): DeviceDiagnosticsMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceDiagnosticsMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceDiagnosticsMessage;
  static deserializeBinaryFromReader(message: DeviceDiagnosticsMessage, reader: jspb.BinaryReader): DeviceDiagnosticsMessage;
}

export namespace DeviceDiagnosticsMessage {
  export type AsObject = {
    cputemp: number,
    internaltemp: number,
    externaltemp: number,
    exthumidity: number,
    cpuperf: number,
    ramusage: number,
    humiditylvl: number,
    hddusage: number,
    pressure: number,
    poeamp: number,
    poevolt: number,
    sysamp: number,
    sysvolt: number,
    jackamp: number,
    jackvolt: number,
    piceamp: number,
    pcievolt: number,
  }
}

export class DeviceEthernetConfig extends jspb.Message {
  getDhcpusage(): boolean;
  setDhcpusage(value: boolean): void;

  getMacaddress(): string;
  setMacaddress(value: string): void;

  getIpv4address(): string;
  setIpv4address(value: string): void;

  getSubnetmask(): string;
  setSubnetmask(value: string): void;

  getArrayDns(): string;
  setArrayDns(value: string): void;

  getGateway(): string;
  setGateway(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceEthernetConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceEthernetConfig): DeviceEthernetConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceEthernetConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceEthernetConfig;
  static deserializeBinaryFromReader(message: DeviceEthernetConfig, reader: jspb.BinaryReader): DeviceEthernetConfig;
}

export namespace DeviceEthernetConfig {
  export type AsObject = {
    dhcpusage: boolean,
    macaddress: string,
    ipv4address: string,
    subnetmask: string,
    arrayDns: string,
    gateway: string,
  }
}

export class DeviceLTE4GConfig extends jspb.Message {
  getStatus4g(): DeviceLTE4GConfig.StatusMap[keyof DeviceLTE4GConfig.StatusMap];
  setStatus4g(value: DeviceLTE4GConfig.StatusMap[keyof DeviceLTE4GConfig.StatusMap]): void;

  getCountry(): string;
  setCountry(value: string): void;

  getOperator(): string;
  setOperator(value: string): void;

  getApn(): string;
  setApn(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getPincode(): string;
  setPincode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceLTE4GConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceLTE4GConfig): DeviceLTE4GConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceLTE4GConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceLTE4GConfig;
  static deserializeBinaryFromReader(message: DeviceLTE4GConfig, reader: jspb.BinaryReader): DeviceLTE4GConfig;
}

export namespace DeviceLTE4GConfig {
  export type AsObject = {
    status4g: DeviceLTE4GConfig.StatusMap[keyof DeviceLTE4GConfig.StatusMap],
    country: string,
    operator: string,
    apn: string,
    username: string,
    password: string,
    pincode: string,
  }

  export interface StatusMap {
    NONE: 0;
    ONLINE: 1;
    OFFLINE: 2;
  }

  export const Status: StatusMap;
}

export class DeviceLocationConfig extends jspb.Message {
  getPosition(): string;
  setPosition(value: string): void;

  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getAuto(): boolean;
  setAuto(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceLocationConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceLocationConfig): DeviceLocationConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceLocationConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceLocationConfig;
  static deserializeBinaryFromReader(message: DeviceLocationConfig, reader: jspb.BinaryReader): DeviceLocationConfig;
}

export namespace DeviceLocationConfig {
  export type AsObject = {
    position: string,
    latitude: number,
    longitude: number,
    height: number,
    auto: boolean,
  }
}

export class DeviceNTPConfig extends jspb.Message {
  clearNtphostsList(): void;
  getNtphostsList(): Array<string>;
  setNtphostsList(value: Array<string>): void;
  addNtphosts(value: string, index?: number): string;

  clearNtpfallbackList(): void;
  getNtpfallbackList(): Array<string>;
  setNtpfallbackList(value: Array<string>): void;
  addNtpfallback(value: string, index?: number): string;

  getRootdistancemaxsec(): number;
  setRootdistancemaxsec(value: number): void;

  getPollintervalminsec(): number;
  setPollintervalminsec(value: number): void;

  getPollintervalmaxsec(): number;
  setPollintervalmaxsec(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceNTPConfig.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceNTPConfig): DeviceNTPConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceNTPConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceNTPConfig;
  static deserializeBinaryFromReader(message: DeviceNTPConfig, reader: jspb.BinaryReader): DeviceNTPConfig;
}

export namespace DeviceNTPConfig {
  export type AsObject = {
    ntphostsList: Array<string>,
    ntpfallbackList: Array<string>,
    rootdistancemaxsec: number,
    pollintervalminsec: number,
    pollintervalmaxsec: number,
  }
}

export class DeviceConfigMessage extends jspb.Message {
  getDeviceConfig(): DeviceConfigMessage.ConfigMap[keyof DeviceConfigMessage.ConfigMap];
  setDeviceConfig(value: DeviceConfigMessage.ConfigMap[keyof DeviceConfigMessage.ConfigMap]): void;

  hasDeviceEthernetConfig(): boolean;
  clearDeviceEthernetConfig(): void;
  getDeviceEthernetConfig(): DeviceEthernetConfig | undefined;
  setDeviceEthernetConfig(value?: DeviceEthernetConfig): void;

  hasDeviceLte4gConfig(): boolean;
  clearDeviceLte4gConfig(): void;
  getDeviceLte4gConfig(): DeviceLTE4GConfig | undefined;
  setDeviceLte4gConfig(value?: DeviceLTE4GConfig): void;

  hasDeviceLocationConfig(): boolean;
  clearDeviceLocationConfig(): void;
  getDeviceLocationConfig(): DeviceLocationConfig | undefined;
  setDeviceLocationConfig(value?: DeviceLocationConfig): void;

  hasDeviceNtpConfig(): boolean;
  clearDeviceNtpConfig(): void;
  getDeviceNtpConfig(): DeviceNTPConfig | undefined;
  setDeviceNtpConfig(value?: DeviceNTPConfig): void;

  getIssetting(): boolean;
  setIssetting(value: boolean): void;

  getDeviceParametersCase(): DeviceConfigMessage.DeviceParametersCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceConfigMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceConfigMessage): DeviceConfigMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceConfigMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceConfigMessage;
  static deserializeBinaryFromReader(message: DeviceConfigMessage, reader: jspb.BinaryReader): DeviceConfigMessage;
}

export namespace DeviceConfigMessage {
  export type AsObject = {
    deviceConfig: DeviceConfigMessage.ConfigMap[keyof DeviceConfigMessage.ConfigMap],
    deviceEthernetConfig?: DeviceEthernetConfig.AsObject,
    deviceLte4gConfig?: DeviceLTE4GConfig.AsObject,
    deviceLocationConfig?: DeviceLocationConfig.AsObject,
    deviceNtpConfig?: DeviceNTPConfig.AsObject,
    issetting: boolean,
  }

  export interface ConfigMap {
    NONE: 0;
    ETHERNET: 1;
    LTE4G: 2;
    LOCATION: 3;
    NTP: 4;
  }

  export const Config: ConfigMap;

  export enum DeviceParametersCase {
    DEVICE_PARAMETERS_NOT_SET = 0,
    DEVICE_ETHERNET_CONFIG = 2,
    DEVICE_LTE4G_CONFIG = 3,
    DEVICE_LOCATION_CONFIG = 4,
    DEVICE_NTP_CONFIG = 5,
  }
}

