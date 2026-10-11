/** @typedef {import('./normalize.js').Show} Show */

/**
 * @typedef {object} GenreStats
 * @property {number} count скільки серіалів мають цей жанр
 * @property {number | null} averageRating середня оцінка цих серіалів
 */

/**
 * C4. Рахує статистику для кожного жанру.
 * Специфікація — ТЗ, C4.
 *
 * @param {Show[]} shows
 * @returns {Record<string, GenreStats>} ключ — назва жанру
 */
export function genreStats(shows) {
  const stats = {};
  for (const show of shows) {
    for (const genre of show.genres) {
      if (!stats[genre]) {
        stats[genre] = {
          count: 0,
          totalRating: 0,
          ratingCount: 0,
        };
      }
      stats[genre].count++;
      if (show.rating !== null) {
        stats[genre].totalRating += show.rating;
        stats[genre].ratingCount++;
      }
    }
  }
  for (const genre in stats) {
    const { totalRating, ratingCount } = stats[genre];
    stats[genre] = {
      count: stats[genre].count,
      averageRating: ratingCount > 0 ? Math.round((totalRating / ratingCount) * 10) / 10 : null,
    };
  }
  return stats;
}
