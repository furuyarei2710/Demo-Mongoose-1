import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function UsersInfo({ users }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>password</th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
						<tr key={user._id}>							
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
							<td>{user.email}</td>
							<td>{user.password}</td>
							<td>{user.gender}</td>
							<td>
								<Link href={`/user/${user._id}`}>
									<button>Edit</button>
								</Link>
							</td>
							<td><button>Delete</button></td>
          </tr>
					))}
          {/* <p>{JSON.stringify(users)}</p> */}
          <tr></tr>
        </tbody>
      </table>
    </>
  );
}

export async function getServerSideProps() {
  try {
    let response = await fetch("http://localhost:3000/api/user");
    let users = await response.json();
    
    return {
      props: {
        users: JSON.parse(JSON.stringify(users))
      },
    };
  } catch (error) {
    throw new Error(error);
  }
}
