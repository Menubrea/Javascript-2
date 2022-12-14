import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const action = '/posts/';
const details = '?_author=true&_comments=true&_reactions=true&'
const filterDesc = '_sort=title&sortOrder=desc';
const filterAsc = '_sort=title&sortOrder=asc';

/**
 * Function for filtering
 * @returns Filtered posts in ascending order
 */

export async function getFilteredPostsAscending() {
  const getPostsURL = `${API_SOCIAL_URL}${action}${details}${filterAsc}`;

  const response = await authFetch(getPostsURL);
  const result = await response.json();
  return result;
}

/**
 * Function for filtering
 * @returns FilteredPosts in descending order
 */
export async function getFilteredPostsDescending() {
  const getPostsURL = `${API_SOCIAL_URL}${action}${details}${filterDesc}`;

  const response = await authFetch(getPostsURL);
  const result = await response.json();

  return result;
}