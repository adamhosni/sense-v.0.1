// package: sense
// file: sense_api_dataquery.proto

var sense_api_dataquery_pb = require("./sense_api_dataquery_pb");
var sense_core_datamodel_pb = require("./sense_core_datamodel_pb");
var sense_core_datarequest_pb = require("./sense_core_datarequest_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DataQuery = (function () {
  function DataQuery() {}
  DataQuery.serviceName = "sense.DataQuery";
  return DataQuery;
}());

DataQuery.fetchAPItems = {
  methodName: "fetchAPItems",
  service: DataQuery,
  requestStream: false,
  responseStream: true,
  requestType: sense_core_datarequest_pb.APQuery,
  responseType: sense_core_datamodel_pb.AccessPointsReplyMsg
};

DataQuery.fetchAPDetails = {
  methodName: "fetchAPDetails",
  service: DataQuery,
  requestStream: false,
  responseStream: true,
  requestType: sense_core_datarequest_pb.APQuery,
  responseType: sense_core_datamodel_pb.WiFiFramePointMsg
};

DataQuery.fetchWiFiItems = {
  methodName: "fetchWiFiItems",
  service: DataQuery,
  requestStream: false,
  responseStream: true,
  requestType: sense_core_datarequest_pb.WiFiFrameQuery,
  responseType: sense_core_datamodel_pb.WiFiFramePointMsg
};

DataQuery.fetchWiFiTSItems = {
  methodName: "fetchWiFiTSItems",
  service: DataQuery,
  requestStream: false,
  responseStream: true,
  requestType: sense_core_datarequest_pb.WiFiFrameQuery,
  responseType: sense_core_datamodel_pb.WiFiFrameTimeSerieMsg
};

DataQuery.fetchBTItems = {
  methodName: "fetchBTItems",
  service: DataQuery,
  requestStream: false,
  responseStream: true,
  requestType: sense_core_datarequest_pb.BTFrameQuery,
  responseType: sense_core_datamodel_pb.BTFramePointMsg
};

DataQuery.fetchBTTSItems = {
  methodName: "fetchBTTSItems",
  service: DataQuery,
  requestStream: false,
  responseStream: true,
  requestType: sense_core_datarequest_pb.BTFrameQuery,
  responseType: sense_core_datamodel_pb.BTFrameTimeSerieMsg
};

exports.DataQuery = DataQuery;

function DataQueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DataQueryClient.prototype.fetchAPItems = function fetchAPItems(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DataQuery.fetchAPItems, {
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

DataQueryClient.prototype.fetchAPDetails = function fetchAPDetails(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DataQuery.fetchAPDetails, {
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

DataQueryClient.prototype.fetchWiFiItems = function fetchWiFiItems(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DataQuery.fetchWiFiItems, {
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

DataQueryClient.prototype.fetchWiFiTSItems = function fetchWiFiTSItems(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DataQuery.fetchWiFiTSItems, {
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

DataQueryClient.prototype.fetchBTItems = function fetchBTItems(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DataQuery.fetchBTItems, {
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

DataQueryClient.prototype.fetchBTTSItems = function fetchBTTSItems(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DataQuery.fetchBTTSItems, {
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

exports.DataQueryClient = DataQueryClient;

