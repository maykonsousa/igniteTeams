import AsyncStorage from '@react-native-async-storage/async-storage';
import { Team } from '@storage/DTOs';
import { TEAM_COLLECTION } from '@storage/collections';



export const getAllTeams = async ():Promise<Team[]> => {
    try {
        const teams = await AsyncStorage.getItem(TEAM_COLLECTION);
        const parsedTeams:Team[] = teams ? JSON.parse(teams) : [];
        return parsedTeams;
    } catch (error) {
        throw error;
    }
};