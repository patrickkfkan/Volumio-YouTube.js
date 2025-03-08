// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.29.2
// source: youtube/api/pfiinnertube/service_integrity_dimensions.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "youtube.api.pfiinnertube";

export interface ServiceIntegrityDimensions {
  poToken?: Uint8Array | undefined;
}

function createBaseServiceIntegrityDimensions(): ServiceIntegrityDimensions {
  return { poToken: undefined };
}

export const ServiceIntegrityDimensions: MessageFns<ServiceIntegrityDimensions> = {
  encode(message: ServiceIntegrityDimensions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.poToken !== undefined) {
      writer.uint32(10).bytes(message.poToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ServiceIntegrityDimensions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceIntegrityDimensions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.poToken = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
