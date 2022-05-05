function User({ user }) {
  return (
    <>
      <p className="font-bold">{user.name}</p>
      <p>{user.email}</p>
    </>
  );
}

export default User;
