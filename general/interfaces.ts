interface StoreUser {
  name: string;
  age: number;
  email: string;
  phone: string;
}

type AdminPermissions = "create" | "read" | "update" | "delete";

interface Admin extends StoreUser {
  permissions: AdminPermissions[];
}

interface Customer extends StoreUser {
  purchaseHistory: string[];
}

let A1: Admin = {
  name: "Ali",
  age: 21,
  email: "abc@exp.com",
  phone: "+911234567",
  permissions: ["create", "read", "update", "delete"],
};

console.log(A1);

// Union |
// Type aliases
type myCustomType = string | number | null;

function abcd(a: myCustomType): void {
  console.log(a);
}

// intersection &
type newUser = {
  name: string;
  email: string;
};

type newAdmin = newUser & {
  admin: boolean;
};

function efgh(a: newAdmin): void {
  console.log(a.admin);
}
efgh({ name: "john", email: "john@exp.com", admin: true });
