const USER_NAME = 'dlqyjkbnl'; // sign up for your own at https://cloudinary.com
const FETCH_URL = `http://res.cloudinary.com/${USER_NAME}/image/fetch`;

export const getUrl = (url, options = '') => {
  return `${FETCH_URL}/${options}/${encodeURIComponent(url)}`;
};