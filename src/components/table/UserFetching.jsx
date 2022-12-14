import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  UserBasedActionStyled,
  UserTableActionStyled,
  UserTableContentStyled,
} from "../../assets/css/components/table/UserTable";
import { TextButton } from "../button/TextButton";

function UserFetching({
  user,
  toggleCreateForm,
  toggleUpdateForm,
  toggleDeleteForm,
}) {
  return (
    <>
      <tr>
        <UserTableContentStyled className="user-table-content">
          {user.firstName}
        </UserTableContentStyled>
        <UserTableContentStyled className="user-table-content">
          {user.lastName}
        </UserTableContentStyled>
        <UserTableContentStyled className="user-table-content">
          {user.email}
        </UserTableContentStyled>
        <UserTableContentStyled className="user-table-content">
          {user.password}
        </UserTableContentStyled>
        <UserTableContentStyled className="user-table-content">
          {user.gender}
        </UserTableContentStyled>
        <UserTableActionStyled className="user-table-action">
          <UserBasedActionStyled
            className="user-table-action-btn create-action"
            text={"Add"}
            handleOnClick={toggleCreateForm}
          ></UserBasedActionStyled>
        </UserTableActionStyled>
        <UserTableActionStyled className="user-table-action">
          <UserBasedActionStyled
            className="user-table-action-btn update-action"
            text={"Edit"}
            handleOnClick={toggleUpdateForm}
          ></UserBasedActionStyled>
        </UserTableActionStyled>
        <UserTableActionStyled className="user-table-action">
          <UserBasedActionStyled
            className="user-table-action-btn delete-action "
            text={"Delete"}
            handleOnClick={toggleDeleteForm}
          ></UserBasedActionStyled>
        </UserTableActionStyled>
      </tr>
    </>
  );
}

export default UserFetching;
