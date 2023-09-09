import { Team } from "@storage/DTOs";
import { getAllTeams } from "./GetAllTeams.service";
import { AppError } from "@utils/AppError";

export const GetTeamById = async (id:string):Promise<Team | null > => {
    try {
        const teams = await getAllTeams();
    const team = teams.find(team => team.id === id);
    if(!team) {
        throw new AppError('Não encontramos um time com esse ID', 404);
    }
    
    return team || null;
    } catch (error) {
        throw error;
    }
};