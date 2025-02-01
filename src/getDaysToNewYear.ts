module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
    const date = new Date(targetDate);
    const nextNewYear = new Date(date.getFullYear() + 1, 0, 1);
    const diffTime = nextNewYear.getTime() - date.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};
