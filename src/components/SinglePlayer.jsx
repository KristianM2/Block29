import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePlayer } from '../API/ajaxHelpers';

const SinglePlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const playerData = await fetchSinglePlayer(id);
        setPlayer(playerData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayerDetails();
  }, [id]);

  if (!player) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{player.name}</h1>
      <p>Owner: {player.owner}</p>
      <p>Team Name: {player.teamName}</p>
      {/* Render other player details here */}
    </div>
  );
};

export default SinglePlayer;
