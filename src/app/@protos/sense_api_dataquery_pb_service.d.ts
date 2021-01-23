// package: sense
// file: sense_api_dataquery.proto

import * as sense_api_dataquery_pb from "./sense_api_dataquery_pb";
import * as sense_core_datamodel_pb from "./sense_core_datamodel_pb";
import * as sense_core_datarequest_pb from "./sense_core_datarequest_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DataQueryfetchAPItems = {
  readonly methodName: string;
  readonly service: typeof DataQuery;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof sense_core_datarequest_pb.APQuery;
  readonly responseType: typeof sense_core_datamodel_pb.AccessPointsReplyMsg;
};

type DataQueryfetchAPDetails = {
  readonly methodName: string;
  readonly service: typeof DataQuery;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof sense_core_datarequest_pb.APQuery;
  readonly responseType: typeof sense_core_datamodel_pb.WiFiFramePointMsg;
};

type DataQueryfetchWiFiItems = {
  readonly methodName: string;
  readonly service: typeof DataQuery;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof sense_core_datarequest_pb.WiFiFrameQuery;
  readonly responseType: typeof sense_core_datamodel_pb.WiFiFramePointMsg;
};

type DataQueryfetchWiFiTSItems = {
  readonly methodName: string;
  readonly service: typeof DataQuery;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof sense_core_datarequest_pb.WiFiFrameQuery;
  readonly responseType: typeof sense_core_datamodel_pb.WiFiFrameTimeSerieMsg;
};

type DataQueryfetchBTItems = {
  readonly methodName: string;
  readonly service: typeof DataQuery;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof sense_core_datarequest_pb.BTFrameQuery;
  readonly responseType: typeof sense_core_datamodel_pb.BTFramePointMsg;
};

type DataQueryfetchBTTSItems = {
  readonly methodName: string;
  readonly service: typeof DataQuery;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof sense_core_datarequest_pb.BTFrameQuery;
  readonly responseType: typeof sense_core_datamodel_pb.BTFrameTimeSerieMsg;
};

export class DataQuery {
  static readonly serviceName: string;
  static readonly fetchAPItems: DataQueryfetchAPItems;
  static readonly fetchAPDetails: DataQueryfetchAPDetails;
  static readonly fetchWiFiItems: DataQueryfetchWiFiItems;
  static readonly fetchWiFiTSItems: DataQueryfetchWiFiTSItems;
  static readonly fetchBTItems: DataQueryfetchBTItems;
  static readonly fetchBTTSItems: DataQueryfetchBTTSItems;
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

export class DataQueryClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  fetchAPItems(requestMessage: sense_core_datarequest_pb.APQuery, metadata?: grpc.Metadata): ResponseStream<sense_core_datamodel_pb.AccessPointsReplyMsg>;
  fetchAPDetails(requestMessage: sense_core_datarequest_pb.APQuery, metadata?: grpc.Metadata): ResponseStream<sense_core_datamodel_pb.WiFiFramePointMsg>;
  fetchWiFiItems(requestMessage: sense_core_datarequest_pb.WiFiFrameQuery, metadata?: grpc.Metadata): ResponseStream<sense_core_datamodel_pb.WiFiFramePointMsg>;
  fetchWiFiTSItems(requestMessage: sense_core_datarequest_pb.WiFiFrameQuery, metadata?: grpc.Metadata): ResponseStream<sense_core_datamodel_pb.WiFiFrameTimeSerieMsg>;
  fetchBTItems(requestMessage: sense_core_datarequest_pb.BTFrameQuery, metadata?: grpc.Metadata): ResponseStream<sense_core_datamodel_pb.BTFramePointMsg>;
  fetchBTTSItems(requestMessage: sense_core_datarequest_pb.BTFrameQuery, metadata?: grpc.Metadata): ResponseStream<sense_core_datamodel_pb.BTFrameTimeSerieMsg>;
}

