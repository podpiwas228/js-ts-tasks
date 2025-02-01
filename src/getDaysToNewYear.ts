/**
 * Calculates the days left until the next New Year's Eve (1st January of the next year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
export function getDaysToNewYear(targetDate: Date | string): number {
  const currentDate = new Date(targetDate);
  const nextNewYear = new Date(currentDate.getFullYear() + 1, 0, 1);
  const diffTime = nextNewYear.getTime() - currentDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
