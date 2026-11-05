import { title } from "node:process";

//A1
export function getEpisodeTitle(show, seasonIndex, episodeIndex) 
{
    return show.seasons[seasonIndex].episodes[episodeIndex].title; //to get the episode title
}
//A2
export function getLastSeasonNumber(show) 
{
    return show.seasons.length === 0? 
    0 : show.seasons[show.seasons.length -1].number;  // to get the last season number
}
//A3
export function getNextSeasonYear(show) 
{
  return show.nextSeason
    ? show.nextSeason.year
    : "No announcement";
}
//B1
export function getById(series, id)
{
    return series.find(show => show.id === id);
}
//B2
export function getSeasonsCount(series)
{
    return series.map(show =>
    ({title: show.title ,seasons: show.seasons.length})
    );
}
//B3
export function hasTopEpisode(show, minRating) 
{
    return show.seasons
        .map(season => season.episodes)
        .some(episodes =>
            episodes.some(episode => episode.rating >= minRating)
        );
}
//B4
export function getCreatorsFrom(series, country)
{
    return series.filter(show=>show.creator.country===country).
        map(show=>show.creator.name);
}

//B5
export function sortByStartYear(series) 
{
    return series.toSorted((a, b) => a.startYear - b.startYear);
}