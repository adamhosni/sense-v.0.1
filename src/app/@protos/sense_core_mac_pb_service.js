// package: sense
// file: sense_core_mac.proto

var sense_core_mac_pb = require("./sense_core_mac_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TargetListQueryService = (function () {
  function TargetListQueryService() {}
  TargetListQueryService.serviceName = "sense.TargetListQueryService";
  return TargetListQueryService;
}());

TargetListQueryService.TargetFullReadQuery = {
  methodName: "TargetFullReadQuery",
  service: TargetListQueryService,
  requestStream: false,
  responseStream: false,
  requestType: sense_core_mac_pb.TargetListRequest,
  responseType: sense_core_mac_pb.TargetListResponse
};

TargetListQueryService.TargetDeltaReadQuery = {
  methodName: "TargetDeltaReadQuery",
  service: TargetListQueryService,
  requestStream: false,
  responseStream: false,
  requestType: sense_core_mac_pb.TargetListRequest,
  responseType: sense_core_mac_pb.TargetListResponse
};

exports.TargetListQueryService = TargetListQueryService;

function TargetListQueryServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TargetListQueryServiceClient.prototype.targetFullReadQuery = function targetFullReadQuery(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TargetListQueryService.TargetFullReadQuery, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TargetListQueryServiceClient.prototype.targetDeltaReadQuery = function targetDeltaReadQuery(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TargetListQueryService.TargetDeltaReadQuery, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.TargetListQueryServiceClient = TargetListQueryServiceClient;

