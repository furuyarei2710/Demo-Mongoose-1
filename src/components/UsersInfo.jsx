import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  UserBasedActionStyled,
  UserTableActionStyled,
  UserTableHeadingStyled,
  UserTableStyled,
} from "../assets/css/components/table/UserTable";
import CreateFormComponent from "./form/user/CreateForm";
import UpdateUserFormComponent from "./form/user/UpdateForm";
import UserFetching from "./table/UserFetching";

export default function UsersInfo({ users }) {
  const [isOpenCreateUserForm, setIsOpenCreateUserForm] = useState(false);
  const [isOpenUpdateUserForm, setIsOpenUpdateUserForm] = useState(false);
  const [specificUser, setSpecificUser] = useState();
  const [userID, setUserID] = useState(""); 
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  const toggleCreateForm = (e) => {
    e.preventDefault();
    setIsOpenCreateUserForm(!isOpenCreateUserForm);
    setIsOpenUpdateUserForm(false);
  };

  const toggleUpdateForm = (user) => {
    // e.preventDefault();
    setIsOpenUpdateUserForm(!isOpenUpdateUserForm);
    setIsOpenCreateUserForm(false);
    setUserID(user._id);
    setSpecificUser({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      gender: user.gender
    });
  };

  // const handleUpdateSubmit = async (e) => {
  //   e.preventDefault();
  //   // if (isValidFormData()) return;

  //   try {
  //     setIsLoading(true);
  //     await axios.put(`http://localhost:3000/api/users/${userID}`, { specificUser });
  //     // setFormData("");
  //     setUserID(null);
  //     setIsLoading(false);
  //     router.push('/usersInfo')
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }
  // };

  return (
    <>
      <UserBasedActionStyled
        className="user-table-action-btn create-action"
        text={"Add"}
        handleOnClick={toggleCreateForm}
      ></UserBasedActionStyled>
      <UserTableStyled className="users-table">
        <thead>
          <tr>
            {/* <UserTableHeadingStyled className="user-table-heading">
              _id
            </UserTableHeadingStyled> */}
            <UserTableHeadingStyled className="user-table-heading">
              First name
            </UserTableHeadingStyled>
            <UserTableHeadingStyled className="user-table-heading">
              Last name
            </UserTableHeadingStyled>
            <UserTableHeadingStyled className="user-table-heading">
              Email
            </UserTableHeadingStyled>
            <UserTableHeadingStyled className="user-table-heading">
              Password
            </UserTableHeadingStyled>
            <UserTableHeadingStyled className="user-table-heading">
              Gender
            </UserTableHeadingStyled>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserFetching
              key={user._id}
              user={user}
              toggleCreateForm={toggleCreateForm}
              toggleUpdateForm={toggleUpdateForm}
            />
          ))}
          <tr></tr>
        </tbody>
        {isOpenCreateUserForm && (
          <CreateFormComponent
            heading={"Add new user"}
            action={"Create new user"}
          />
        )}
        {isOpenUpdateUserForm && (
          <UpdateUserFormComponent
            user={specificUser}
            heading={"Modify the user"}
            action={"Update"} 
            userID={userID}
            setUserID={setUserID}
          />
        )}
      </UserTableStyled>
      {/* <UserTableActionStyled className="user-table-action">
          <UserBasedActionStyled
            className="user-table-action-btn create-action"
            text={"Add"}
            handleOnClick={toggleCreateForm}
          ></UserBasedActionStyled>
        </UserTableActionStyled> */}
    </>
  );
}
