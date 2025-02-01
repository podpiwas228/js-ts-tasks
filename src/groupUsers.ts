interface User {
  id: number;
  name: string;
  type: 'EMPLOYEE' | 'CONTRACTOR';
}

/**
 * Groups users into EMPLOYEE and CONTRACTOR groups
 * @param {Array<User>} users
 * @returns {Object<employees: Array<User>, contractors: Array<User>>}
 */
export function groupUsers(users: Array<User>): { employees: Array<User>, contractors: Array<User> } {
  const groupedUsers = {
    employees: [] as Array<User>,
    contractors: [] as Array<User>
  };

  users.forEach(user => {
    if (user.type === 'EMPLOYEE') {
      groupedUsers.employees.push(user);
    } else if (user.type === 'CONTRACTOR') {
      groupedUsers.contractors.push(user);
    }
  });

  return groupedUsers;
}
