const USER_NAME = 'dlqyjkbnl';
const FETCH_URL = `http://res.cloudinary.com/${USER_NAME}/image/fetch`;

export const getUrl = (url, options = '') => {
  return `${FETCH_URL}/${options}/${encodeURIComponent(url)}`;
};