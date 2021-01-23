// package: sense
// file: sense_api_toolbox.proto

import * as sense_api_toolbox_pb from "./sense_api_toolbox_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DeviceToolBoxToolboxCommand = {
  readonly methodName: string;
  readonly service: typeof DeviceToolBox;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof sense_api_toolbox_pb.ToolboxQuery;
  readonly responseType: typeof sense_api_toolbox_pb.ToolboxResult;
};

export class DeviceToolBox {
  static readonly serviceName: string;
  static readonly ToolboxCommand: DeviceToolBoxToolboxCommand;
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

export class DeviceToolBoxClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  toolboxCommand(requestMessage: sense_api_toolbox_pb.ToolboxQuery, metadata?: grpc.Metadata): ResponseStream<sense_api_toolbox_pb.ToolboxResult>;
}

