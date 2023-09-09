import AsyncStorage from "@react-native-async-storage/async-storage";
import { Player } from "@storage/DTOs";
import { PLAYERS_COLLECTION } from "@storage/collections";
import { AppError } from "@utils/AppError";
import uuid from "react-native-uuid";
import { getAllPlayers } from "./getAllPlayers.service";

//return Player or null

interface CreatePlayerProps {
    data: Player;
    team_id: string;
}

export const createPlayer = async ({
    data, team_id
}:CreatePlayerProps):Promise<Player >=> {
    try {
        
        const players = await getAllPlayers(team_id);
        const playerAlreadyExists = players.some((player:Player) => player.name === data.name);
        if(playerAlreadyExists) {
            throw new AppError('Já existe um jogador com esse nome', 400);
        }
        const newPlayer:Player = {
            ...data,
            id: uuid.v4() as string
        };
        const newPlayers = JSON.stringify([...players, newPlayer]);
        await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${team_id}`, newPlayers);
        return newPlayer;


    } catch (error) {
        throw error;
        
    }
};