// package: sense
// file: sense_api_mac.proto

import * as sense_api_mac_pb from "./sense_api_mac_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TargetListUpdateServiceTargetCreateQuery = {
  readonly methodName: string;
  readonly service: typeof TargetListUpdateService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sense_api_mac_pb.TargetUpdateRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type TargetListUpdateServiceTargetDeleteQuery = {
  readonly methodName: string;
  readonly service: typeof TargetListUpdateService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sense_api_mac_pb.TargetUpdateRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class TargetListUpdateService {
  static readonly serviceName: string;
  static readonly TargetCreateQuery: TargetListUpdateServiceTargetCreateQuery;
  static readonly TargetDeleteQuery: TargetListUpdateServiceTargetDeleteQuery;
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

export class TargetListUpdateServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  targetCreateQuery(
    requestMessage: sense_api_mac_pb.TargetUpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  targetCreateQuery(
    requestMessage: sense_api_mac_pb.TargetUpdateRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  targetDeleteQuery(
    requestMessage: sense_api_mac_pb.TargetUpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  targetDeleteQuery(
    requestMessage: sense_api_mac_pb.TargetUpdateRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

