// package: sense
// file: sense_core_datastore.proto

import * as sense_core_datastore_pb from "./sense_core_datastore_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as sense_core_datamodel_pb from "./sense_core_datamodel_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DataStoreinsertWiFiItems = {
  readonly methodName: string;
  readonly service: typeof DataStore;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof sense_core_datamodel_pb.WiFiFramePointMsg;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type DataStoreinsertWiFiTSItems = {
  readonly methodName: string;
  readonly service: typeof DataStore;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof sense_core_datamodel_pb.WiFiFrameTimeSerieMsg;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type DataStoreinsertBTItems = {
  readonly methodName: string;
  readonly service: typeof DataStore;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof sense_core_datamodel_pb.BTFramePointMsg;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type DataStoreinsertBTTSItems = {
  readonly methodName: string;
  readonly service: typeof DataStore;
  readonly requestStream: true;
  readonly responseStream: false;
  readonly requestType: typeof sense_core_datamodel_pb.BTFrameTimeSerieMsg;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class DataStore {
  static readonly serviceName: string;
  static readonly insertWiFiItems: DataStoreinsertWiFiItems;
  static readonly insertWiFiTSItems: DataStoreinsertWiFiTSItems;
  static readonly insertBTItems: DataStoreinsertBTItems;
  static readonly insertBTTSItems: DataStoreinsertBTTSItems;
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

export class DataStoreClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  insertWiFiItems(metadata?: grpc.Metadata): RequestStream<sense_core_datamodel_pb.WiFiFramePointMsg>;
  insertWiFiTSItems(metadata?: grpc.Metadata): RequestStream<sense_core_datamodel_pb.WiFiFrameTimeSerieMsg>;
  insertBTItems(metadata?: grpc.Metadata): RequestStream<sense_core_datamodel_pb.BTFramePointMsg>;
  insertBTTSItems(metadata?: grpc.Metadata): RequestStream<sense_core_datamodel_pb.BTFrameTimeSerieMsg>;
}

