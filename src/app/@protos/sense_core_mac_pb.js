// source: sense_core_mac.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.sense.TargetListRequest', null, global);
goog.exportSymbol('proto.sense.TargetListRequest.Type', null, global);
goog.exportSymbol('proto.sense.TargetListResponse', null, global);
goog.exportSymbol('proto.sense.TargetListResponse.MacStruct', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sense.TargetListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sense.TargetListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sense.TargetListRequest.displayName = 'proto.sense.TargetListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sense.TargetListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.sense.TargetListResponse.repeatedFields_, null);
};
goog.inherits(proto.sense.TargetListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sense.TargetListResponse.displayName = 'proto.sense.TargetListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.sense.TargetListResponse.MacStruct = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.sense.TargetListResponse.MacStruct, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.sense.TargetListResponse.MacStruct.displayName = 'proto.sense.TargetListResponse.MacStruct';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sense.TargetListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.sense.TargetListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sense.TargetListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sense.TargetListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    typemac: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sense.TargetListRequest}
 */
proto.sense.TargetListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sense.TargetListRequest;
  return proto.sense.TargetListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sense.TargetListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sense.TargetListRequest}
 */
proto.sense.TargetListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.sense.TargetListRequest.Type} */ (reader.readEnum());
      msg.setTypemac(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sense.TargetListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sense.TargetListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sense.TargetListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sense.TargetListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypemac();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.sense.TargetListRequest.Type = {
  NONE: 0,
  WIFI: 1,
  BLTH: 2,
  AP: 3
};

/**
 * optional Type typeMAC = 1;
 * @return {!proto.sense.TargetListRequest.Type}
 */
proto.sense.TargetListRequest.prototype.getTypemac = function() {
  return /** @type {!proto.sense.TargetListRequest.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.sense.TargetListRequest.Type} value
 * @return {!proto.sense.TargetListRequest} returns this
 */
proto.sense.TargetListRequest.prototype.setTypemac = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.sense.TargetListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sense.TargetListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.sense.TargetListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sense.TargetListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sense.TargetListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    targetmacList: jspb.Message.toObjectList(msg.getTargetmacList(),
    proto.sense.TargetListResponse.MacStruct.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sense.TargetListResponse}
 */
proto.sense.TargetListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sense.TargetListResponse;
  return proto.sense.TargetListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sense.TargetListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sense.TargetListResponse}
 */
proto.sense.TargetListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.sense.TargetListResponse.MacStruct;
      reader.readMessage(value,proto.sense.TargetListResponse.MacStruct.deserializeBinaryFromReader);
      msg.addTargetmac(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sense.TargetListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sense.TargetListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sense.TargetListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sense.TargetListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetmacList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.sense.TargetListResponse.MacStruct.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.sense.TargetListResponse.MacStruct.prototype.toObject = function(opt_includeInstance) {
  return proto.sense.TargetListResponse.MacStruct.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.sense.TargetListResponse.MacStruct} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sense.TargetListResponse.MacStruct.toObject = function(includeInstance, msg) {
  var f, obj = {
    addrmac: jspb.Message.getFieldWithDefault(msg, 1, ""),
    markdeletion: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.sense.TargetListResponse.MacStruct}
 */
proto.sense.TargetListResponse.MacStruct.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.sense.TargetListResponse.MacStruct;
  return proto.sense.TargetListResponse.MacStruct.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.sense.TargetListResponse.MacStruct} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.sense.TargetListResponse.MacStruct}
 */
proto.sense.TargetListResponse.MacStruct.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddrmac(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMarkdeletion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.sense.TargetListResponse.MacStruct.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.sense.TargetListResponse.MacStruct.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.sense.TargetListResponse.MacStruct} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.sense.TargetListResponse.MacStruct.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddrmac();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarkdeletion();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string addrMAC = 1;
 * @return {string}
 */
proto.sense.TargetListResponse.MacStruct.prototype.getAddrmac = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.sense.TargetListResponse.MacStruct} returns this
 */
proto.sense.TargetListResponse.MacStruct.prototype.setAddrmac = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool markDeletion = 2;
 * @return {boolean}
 */
proto.sense.TargetListResponse.MacStruct.prototype.getMarkdeletion = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.sense.TargetListResponse.MacStruct} returns this
 */
proto.sense.TargetListResponse.MacStruct.prototype.setMarkdeletion = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated MacStruct targetMAC = 1;
 * @return {!Array<!proto.sense.TargetListResponse.MacStruct>}
 */
proto.sense.TargetListResponse.prototype.getTargetmacList = function() {
  return /** @type{!Array<!proto.sense.TargetListResponse.MacStruct>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.sense.TargetListResponse.MacStruct, 1));
};


/**
 * @param {!Array<!proto.sense.TargetListResponse.MacStruct>} value
 * @return {!proto.sense.TargetListResponse} returns this
*/
proto.sense.TargetListResponse.prototype.setTargetmacList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.sense.TargetListResponse.MacStruct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.sense.TargetListResponse.MacStruct}
 */
proto.sense.TargetListResponse.prototype.addTargetmac = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.sense.TargetListResponse.MacStruct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.sense.TargetListResponse} returns this
 */
proto.sense.TargetListResponse.prototype.clearTargetmacList = function() {
  return this.setTargetmacList([]);
};


goog.object.extend(exports, proto.sense);
