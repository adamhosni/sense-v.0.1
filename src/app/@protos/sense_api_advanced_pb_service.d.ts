// package: sense
// file: sense_api_advanced.proto

import * as sense_api_advanced_pb from "./sense_api_advanced_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AdvancedServiceDeviceRestart = {
  readonly methodName: string;
  readonly service: typeof AdvancedService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sense_api_advanced_pb.TriggerRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AdvancedServiceDeviceFactoryReset = {
  readonly methodName: string;
  readonly service: typeof AdvancedService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sense_api_advanced_pb.TriggerRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AdvancedServiceDeviceWebServerTrigger = {
  readonly methodName: string;
  readonly service: typeof AdvancedService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sense_api_advanced_pb.TriggerRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class AdvancedService {
  static readonly serviceName: string;
  static readonly DeviceRestart: AdvancedServiceDeviceRestart;
  static readonly DeviceFactoryReset: AdvancedServiceDeviceFactoryReset;
  static readonly DeviceWebServerTrigger: AdvancedServiceDeviceWebServerTrigger;
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

export class AdvancedServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  deviceRestart(
    requestMessage: sense_api_advanced_pb.TriggerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deviceRestart(
    requestMessage: sense_api_advanced_pb.TriggerRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deviceFactoryReset(
    requestMessage: sense_api_advanced_pb.TriggerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deviceFactoryReset(
    requestMessage: sense_api_advanced_pb.TriggerRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deviceWebServerTrigger(
    requestMessage: sense_api_advanced_pb.TriggerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deviceWebServerTrigger(
    requestMessage: sense_api_advanced_pb.TriggerRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

