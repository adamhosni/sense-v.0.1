// package: sense
// file: sense_core_datastore.proto

var sense_core_datastore_pb = require("./sense_core_datastore_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var sense_core_datamodel_pb = require("./sense_core_datamodel_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DataStore = (function () {
  function DataStore() {}
  DataStore.serviceName = "sense.DataStore";
  return DataStore;
}());

DataStore.insertWiFiItems = {
  methodName: "insertWiFiItems",
  service: DataStore,
  requestStream: true,
  responseStream: false,
  requestType: sense_core_datamodel_pb.WiFiFramePointMsg,
  responseType: google_protobuf_empty_pb.Empty
};

DataStore.insertWiFiTSItems = {
  methodName: "insertWiFiTSItems",
  service: DataStore,
  requestStream: true,
  responseStream: false,
  requestType: sense_core_datamodel_pb.WiFiFrameTimeSerieMsg,
  responseType: google_protobuf_empty_pb.Empty
};

DataStore.insertBTItems = {
  methodName: "insertBTItems",
  service: DataStore,
  requestStream: true,
  responseStream: false,
  requestType: sense_core_datamodel_pb.BTFramePointMsg,
  responseType: google_protobuf_empty_pb.Empty
};

DataStore.insertBTTSItems = {
  methodName: "insertBTTSItems",
  service: DataStore,
  requestStream: true,
  responseStream: false,
  requestType: sense_core_datamodel_pb.BTFrameTimeSerieMsg,
  responseType: google_protobuf_empty_pb.Empty
};

exports.DataStore = DataStore;

function DataStoreClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DataStoreClient.prototype.insertWiFiItems = function insertWiFiItems(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(DataStore.insertWiFiItems, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

DataStoreClient.prototype.insertWiFiTSItems = function insertWiFiTSItems(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(DataStore.insertWiFiTSItems, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

DataStoreClient.prototype.insertBTItems = function insertBTItems(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(DataStore.insertBTItems, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

DataStoreClient.prototype.insertBTTSItems = function insertBTTSItems(metadata) {
  var listeners = {
    end: [],
    status: []
  };
  var client = grpc.client(DataStore.insertBTTSItems, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      if (!client.started) {
        client.start(metadata);
      }
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.DataStoreClient = DataStoreClient;

