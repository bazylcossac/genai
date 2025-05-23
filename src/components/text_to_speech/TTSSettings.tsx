"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ActionType, InitialType } from "@/lib/types";

function TextToSpeechSettings({
  state,
  dispatch,
}: {
  state: InitialType;
  dispatch: React.ActionDispatch<[action: ActionType]>;
}) {
  return (
    <>
      <div className="">
        <p className="mb-2">Model</p>
        <Select
          required
          value={state.model}
          onValueChange={(value) =>
            dispatch({ type: "SET_MODEL", payload: value })
          }
        >
          <SelectTrigger className="w-[180px]  border-white/50">
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-700 text-white">
            <SelectItem value="gpt-4o-mini-tts">gp4-4o-mini-tts</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <p className="mb-2">Instructions</p>
        <textarea
          value={state.instructions}
          onChange={(e) =>
            dispatch({ type: "SET_INSTRUCTIONS", payload: e.target.value })
          }
          placeholder="Speak as native american..."
          className="w-full h-32 border-1 border-white/50 resize-none rounded-md p-2 outline-none  focus:border-green-300 focus:border-2 transition"
        ></textarea>
      </div>
      <div>
        <p className="mb-2">Voice</p>
        <Select
          required
          value={state.voice}
          onValueChange={(value) =>
            dispatch({ type: "SET_VOICE", payload: value })
          }
        >
          <SelectTrigger className="w-[180px] border-white/50">
            <SelectValue placeholder="Select voice" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-700 text-white ">
            <SelectItem value="alloy">Alloy</SelectItem>
            <SelectItem value="ash">Ash</SelectItem>
            <SelectItem value="ballad">Ballad</SelectItem>
            <SelectItem value="coral">Coral</SelectItem>
            <SelectItem value="echo">Echo</SelectItem>
            <SelectItem value="fable">Fable</SelectItem>
            <SelectItem value="onyx">Onyx</SelectItem>
            <SelectItem value="nova">Nova</SelectItem>
            <SelectItem value="sage">Sage</SelectItem>
            <SelectItem value="shimmer">Shimmer</SelectItem>
            <SelectItem value="verse">Verse</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <p className="mb-2">Response format</p>
        <Select
          value={state.responseFormat}
          required
          onValueChange={(value) =>
            dispatch({ type: "SET_FORMAT", payload: value as "mp3" | "wav" })
          }
        >
          <SelectTrigger className="w-[180px]  border-white/50">
            <SelectValue placeholder="Select format" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-700 text-white ">
            <SelectItem value="mp3">MP3</SelectItem>
            <SelectItem value="wav">WAV</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

export default TextToSpeechSettings;
