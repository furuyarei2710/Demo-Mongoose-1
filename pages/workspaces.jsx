import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function workspaces({ workspaces }) {
	
  return (
    <>
      <ul>
				{workspaces.map(workspace => (
					<li>
						<p>{workspace.name}</p>
						<p>{workspace.color}</p>
						<p>{workspace.url}</p>
					</li>
				))}
			</ul>
    </>
  );
}

export async function getServerSideProps() {
  try {
    let response = await fetch("http://localhost:3000/api/workspaces");
    let workspaces = await response.json();

    return {
      props: {
        workspaces: JSON.parse(JSON.stringify(workspaces)),
      },
    };
  } catch (error) {
    throw new Error(error);
  }
}
