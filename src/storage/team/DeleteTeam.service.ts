import { Team } from "@storage/DTOs";
import { getAllTeams } from "./GetAllTeams.service";
import { PLAYERS_COLLECTION, TEAM_COLLECTION } from "@storage/collections";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

export const deleteTeam = async (team_id:string) => {
    try {
        const teams = await getAllTeams();
        
        const teamExists = teams.some((team:Team) => team.id === team_id);
        if(!teamExists) {
            throw new AppError('Não existe um time com esse ID', 404);
        }
        const newTeams = teams.filter((team:Team) => team.id !== team_id);
        await AsyncStorage.removeItem(`${PLAYERS_COLLECTION}-${team_id}`);
        await AsyncStorage.setItem(TEAM_COLLECTION, JSON.stringify(newTeams));
        return newTeams;
    } catch (error) {
        throw error;
    }
};