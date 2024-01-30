import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchAllPlayers } from '../API/ajaxHelpers';

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllPlayers();
        setPlayers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleViewDetails = (playerId) => {
    navigate(`/players/${playerId}`);
  };


  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player) => (
          <div key={player.id}>
            <h4>{player.name}</h4>
            <p>Email: {player.email}</p>
            <button onClick={() => handleViewDetails(player.id)}>
                View Details
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AllPlayers;
