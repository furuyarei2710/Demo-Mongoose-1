import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdFormatColorFill } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import { CreateWorkspaceButton, WorkspaceLinkStyled, WorkspaceLogoStyled, WorkspaceNameStyled } from "../assets/css/components/WorkspaceOnNavBar";

export default function NavigationBar() {
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
    setIsCreateWorkspace(!isCreateWorkspace);
  };

  return (
    <>
      <header>
        <div className="navigationBar">
          <ul className="navBarList">
            <li className="navBarItem">
              <div className="logo">
              
              </div>
            </li>
            <li className="navBarItem">
              <Link className="navBarItem" href={"#"}>
                Home
              </Link>
            </li>
            <li className="navBarItem">
              <Link className="navBarItem" href={"#"}>
                Dashboard
              </Link>
            </li>
            <li className="navBarItem">
              <Link className="navBarItem" href={"#"}>
                Workspaces
              </Link>
            </li>
            {workspaces.map((workspace) => (
              <li className="navBarItem">
                <WorkspaceLinkStyled className="workspace-link" key={workspace._id} href="#">
                  <WorkspaceLogoStyled className="workspace-logo" style={{backgroundColor: `${workspace.color}`}}></WorkspaceLogoStyled>
                    <WorkspaceNameStyled className="workspace-name">{workspace.name}</WorkspaceNameStyled>
                </WorkspaceLinkStyled>
              </li>
            ))}
          </ul>
        </div>
        <nav>
          <CreateWorkspaceButton handleOnClick={handleShowCreateWorkspaceForm} className={'create-workspace-btn'}>
            <AiOutlinePlus />
          </CreateWorkspaceButton>
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
              <button onClick={() => router.push("/")} type={"submit"}>
                Create
              </button>
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
