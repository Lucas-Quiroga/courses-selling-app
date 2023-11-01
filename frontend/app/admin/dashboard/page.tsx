import React from "react";
import { Card, Title, Text } from "@tremor/react";
import { Searchbar, UsersTable } from "@/components";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    username: "john_doe",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "jane_smith",
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Alice Johnson",
    username: "alice_johnson",
    email: "alice.johnson@example.com",
  },
  // Agrega más objetos de usuario según sea necesario
];

const page = () => {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>A list of users retrieved from a Mongo database.</Text>
      <Searchbar />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
};

export default page;
