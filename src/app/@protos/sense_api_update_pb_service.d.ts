// package: sense
// file: sense_api_update.proto

import * as sense_api_update_pb from "./sense_api_update_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UpdateServiceDeviceUpdateSettings = {
  readonly methodName: string;
  readonly service: typeof UpdateService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof sense_api_update_pb.DeviceUpdateConfigMessage;
};

type UpdateServiceDeviceUpdateHost = {
  readonly methodName: string;
  readonly service: typeof UpdateService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sense_api_update_pb.DeviceUpdateHostMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type UpdateServiceDeviceUpdateAuto = {
  readonly methodName: string;
  readonly service: typeof UpdateService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sense_api_update_pb.DeviceUpdateAutoMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type UpdateServiceDeviceUpdateTrigger = {
  readonly methodName: string;
  readonly service: typeof UpdateService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof sense_api_update_pb.DeviceUpdateTriggerMessage;
  readonly responseType: typeof sense_api_update_pb.DeviceUpdateProgressMessage;
};

export class UpdateService {
  static readonly serviceName: string;
  static readonly DeviceUpdateSettings: UpdateServiceDeviceUpdateSettings;
  static readonly DeviceUpdateHost: UpdateServiceDeviceUpdateHost;
  static readonly DeviceUpdateAuto: UpdateServiceDeviceUpdateAuto;
  static readonly DeviceUpdateTrigger: UpdateServiceDeviceUpdateTrigger;
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

export class UpdateServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  deviceUpdateSettings(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sense_api_update_pb.DeviceUpdateConfigMessage|null) => void
  ): UnaryResponse;
  deviceUpdateSettings(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: sense_api_update_pb.DeviceUpdateConfigMessage|null) => void
  ): UnaryResponse;
  deviceUpdateHost(
    requestMessage: sense_api_update_pb.DeviceUpdateHostMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deviceUpdateHost(
    requestMessage: sense_api_update_pb.DeviceUpdateHostMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deviceUpdateAuto(
    requestMessage: sense_api_update_pb.DeviceUpdateAutoMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deviceUpdateAuto(
    requestMessage: sense_api_update_pb.DeviceUpdateAutoMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deviceUpdateTrigger(requestMessage: sense_api_update_pb.DeviceUpdateTriggerMessage, metadata?: grpc.Metadata): ResponseStream<sense_api_update_pb.DeviceUpdateProgressMessage>;
}

