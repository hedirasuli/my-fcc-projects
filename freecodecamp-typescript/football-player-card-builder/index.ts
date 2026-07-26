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

/**
 * Union type representing valid player positions derived from POSITIONS array.
 */
type Position = typeof POSITIONS[number];

/**
 * Interface defining the complete structure of player data.
 */
interface PlayerData {
  name: string;
  overallRating: number;
  position: string;
  club: string;
  imageUrl: string;
  pac: number; // Pace
  sho: number; // Shooting
  pas: number; // Passing
  dri: number; // Dribbling
  def: number; // Defending
  phy: number; // Physicality
}