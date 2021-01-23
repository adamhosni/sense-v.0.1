// package: sense
// file: sense_api_toolbox.proto

var sense_api_toolbox_pb = require("./sense_api_toolbox_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DeviceToolBox = (function () {
  function DeviceToolBox() {}
  DeviceToolBox.serviceName = "sense.DeviceToolBox";
  return DeviceToolBox;
}());

DeviceToolBox.ToolboxCommand = {
  methodName: "ToolboxCommand",
  service: DeviceToolBox,
  requestStream: false,
  responseStream: true,
  requestType: sense_api_toolbox_pb.ToolboxQuery,
  responseType: sense_api_toolbox_pb.ToolboxResult
};

exports.DeviceToolBox = DeviceToolBox;

function DeviceToolBoxClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DeviceToolBoxClient.prototype.toolboxCommand = function toolboxCommand(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DeviceToolBox.ToolboxCommand, {
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

exports.DeviceToolBoxClient = DeviceToolBoxClient;

