export const fetchSinglePlayer = async (playerId) => {
    try {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/players/${playerId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch player');
      }
      const player = await response.json();
      return player;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  