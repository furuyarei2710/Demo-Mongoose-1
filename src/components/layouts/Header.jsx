import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdFormatColorFill } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";

export default function Header() {
  const [isCreateWorkspace, setIsCreateWorkspace] = useState(false);
  const [workspaceInfo, setWorkspaceInfo] = useState({ name: "", color: "" });
  const [backgroundOfWorkspace, setBackgroundOfWorkspace] = useState();
  const [loading, setLoading] = useState(false);
  const [workspaces, setWorkspaces] = useState(null);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    fetch("api/workspace")
      .then((res) => res.json())
      .then((data) => {
        setWorkspaces(data);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    return () => {
      backgroundOfWorkspace &&
        URL.revokeObjectURL(backgroundOfWorkspace.preview);
    };
  }, [backgroundOfWorkspace]);

  if (loading) return <p>Loading...</p>;
  if (!workspaces) return <p>No about workspaces</p>;
  const handleCreateWorkspaceInfo = (propertyName) => (event) => {
    setWorkspaceInfo((workspaceInfo) => ({
      ...workspaceInfo,
      [propertyName]: event.target.value,
    }));
  };
  const handlePreviewBackground = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);

    setBackgroundOfWorkspace(file);
  };
  const handleShowCreateWorkspaceForm = () => {
    setIsCreateWorkspace(true);
  };

  return (
    <>
      <header>
        <nav>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Dashboard</Link>
          <Link href={"#"}>Workspaces</Link>

          {workspaces.map((workspace) => (
            <Link key={workspace._id} href="#">
              {workspace.name}
            </Link>
          ))}
          <button onClick={handleShowCreateWorkspaceForm}>
            <AiOutlinePlus />
          </button>
          {isCreateWorkspace && (
            <form action="/api/workspace" method="POST">
              <label for={"name"}>Name of workspace:</label>
              <input
                type={"text"}
                id="name"
                name={"name"}
                placeholder="Ex: Buiding IT System"
                value={workspaceInfo.name}
                onChange={handleCreateWorkspaceInfo("name")}
              />
              <label for={"name"}>Color:</label>
              <MdFormatColorFill />
              <input
                type={"color"}
                id="color"
                name={"color"}
                placeholder="Ex: Buiding IT System"
                value={workspaceInfo.color}
                onChange={handleCreateWorkspaceInfo("color")}
              />
              <label for={"background"}>Background of workspace:</label>
              <input
                type={"file"}
                onChange={handlePreviewBackground}
                name={"url"}
              />
              <button onClick={() => router.push('/')} type={"submit"}>Create</button>
            </form>
          )}
          {backgroundOfWorkspace && (
            <Image
              src={backgroundOfWorkspace.preview}
              width={120}
              height={68}
            ></Image>
          )}
        </nav>
      </header>
    </>

  );
}
