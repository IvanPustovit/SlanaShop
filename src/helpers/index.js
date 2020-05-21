import axios from "axios";

const CLIENT_ID = "917ca2978c322ca13a23c95261fe076d";
// const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const withCredentials = (url) => {
  return `${url}?key=${CLIENT_ID}`;
};

export const getUser = async (login) => {
  return await axios.get(withCredentials(`https://api.imgbb.com/1/upload`));
};

export const getUserRepos = async (login) => {
  return await axios.get(
    withCredentials(`https://api.github.com/users/${login}/repos?per_page=5&`),
  );
};

export const getUsers = async (name) => {
  return await axios.get(
    withCredentials(
      `https://api.github.com/search/users?q=${name}&per_page=9&page=1&`,
    ),
  );
};
