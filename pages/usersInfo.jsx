import Link from 'next/link'
import { useEffect, useState } from 'react';
import api from '../services/api';

export default function UsersInfo({ users }) {
	const [isEditing, setIsEditing] = useState(false);
	useEffect(() => {
		// api.get("/user")
	})
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
								<Link href={"/editUsers"}>
									<button>Edit</button>
								</Link>
							</td>
							<td><button>Delete</button></td>
          </tr>
					))}
          <tr></tr>
        </tbody>
      </table>
    </>
  );
}

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
