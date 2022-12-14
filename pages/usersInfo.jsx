import { UserBasedActionStyled, UserTableActionStyled } from "../src/assets/css/components/table/UserTable";
import UsersInfo from "../src/components/UsersInfo";

export default function userDashboard({ users }) {
  return (
    <>
      <UsersInfo users={users} />{" "}
    </>
  );
}

export async function getServerSideProps() {
  try {
    let response = await fetch("http://localhost:3000/api/users");
    let users = await response.json();

    return {
      props: {
        users: JSON.parse(JSON.stringify(users)),
      },
    };
  } catch (error) {
    throw new Error(error);
  }
}
