import AsyncStorage from "@react-native-async-storage/async-storage";
import { TEAM_COLLECTION } from "@storage/collections";
import uuid from "react-native-uuid";
import { getAllTeams } from "./GetAllTeams.service";
import { AppError } from "@utils/AppError";
import { Team } from "@storage/DTOs";



export const createNewTeam = async (teamName: string):Promise<Team> => {
    try {
        const teams = await getAllTeams();
        const alreadyExists = teams.some((team:Team) => team.name === teamName);

        if(alreadyExists) {
            throw new AppError('Já existe um time com esse nome', 400);
        }

        const newTeam:Team = {
            id: uuid.v4() as string,
            name: teamName,
           
        };


        await AsyncStorage.setItem(TEAM_COLLECTION, JSON.stringify([...teams, newTeam]));
        return newTeam;
        
    } catch (error) {
        throw error;
        
    }
};