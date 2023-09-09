import AsyncStorage from "@react-native-async-storage/async-storage";
import { Player } from "@storage/DTOs";
import { PLAYERS_COLLECTION } from "@storage/collections";
import { AppError } from "@utils/AppError";

interface GetPlayerByIdProps {
    id: string;
    team_id: string;
}

export const getPlayerById = async ({id, team_id}:GetPlayerByIdProps): Promise<Player> => {
    try {
      const storage = await AsyncStorage.getItem(`${PLAYERS_COLLECTION}-${team_id}`);
      const players = storage ? JSON.parse(storage) : [];
        const player = players.find((player:Player) => player.id === id);
        if(!player) {
            throw new AppError('Jogador não encontrado', 404);
        }
        return player;
    } catch (error) {
        throw error;
    }
};