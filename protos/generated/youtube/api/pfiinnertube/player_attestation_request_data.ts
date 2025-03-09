// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.29.2
// source: youtube/api/pfiinnertube/player_attestation_request_data.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "youtube.api.pfiinnertube";

export interface PlayerAttestationRequestData {
  iosguardRequest?: PlayerAttestationRequestData_IosguardChallengeRequestData | undefined;
  omitBotguardData?: boolean | undefined;
}

export interface PlayerAttestationRequestData_IosguardChallengeRequestData {
  challengeRequest?: Uint8Array | undefined;
}

function createBasePlayerAttestationRequestData(): PlayerAttestationRequestData {
  return { iosguardRequest: undefined, omitBotguardData: undefined };
}

export const PlayerAttestationRequestData: MessageFns<PlayerAttestationRequestData> = {
  encode(message: PlayerAttestationRequestData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.iosguardRequest !== undefined) {
      PlayerAttestationRequestData_IosguardChallengeRequestData.encode(
        message.iosguardRequest,
        writer.uint32(10).fork(),
      ).join();
    }
    if (message.omitBotguardData !== undefined) {
      writer.uint32(16).bool(message.omitBotguardData);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerAttestationRequestData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerAttestationRequestData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.iosguardRequest = PlayerAttestationRequestData_IosguardChallengeRequestData.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.omitBotguardData = reader.bool();
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

function createBasePlayerAttestationRequestData_IosguardChallengeRequestData(): PlayerAttestationRequestData_IosguardChallengeRequestData {
  return { challengeRequest: undefined };
}

export const PlayerAttestationRequestData_IosguardChallengeRequestData: MessageFns<
  PlayerAttestationRequestData_IosguardChallengeRequestData
> = {
  encode(
    message: PlayerAttestationRequestData_IosguardChallengeRequestData,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.challengeRequest !== undefined) {
      writer.uint32(10).bytes(message.challengeRequest);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PlayerAttestationRequestData_IosguardChallengeRequestData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerAttestationRequestData_IosguardChallengeRequestData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.challengeRequest = reader.bytes();
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
