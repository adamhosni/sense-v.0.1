// package: sense
// file: sense_api_update.proto

var sense_api_update_pb = require("./sense_api_update_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var UpdateService = (function () {
  function UpdateService() {}
  UpdateService.serviceName = "sense.UpdateService";
  return UpdateService;
}());

UpdateService.DeviceUpdateSettings = {
  methodName: "DeviceUpdateSettings",
  service: UpdateService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: sense_api_update_pb.DeviceUpdateConfigMessage
};

UpdateService.DeviceUpdateHost = {
  methodName: "DeviceUpdateHost",
  service: UpdateService,
  requestStream: false,
  responseStream: false,
  requestType: sense_api_update_pb.DeviceUpdateHostMessage,
  responseType: google_protobuf_empty_pb.Empty
};

UpdateService.DeviceUpdateAuto = {
  methodName: "DeviceUpdateAuto",
  service: UpdateService,
  requestStream: false,
  responseStream: false,
  requestType: sense_api_update_pb.DeviceUpdateAutoMessage,
  responseType: google_protobuf_empty_pb.Empty
};

UpdateService.DeviceUpdateTrigger = {
  methodName: "DeviceUpdateTrigger",
  service: UpdateService,
  requestStream: false,
  responseStream: true,
  requestType: sense_api_update_pb.DeviceUpdateTriggerMessage,
  responseType: sense_api_update_pb.DeviceUpdateProgressMessage
};

exports.UpdateService = UpdateService;

function UpdateServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

UpdateServiceClient.prototype.deviceUpdateSettings = function deviceUpdateSettings(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UpdateService.DeviceUpdateSettings, {
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

UpdateServiceClient.prototype.deviceUpdateHost = function deviceUpdateHost(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UpdateService.DeviceUpdateHost, {
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

UpdateServiceClient.prototype.deviceUpdateAuto = function deviceUpdateAuto(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(UpdateService.DeviceUpdateAuto, {
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

UpdateServiceClient.prototype.deviceUpdateTrigger = function deviceUpdateTrigger(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(UpdateService.DeviceUpdateTrigger, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.UpdateServiceClient = UpdateServiceClient;

