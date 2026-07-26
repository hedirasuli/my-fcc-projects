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

/**
 * Key used for storing and retrieving player data from browser's localStorage.
 */
const STORAGE_KEY = "football_player_card";

/**
 * Determines the tier tier-category based on the player's overall rating.
 *
 * @param rating - The overall rating score of the player.
 * @returns Tier string ("elite", "gold", "silver", or "bronze").
 */
export function getPlayerTier(rating: number): string {
  if (rating >= 92) return "elite";
  if (rating >= 85) return "gold";
  if (rating >= 75) return "silver";
  return "bronze";
}

/**
 * UI Component that renders the visual Football Card for a given player.
 *
 * @param props - Component props containing player object.
 */