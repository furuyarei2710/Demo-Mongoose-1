import Link from "next/link";
import { useEffect, useState } from "react";
import { UserTableHeadingStyled, UserTableStyled } from "../assets/css/components/table/UserTable";
import CreateFormComponent from "./form/user/CreateForm";
import UserFetching from "./table/UserFetching";

export default function UsersInfo({ users }) {
  const [isOpenCreateUserForm, setIsOpenCreateUserForm] = useState(false);
	const [isOpenUpdateUserForm, setIsOpenUpdateUserForm] = useState(false);

  const toggleCreateForm = (e) => {
    e.preventDefault();
    setIsOpenCreateUserForm(!isOpenCreateUserForm);
    setIsOpenUpdateUserForm(false)
  };

  const toggleUpdateForm = (e) => {
    e.preventDefault();
    setIsOpenUpdateUserForm(!isOpenUpdateUserForm);
    setIsOpenCreateUserForm(false)
  };
	
  return (
    <>
      <UserTableStyled className="users-table">
        <thead>
          <tr>
            <UserTableHeadingStyled className="user-table-heading">First name</UserTableHeadingStyled>
            <UserTableHeadingStyled className="user-table-heading">Last name</UserTableHeadingStyled>
            <UserTableHeadingStyled className="user-table-heading">Email</UserTableHeadingStyled>
            <UserTableHeadingStyled className="user-table-heading">Password</UserTableHeadingStyled>
            <UserTableHeadingStyled className="user-table-heading">Gender</UserTableHeadingStyled>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserFetching user={user} toggleCreateForm={toggleCreateForm} toggleUpdateForm={toggleUpdateForm} />
          ))}
          <tr></tr>
        </tbody>
      {isOpenCreateUserForm && <CreateFormComponent heading={"Add new user"} action={"Create new user"} />}
      {isOpenUpdateUserForm && <CreateFormComponent heading={"Modify the user"} action={"Update"} />}
      </UserTableStyled>
    </>
  );
}