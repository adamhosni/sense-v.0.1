// package: sense
// file: sense_api_settings.proto

var sense_api_settings_pb = require("./sense_api_settings_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DeviceSettings = (function () {
  function DeviceSettings() {}
  DeviceSettings.serviceName = "sense.DeviceSettings";
  return DeviceSettings;
}());

DeviceSettings.DeviceInfo = {
  methodName: "DeviceInfo",
  service: DeviceSettings,
  requestStream: false,
  responseStream: false,
  requestType: sense_api_settings_pb.DeviceInfoMessage,
  responseType: sense_api_settings_pb.DeviceInfoMessage
};

DeviceSettings.DeviceDiagnostics = {
  methodName: "DeviceDiagnostics",
  service: DeviceSettings,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: sense_api_settings_pb.DeviceDiagnosticsMessage
};

DeviceSettings.DeviceConfig = {
  methodName: "DeviceConfig",
  service: DeviceSettings,
  requestStream: false,
  responseStream: false,
  requestType: sense_api_settings_pb.DeviceConfigMessage,
  responseType: sense_api_settings_pb.DeviceConfigMessage
};

exports.DeviceSettings = DeviceSettings;

function DeviceSettingsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DeviceSettingsClient.prototype.deviceInfo = function deviceInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeviceSettings.DeviceInfo, {
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

DeviceSettingsClient.prototype.deviceDiagnostics = function deviceDiagnostics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeviceSettings.DeviceDiagnostics, {
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

DeviceSettingsClient.prototype.deviceConfig = function deviceConfig(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(DeviceSettings.DeviceConfig, {
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

exports.DeviceSettingsClient = DeviceSettingsClient;

