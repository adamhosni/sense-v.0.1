// package: sense
// file: sense_api_advanced.proto

var sense_api_advanced_pb = require("./sense_api_advanced_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AdvancedService = (function () {
  function AdvancedService() {}
  AdvancedService.serviceName = "sense.AdvancedService";
  return AdvancedService;
}());

AdvancedService.DeviceRestart = {
  methodName: "DeviceRestart",
  service: AdvancedService,
  requestStream: false,
  responseStream: false,
  requestType: sense_api_advanced_pb.TriggerRequest,
  responseType: google_protobuf_empty_pb.Empty
};

AdvancedService.DeviceFactoryReset = {
  methodName: "DeviceFactoryReset",
  service: AdvancedService,
  requestStream: false,
  responseStream: false,
  requestType: sense_api_advanced_pb.TriggerRequest,
  responseType: google_protobuf_empty_pb.Empty
};

AdvancedService.DeviceWebServerTrigger = {
  methodName: "DeviceWebServerTrigger",
  service: AdvancedService,
  requestStream: false,
  responseStream: false,
  requestType: sense_api_advanced_pb.TriggerRequest,
  responseType: google_protobuf_empty_pb.Empty
};

exports.AdvancedService = AdvancedService;

function AdvancedServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AdvancedServiceClient.prototype.deviceRestart = function deviceRestart(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdvancedService.DeviceRestart, {
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

AdvancedServiceClient.prototype.deviceFactoryReset = function deviceFactoryReset(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdvancedService.DeviceFactoryReset, {
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

AdvancedServiceClient.prototype.deviceWebServerTrigger = function deviceWebServerTrigger(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AdvancedService.DeviceWebServerTrigger, {
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

exports.AdvancedServiceClient = AdvancedServiceClient;

