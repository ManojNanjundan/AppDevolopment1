import React, { useState } from 'react';
import players from './Detail';
import './Vote.css';

const Vote= () => {
  const [playersData, setPlayersData] = useState(players);

  const handleVote = (id) => {
    const updatedPlayers = playersData.map((player) =>
      player.id === id ? { ...player, votes: player.votes + 1 } : player
    );
    setPlayersData(updatedPlayers);
  };

  return (
    <div className="voting-container">
      <h1>YOUR VOTE IS YOUR VOICE</h1>
      <ul>
        {playersData.map((player) => (
          <li key={player.id} className="player-item">
            <div className="player-info">
              {player.name} - Votes: {player.votes}
            </div>
            <button className="vote-button" onClick={() => handleVote(player.id)}>
              Vote
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vote;
