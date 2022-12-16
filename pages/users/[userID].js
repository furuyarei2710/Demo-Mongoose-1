import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const User = ({ users }) => {
  const router = useRouter();
  const { userID } = router.query;
  
  return <p>{userID}</p>
};

export async function getServerSideProps() {

  const res = await fetch(`http://localhost:3000/api/user`);
  const user = await res.json();

  return {
    props: {
      users: JSON.parse(JSON.stringify(user)),
    },
  };
}

export default User;
// update user
