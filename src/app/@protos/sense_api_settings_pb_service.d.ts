// package: sense
// file: sense_api_settings.proto

import * as sense_api_settings_pb from "./sense_api_settings_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DeviceSettingsDeviceInfo = {
  readonly methodName: string;
  readonly service: typeof DeviceSettings;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sense_api_settings_pb.DeviceInfoMessage;
  readonly responseType: typeof sense_api_settings_pb.DeviceInfoMessage;
};

type DeviceSettingsDeviceDiagnostics = {
  readonly methodName: string;
  readonly service: typeof DeviceSettings;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof sense_api_settings_pb.DeviceDiagnosticsMessage;
};

type DeviceSettingsDeviceConfig = {
  readonly methodName: string;
  readonly service: typeof DeviceSettings;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sense_api_settings_pb.DeviceConfigMessage;
  readonly responseType: typeof sense_api_settings_pb.DeviceConfigMessage;
};

export class DeviceSettings {
  static readonly serviceName: string;
  static readonly DeviceInfo: DeviceSettingsDeviceInfo;
  static readonly DeviceDiagnostics: DeviceSettingsDeviceDiagnostics;
  static readonly DeviceConfig: DeviceSettingsDeviceConfig;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class DeviceSettingsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  deviceInfo(
    requestMessage: sense_api_settings_pb.DeviceInfoMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sense_api_settings_pb.DeviceInfoMessage|null) => void
  ): UnaryResponse;
  deviceInfo(
    requestMessage: sense_api_settings_pb.DeviceInfoMessage,
    callback: (error: ServiceError|null, responseMessage: sense_api_settings_pb.DeviceInfoMessage|null) => void
  ): UnaryResponse;
  deviceDiagnostics(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sense_api_settings_pb.DeviceDiagnosticsMessage|null) => void
  ): UnaryResponse;
  deviceDiagnostics(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: sense_api_settings_pb.DeviceDiagnosticsMessage|null) => void
  ): UnaryResponse;
  deviceConfig(
    requestMessage: sense_api_settings_pb.DeviceConfigMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sense_api_settings_pb.DeviceConfigMessage|null) => void
  ): UnaryResponse;
  deviceConfig(
    requestMessage: sense_api_settings_pb.DeviceConfigMessage,
    callback: (error: ServiceError|null, responseMessage: sense_api_settings_pb.DeviceConfigMessage|null) => void
  ): UnaryResponse;
}

