import axios from "axios";

/**
 * @function fetchShow: Fetch the show data from the TVMaze API
 * @param: none
 * @returns none
 */
export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => res)
}

