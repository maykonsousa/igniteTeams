import AsyncStorage from "@react-native-async-storage/async-storage";
import { Player } from "@storage/DTOs";
import { PLAYERS_COLLECTION } from "@storage/collections";

export const getAllPlayers = async (team_id: string):Promise<Player[]> => {
 try {
    const storage = await AsyncStorage.getItem(`${PLAYERS_COLLECTION}-${team_id}`);
    const players = storage ? JSON.parse(storage) : [];
    return players
 } catch (error) {
    throw error;
 }

};