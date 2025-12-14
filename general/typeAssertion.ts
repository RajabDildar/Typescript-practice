// response from API, we don't know how data would be structured/ data type
const response: unknown = {
  status: "success",
  user: [
    {
      name: "Ali",
      age: 18,
    },
    {
      name: "Ahmed",
      age: 20,
    },
  ],
};

interface UserInDB {
  name: string;
  age: number;
}

const userList1 = response as { status: string; user: UserInDB[] };

// other way/ cleaner way to write same code.
interface UserList {
  status: string;
  user: UserInDB[];
}

const userList2 = response as UserList;

console.log(userList1.status);
console.log(userList1.user);
console.log(userList2.status);
console.log(userList2.user);
