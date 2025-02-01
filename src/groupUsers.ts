type UserType = "EMPLOYEE" | "CONTRACTOR";
interface User {
  id: number;
  name: string;
  type: UserType;
}

module.exports.groupUsers = function (users: Array<User>): Record<'employees' | 'contractors', Array<User>> {
  const groupedUsers = {
    employees: [] as Array<User>,
    contractors: [] as Array<User>
  };

  users.forEach(user => {
    if (user.type === "EMPLOYEE") {
      groupedUsers.employees.push(user);
    } else if (user.type === "CONTRACTOR") {
      groupedUsers.contractors.push(user);
    }
  });

  return groupedUsers;
};
