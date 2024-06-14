const UserList = () => {
  const users = [
    { name: "aanjan", phone: 12334566 },
    { name: "mahesh", phone: 12334566 },
    { name: "bhagwan", phone: 12334566 },
    { name: "John", phone: 12334566 },
  ];
  return (
    <div>
      {users.map((user) => (
        <h1>
          {user.name} | {user.phone}
        </h1>
      ))}
    </div>
  );
};
export default UserList;
