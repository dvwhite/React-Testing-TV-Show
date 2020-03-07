import axios from "axios";

// Helper functions
import { formatSeasons } from "./../utils/formatSeasons";

/**
 * @function fetchShow: Fetch the show data from the TVMaze API
 * @param {function} setShow: The state setter for the entire show object in res.data
 * @param {function} setSeasons: The state setter for the season data object in res.data._embedded.episodes
 * @returns none
 */
export const fetchShow = (setShow, setSeasons) => {
  axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
      setShow(res.data);
      setSeasons(formatSeasons(res.data._embedded.episodes));
    });
};