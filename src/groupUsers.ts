interface User {
  name: string;
  login: string;
  type: 'EMPLOYEE' | 'CONTRACTOR';
  [key: string]: any;  // Позволяет добавлять любые другие свойства
}

interface GroupedUsers {
  employees: User[];
  contractors: User[];
}

function groupUsers(users: User[]): GroupedUsers {
  const grouped: GroupedUsers = {
    employees: [],
    contractors: []
  };

  users.forEach(user => {
    if (user.type === 'EMPLOYEE') {
      grouped.employees.push(user);
    } else if (user.type === 'CONTRACTOR') {
      grouped.contractors.push(user);
    }
  });

  return grouped;
}
