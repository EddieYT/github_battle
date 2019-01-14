const id = 'df7f2349d75275058985';
const sec = 'ff3469eff7338cf5b6ebf4a1ab9e08d674d42b4c';
const params = `?client_id=${id}&client_secret=${sec}`;

async function getProfile (username) {
  const response = await fetch(`https://api.github.com/users/${username}${params}`);
  return response.json();
}

async function getRepos (username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos${params}&per_page=100`);
  return response.json();
}

function getStarCount(repos) {
  return repos.reduce((count, { stargazers_count }) => count + stargazers_count, 0);
}

function calculateScore({ followers }, repos) {
  return (followers * 3) + getStarCount(repos);
}

function handleError(err) {
  console.log(err);
  return null;
}

async function getUserData (player) {
  const [ profile, repos ] = await Promise.all([
    getProfile(player),
    getRepos(player)
  ]);

  return {
    profile,
    score: calculateScore(profile, repos)
  };
}

function sortPlayers (players) {
  return players.sort((a,b) => b.score - a.score);
}

export async function battle(players) {
  const results = await Promise.all(players.map(getUserData))
    .catch(handleError);
  return results === null ? results : sortPlayers(results);
}

export async function fetchPopularRepos(language) {
  const encodedURI = window.encodeURI(`https://api.github.com/search/\
repositories?q=stars:>1+language:${language}\
&sort=stars&order=desc&type=Repositories`);
  const response = await fetch(encodedURI)
    .catch(handleError);
  const repos = await response.json();
  return repos.items;
}
