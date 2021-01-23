// package: sense
// file: sense_api_iam.proto

var sense_api_iam_pb = require("./sense_api_iam_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var IAMService = (function () {
  function IAMService() {}
  IAMService.serviceName = "sense.IAMService";
  return IAMService;
}());

IAMService.Authenticate = {
  methodName: "Authenticate",
  service: IAMService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: sense_api_iam_pb.DeviceAuthResponse
};

exports.IAMService = IAMService;

function IAMServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

IAMServiceClient.prototype.authenticate = function authenticate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(IAMService.Authenticate, {
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

exports.IAMServiceClient = IAMServiceClient;

