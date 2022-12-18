import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export async function getServerSideProps() {
  try {
    let response = await fetch("http://localhost:3000/api/user/crud");
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

export default User;
