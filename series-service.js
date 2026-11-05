import { title } from "node:process";

//a1
export function getEpisodeTitle(show, seasonIndex, episodeIndex) 
{
    return show.seasons[seasonIndex].episodes[episodeIndex].title; //to get the episode title
}
//a2
export function getLastSeasonNumber(show) 
{
    return show.seasons.length === 0? 
    0 : show.seasons[show.seasons.length -1].number;  // to get the last season number
}
//a3
export function getNextSeasonYear(show) 
{
  return show.nextSeason
    ? show.nextSeason.year
    : "No announcement";
}
