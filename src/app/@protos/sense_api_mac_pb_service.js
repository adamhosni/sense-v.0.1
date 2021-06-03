// package: sense
// file: sense_api_mac.proto

var sense_api_mac_pb = require("./sense_api_mac_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var sense_core_mac_data_pb = require("./sense_core_mac_data_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TargetListUpdateService = (function () {
  function TargetListUpdateService() {}
  TargetListUpdateService.serviceName = "sense.TargetListUpdateService";
  return TargetListUpdateService;
}());

TargetListUpdateService.TargetCreateQuery = {
  methodName: "TargetCreateQuery",
  service: TargetListUpdateService,
  requestStream: false,
  responseStream: false,
  requestType: sense_core_mac_data_pb.TargetUpdateRequest,
  responseType: google_protobuf_empty_pb.Empty
};

TargetListUpdateService.TargetDeleteQuery = {
  methodName: "TargetDeleteQuery",
  service: TargetListUpdateService,
  requestStream: false,
  responseStream: false,
  requestType: sense_core_mac_data_pb.TargetUpdateRequest,
  responseType: google_protobuf_empty_pb.Empty
};

TargetListUpdateService.TargetReadQuery = {
  methodName: "TargetReadQuery",
  service: TargetListUpdateService,
  requestStream: false,
  responseStream: false,
  requestType: sense_core_mac_data_pb.TargetListRequest,
  responseType: sense_core_mac_data_pb.TargetListResponse
};

exports.TargetListUpdateService = TargetListUpdateService;

function TargetListUpdateServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TargetListUpdateServiceClient.prototype.targetCreateQuery = function targetCreateQuery(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TargetListUpdateService.TargetCreateQuery, {
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

TargetListUpdateServiceClient.prototype.targetDeleteQuery = function targetDeleteQuery(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TargetListUpdateService.TargetDeleteQuery, {
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

TargetListUpdateServiceClient.prototype.targetReadQuery = function targetReadQuery(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TargetListUpdateService.TargetReadQuery, {
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

exports.TargetListUpdateServiceClient = TargetListUpdateServiceClient;

