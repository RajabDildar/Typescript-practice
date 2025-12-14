"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// response from API, we don't know how data would be structured/ data type
const response = {
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
const userList1 = response;
const userList2 = response;
console.log(userList1.status);
console.log(userList1.user);
console.log(userList2.status);
console.log(userList2.user);
//# sourceMappingURL=typeAssertion.js.map