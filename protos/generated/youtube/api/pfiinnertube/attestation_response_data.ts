// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: youtube/api/pfiinnertube/attestation_response_data.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "youtube.api.pfiinnertube";

export interface AttestationResponseData {
  challenge?: string | undefined;
  webResponse?: string | undefined;
  androidResponse?: string | undefined;
  iosResponse?: Uint8Array | undefined;
  error?: number | undefined;
  adblockReporting?: AttestationResponseData_AdblockReporting | undefined;
}

export interface AttestationResponseData_AdblockReporting {
  reportingStatus?: number | undefined;
  broadSpectrumDetectionResult?: number | undefined;
}

function createBaseAttestationResponseData(): AttestationResponseData {
  return {
    challenge: undefined,
    webResponse: undefined,
    androidResponse: undefined,
    iosResponse: undefined,
    error: undefined,
    adblockReporting: undefined,
  };
}

export const AttestationResponseData: MessageFns<AttestationResponseData> = {
  encode(message: AttestationResponseData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.challenge !== undefined) {
      writer.uint32(10).string(message.challenge);
    }
    if (message.webResponse !== undefined) {
      writer.uint32(18).string(message.webResponse);
    }
    if (message.androidResponse !== undefined) {
      writer.uint32(26).string(message.androidResponse);
    }
    if (message.iosResponse !== undefined) {
      writer.uint32(34).bytes(message.iosResponse);
    }
    if (message.error !== undefined) {
      writer.uint32(40).int32(message.error);
    }
    if (message.adblockReporting !== undefined) {
      AttestationResponseData_AdblockReporting.encode(message.adblockReporting, writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AttestationResponseData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestationResponseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.challenge = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.webResponse = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.androidResponse = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.iosResponse = reader.bytes();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.error = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.adblockReporting = AttestationResponseData_AdblockReporting.decode(reader, reader.uint32());
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

function createBaseAttestationResponseData_AdblockReporting(): AttestationResponseData_AdblockReporting {
  return { reportingStatus: undefined, broadSpectrumDetectionResult: undefined };
}

export const AttestationResponseData_AdblockReporting: MessageFns<AttestationResponseData_AdblockReporting> = {
  encode(message: AttestationResponseData_AdblockReporting, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.reportingStatus !== undefined) {
      writer.uint32(8).uint64(message.reportingStatus);
    }
    if (message.broadSpectrumDetectionResult !== undefined) {
      writer.uint32(16).uint64(message.broadSpectrumDetectionResult);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AttestationResponseData_AdblockReporting {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestationResponseData_AdblockReporting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.reportingStatus = longToNumber(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.broadSpectrumDetectionResult = longToNumber(reader.uint64());
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

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
