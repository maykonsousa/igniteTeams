import AsyncStorage from "@react-native-async-storage/async-storage";
import { Player } from "@storage/DTOs";
import { PLAYERS_COLLECTION } from "@storage/collections";
import { AppError } from "@utils/AppError";

interface DeletePlayerByIdProps {
    id: string;
    team_id: string;
}

export const deletePlayerById = async ({id, team_id}:DeletePlayerByIdProps) => {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYERS_COLLECTION}-${team_id}`);
    const players = storage ? JSON.parse(storage) : [];
    const playerExists = players.some((player: Player) => player.id === id);
    if (!playerExists) {
      throw new AppError("Jogador não encontrado", 404);
    }
    const newPlayers = players.filter((player: Player) => player.id !== id);
    await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${team_id}`, JSON.stringify(newPlayers));
  } catch (error) {
    throw error;
  }
}