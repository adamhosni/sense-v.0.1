// package: sense
// file: sense_core_mac.proto

import * as sense_core_mac_pb from "./sense_core_mac_pb";
import {grpc} from "@improbable-eng/grpc-web";

type TargetListQueryServiceTargetFullReadQuery = {
  readonly methodName: string;
  readonly service: typeof TargetListQueryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sense_core_mac_pb.TargetListRequest;
  readonly responseType: typeof sense_core_mac_pb.TargetListResponse;
};

type TargetListQueryServiceTargetDeltaReadQuery = {
  readonly methodName: string;
  readonly service: typeof TargetListQueryService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sense_core_mac_pb.TargetListRequest;
  readonly responseType: typeof sense_core_mac_pb.TargetListResponse;
};

export class TargetListQueryService {
  static readonly serviceName: string;
  static readonly TargetFullReadQuery: TargetListQueryServiceTargetFullReadQuery;
  static readonly TargetDeltaReadQuery: TargetListQueryServiceTargetDeltaReadQuery;
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

export class TargetListQueryServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  targetFullReadQuery(
    requestMessage: sense_core_mac_pb.TargetListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sense_core_mac_pb.TargetListResponse|null) => void
  ): UnaryResponse;
  targetFullReadQuery(
    requestMessage: sense_core_mac_pb.TargetListRequest,
    callback: (error: ServiceError|null, responseMessage: sense_core_mac_pb.TargetListResponse|null) => void
  ): UnaryResponse;
  targetDeltaReadQuery(
    requestMessage: sense_core_mac_pb.TargetListRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sense_core_mac_pb.TargetListResponse|null) => void
  ): UnaryResponse;
  targetDeltaReadQuery(
    requestMessage: sense_core_mac_pb.TargetListRequest,
    callback: (error: ServiceError|null, responseMessage: sense_core_mac_pb.TargetListResponse|null) => void
  ): UnaryResponse;
}

