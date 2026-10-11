/** @typedef {import('./normalize.js').Show} Show */

/**
 * @typedef {object} FilterOptions
 * @property {string | null} [query] частина назви
 * @property {string | null} [genre] жанр
 * @property {number | null} [minRating] мінімальна оцінка
 */

/**
 * C2. Повертає серіали, які відповідають усім заданим фільтрам.
 * Специфікація — ТЗ, C2.
 *
 * @param {Show[]} shows
 * @param {FilterOptions} [options]
 * @returns {Show[]}
 */
export function filterShows(shows, options) {
  const { query, genre, minRating } = options ?? {};
  const normalizedQuery = query?.trim().toLowerCase();
  return shows.filter((show) => {
    if (normalizedQuery && !show.name.toLowerCase().includes(normalizedQuery)) {
      return false;
    }
    if (genre && !show.genres.includes(genre)) {
      return false;
    }
    if (minRating && (show.rating === null || show.rating < minRating)) {
      return false;
    }
    return true;
  });
}
