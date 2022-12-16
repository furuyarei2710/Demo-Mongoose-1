import React, { useState, useEffect } from "react";

function WorkspaceAreaComponent({ workspace }) {
  return (
    <>
      <p>{workspace.name}</p>
      <p>{workspace.color}</p>
    </>
  );
}

export default WorkspaceAreaComponent;
