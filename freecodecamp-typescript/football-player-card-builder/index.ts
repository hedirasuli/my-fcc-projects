import React, { useState, useEffect } from "react";

/**
 * Available positions for a football player.
 * Defined as a constant array with `as const` to infer literal union types.
 */
const POSITIONS = [
  "GK",
  "CB",
  "LB",
  "RB",
  "CDM",
  "CM",
  "CAM",
  "LW",
  "RW",
  "ST",
  "CF"
] as const;