import  { useState, useEffect } from "react";

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

export const PlayerCard = ({ player }: { player: PlayerData }) => {
    return (
      <div className={`card-wrapper tier-${getPlayerTier(player.overallRating)}`}>
        <div className="card">
          {/* Top Header: Rating, Position, Tier Badge, and Club */}
          <div className="card-header">
            <div>
              <div className="card-rating">{player.overallRating}</div>
              <div className="card-position">{player.position}</div>
            </div>
            <div className="card-header-right">
              <div className="card-tier-badge">
                {getPlayerTier(player.overallRating).toUpperCase()}
              </div>
              <div className="card-club">{player.club}</div>
            </div>
          </div>
  
          {/* Player Image */}
          <div className="card-image-wrap">
            <img src={player.imageUrl} alt={`${player.name} headshot`} className="card-image" />
          </div>
  
          {/* Player Name Banner */}
          <div className="card-name-strip">
            <span className="card-name">{player.name}</span>
          </div>
  
          {/* Player Statistics Grid */}
          <div className="card-stats">
            {/* Left Stats Column: Pace, Shooting, Passing */}
            <div className="stat-col">
              <div className="stat-row">
                <span className="stat-value">{player.pac}</span>
                <span className="stat-label">PAC</span>
              </div>
              <div className="stat-row">
                <span className="stat-value">{player.sho}</span>
                <span className="stat-label">SHO</span>
              </div>
              <div className="stat-row">
                <span className="stat-value">{player.pas}</span>
                <span className="stat-label">PAS</span>
              </div>
            </div>
  
            <div className="stat-divider" />
  
            {/* Right Stats Column: Dribbling, Defending, Physical */}
            <div className="stat-col">
              <div className="stat-row">
                <span className="stat-value">{player.dri}</span>
                <span className="stat-label">DRI</span>
              </div>
              <div className="stat-row">
                <span className="stat-value">{player.def}</span>
                <span className="stat-label">DEF</span>
              </div>
              <div className="stat-row">
                <span className="stat-value">{player.phy}</span>
                <span className="stat-label">PHY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  /**
   * Default player profile used as fallback or initial template (Pelé).
   */
  const defaultPlayer: PlayerData = {
    name: "PELE",
    overallRating: 98,
    position: "ST",
    club: "Santos FC",
    imageUrl: "https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg",
    pac: 97,
    sho: 98,
    pas: 83,
    dri: 99,
    def: 41,
    phy: 75,
  };
  
  /**
   * Safely loads saved player data from localStorage.
   * Merges loaded data with defaults to ensure all required fields are present.
   *
   * @returns PlayerData object loaded from persistence or default fallback.
   */
  function loadPlayer(): PlayerData {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return {
          ...defaultPlayer, 
          ...JSON.parse(saved) 
        };
      }
    } catch (error) {
      console.log("Failed to load player data, using defaults:", error);
    }
    return defaultPlayer;
  }
  
  /**
   * Main application component providing interactive form inputs
   * alongside a live preview of the generated player card.
   */
  export const FootballPlayerCard = () => {
    // Initialize state using lazy load function from localStorage
    const [player, setPlayer] = useState<PlayerData>(loadPlayer);
  
    // Sync player state changes to browser's localStorage
    useEffect(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
      } catch (error) {
        console.log("Failed to save player data:", error);
      }
    }, [player]);
  
    return (
      <div className="page">
        {/* App Header */}
        <header className="header">
          <div className="header-inner">
            <p className="header-title">Football Card Builder</p>
            <p className="header-subtitle">Customize your player card</p>
          </div>
        </header>
  
        {/* Main Builder Interface */}
        <main className="main">
          <div className="layout">
            {/* Form Controls Panel */}
            <div className="form-panel">
              {/* General Info Controls */}
              <div>
                <p className="form-section-title">Player Info</p>
                
                {/* Name Input */}
                <div className="form-group">
                  <label className="label" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    className="input"
                    type="text"
                    value={player.name}
                    onChange={(e) =>
                      setPlayer({ ...player, name: e.target.value })
                    }
                  />
                </div>
  
                {/* Position and Overall Rating Row */}
                <div className="form-row">
                  <div className="form-group">
                    <label className="label" htmlFor="position">
                      Position
                    </label>
                    <select
                      id="position"
                      className="input"
                      value={player.position}
                      onChange={(e) => 
                        setPlayer({ ...player, position: e.target.value as Position })}
                    >
                      {POSITIONS.map((pos) => (
                        <option key={pos} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>
  
                  <div className="form-group">
                    <label className="label" htmlFor="overallRating">
                      Overall
                    </label>
                    <input
                      id="overallRating"
                      className="input"
                      type="number"
                      value={player.overallRating}
                      onChange={(e) =>
                        setPlayer({
                          ...player,
                          overallRating: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
  
                {/* Club Input */}
                <div className="form-group">
                  <label className="label" htmlFor="club">
                    Club
                  </label>
                  <input
                    id="club"
                    className="input"
                    type="text"
                    value={player.club}
                    onChange={(e) =>
                      setPlayer({ ...player, club: e.target.value })
                    }
                  />
                </div>
  
                {/* Image URL Input */}
                <div className="form-group">
                  <label className="label" htmlFor="imageUrl">
                    Image URL
                  </label>
                  <input
                    id="imageUrl"
                    className="input"
                    type="text"
                    value={player.imageUrl}
                    onChange={(e) =>
                      setPlayer({ ...player, imageUrl: e.target.value })
                    }
                  />
                </div>
              </div>
  
              {/* Individual Attributes/Stats Inputs */}
              <div>
                <p className="form-section-title">Player Stats</p>
                <div className="stats-grid">
                  {/* Pace */}
                  <div className="form-group">
                    <label className="label" htmlFor="pac">
                      PAC
                    </label>
                    <input
                      id="pac"
                      className="input"
                      type="number"
                      value={player.pac}
                      onChange={(e) =>
                        setPlayer({ ...player, pac: Number(e.target.value) })
                      }
                    />
                  </div>
  
                  {/* Shooting */}
                  <div className="form-group">
                    <label className="label" htmlFor="sho">
                      SHO
                    </label>
                    <input
                      id="sho"
                      className="input"
                      type="number"
                      value={player.sho}
                      onChange={(e) =>
                        setPlayer({ ...player, sho: Number(e.target.value) })
                      }
                    />
                  </div>
  
                  {/* Passing */}
                  <div className="form-group">
                    <label className="label" htmlFor="pas">
                      PAS
                    </label>
                    <input
                      id="pas"
                      className="input"
                      type="number"
                      value={player.pas}
                      onChange={(e) =>
                        setPlayer({ ...player, pas: Number(e.target.value) })
                      }
                    />
                  </div>
  
                  {/* Dribbling */}
                  <div className="form-group">
                    <label className="label" htmlFor="dri">
                      DRI
                    </label>
                    <input
                      id="dri"
                      className="input"
                      type="number"
                      value={player.dri}
                      onChange={(e) =>
                        setPlayer({ ...player, dri: Number(e.target.value) })
                      }
                    />
                  </div>
  
                  {/* Defending */}
                  <div className="form-group">
                    <label className="label" htmlFor="def">
                      DEF
                    </label>
                    <input
                      id="def"
                      className="input"
                      type="number"
                      value={player.def}
                      onChange={(e) =>
                        setPlayer({ ...player, def: Number(e.target.value) })
                      }
                    />
                  </div>
  
                  {/* Physicality */}
                  <div className="form-group">
                    <label className="label" htmlFor="phy">
                      PHY
                    </label>
                    <input
                      id="phy"
                      className="input"
                      type="number"
                      value={player.phy}
                      onChange={(e) =>
                        setPlayer({ ...player, phy: Number(e.target.value) })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
  
            {/* Live Preview Panel */}
            <div className="preview-panel">
              <p className="preview-label">Live Preview</p>
              <p className="preview-hint">Updates as you type</p>
              <div
                className={`preview-box tier-${getPlayerTier(player.overallRating)}`}
              >
                <PlayerCard player={player} />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };