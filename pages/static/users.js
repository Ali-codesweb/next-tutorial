import Users from "../../components/users";

const UsersList = ({ users }) => {
  return (
    <>
      {users.map((e) => (
        <Users key={e.id} user={e} />
      ))}
    </>
  );
};
export default UsersList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
