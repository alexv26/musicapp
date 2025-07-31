import React, { useState } from "react";
import { MotionConfig, motion } from "motion/react";
import AlbumTile from "../components/AlbumTile";

export default function ExplorePage() {
  const album = {};
  return (
    <div className="flex place-content-center gap-4 flex-wrap w-full h-full flex-row mt-4">
      <AlbumTile />
    </div>
  );
}
