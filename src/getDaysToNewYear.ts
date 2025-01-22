function getDaysToNewYear(targetDate: Date | string): number {
  const now = new Date(targetDate); 
  const newYear = new Date('2024-01-01'); 
  
  if (isNaN(newYear.getTime()) || isNaN(now.getTime())) {
    throw new Error('Invalid date format');
  }

  const diffTime = newYear.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24)); 
  return diffDays;  
}
