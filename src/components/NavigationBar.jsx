import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdFormatColorFill } from "react-icons/md";
import { AiOutlinePlus, AiFillDashboard } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { BiTask } from "react-icons/bi";
import { IconButton } from "./button/IconButton";
import { TextButton } from "./button/TextButton";
import {
  CreateWorkspaceButton,
  NavbarLogoStyled,
  WorkspaceLinkStyled,
  WorkspaceLogoStyled,
  WorkspaceNameStyled,
  WorkspaceNavBarItemStyled,
  WorkspaceNavBarLinkStyled,
  WorkspaceNavBarListStyled,
  WorkspaceNavBarStyled,
  WorkspaceItemStyled,
  MenuBtnStyled,
  SeeMoreDetailWorkspaces,
  NavbarItemName,
} from "../assets/css/components/WorkspaceOnNavBar";
import {
  CreateWorkspaceFormStyled,
  WorkspaceBackgroundStyled,
} from "../assets/css/components/WorkspaceFormStyled";
import CreateWorkspaceFormComponent from "./form/CreateWorkspaceForm";

export default function NavigationBar() {
  const [isCreateWorkspace, setIsCreateWorkspace] = useState(false);
  const [workspaceInfo, setWorkspaceInfo] = useState({
    name: "",
    color: "",
    url: "",
  });
  const handleShowNavBar = (e) => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show')
  }
  const [backgroundOfWorkspace, setBackgroundOfWorkspace] = useState();
  const [loading, setLoading] = useState(false);
  const [workspaces, setWorkspaces] = useState(null);
  useEffect(() => {
    return () => {
      backgroundOfWorkspace &&
        URL.revokeObjectURL(backgroundOfWorkspace.preview);
    };
  }, [backgroundOfWorkspace]);
  useEffect(() => {
    setLoading(true);
    fetch("api/workspace")
      .then((res) => res.json())
      .then((data) => {
        setWorkspaces(data);
        setLoading(false);
      });
  }, []);

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
    file.preview =  URL.createObjectURL(file);
    setBackgroundOfWorkspace(file);
  };

  const handleShowCreateWorkspaceForm = () => {
    setIsCreateWorkspace(!isCreateWorkspace);
  };

  const handleSubmit = (e) => {};

  return (
    <>
      <nav>
        <WorkspaceNavBarStyled className="navbar">
          <WorkspaceNavBarListStyled className="navbar-list">
            <WorkspaceNavBarItemStyled className="navbar-item">
              <NavbarLogoStyled className="navbar-logo">
                Str4in
              </NavbarLogoStyled>
              <MenuBtnStyled className="menu-btn" handleOnClick={handleShowNavBar}>
                <HiMenu className="navbar-menu-icon" />
              </MenuBtnStyled>
            </WorkspaceNavBarItemStyled>
            <WorkspaceNavBarItemStyled className="navbar-item"></WorkspaceNavBarItemStyled>
            <WorkspaceNavBarItemStyled className="navbar-item">
              <WorkspaceNavBarLinkStyled className="navbar-link" href={""}>
                <AiFillDashboard className={"dashboard-icon"} />
                <NavbarItemName className="navbar-item-name">Dashboard</NavbarItemName>
              </WorkspaceNavBarLinkStyled>
            </WorkspaceNavBarItemStyled>
            <WorkspaceNavBarItemStyled className="navbar-item">
              <WorkspaceNavBarLinkStyled className="navbar-link" href={"#"}>
                <BiTask className={"workspace-icon"} />
                <NavbarItemName className="navbar-item-name">Workspaces</NavbarItemName>
              </WorkspaceNavBarLinkStyled>

              <CreateWorkspaceButton
                handleOnClick={handleShowCreateWorkspaceForm}
                className={"create-workspace-btn"}
              >
                <AiOutlinePlus />
              </CreateWorkspaceButton>
              {isCreateWorkspace && (
                <CreateWorkspaceFormComponent
                  handleCreateWorkspaceInfo={handleCreateWorkspaceInfo}
                  handlePreviewBackground={handlePreviewBackground}
                  workspaceInfo={workspaceInfo}
                  backgroundOfWorkspace={backgroundOfWorkspace}
                />
              )}
              <WorkspaceNavBarListStyled className="workspace-list">
                {workspaces.map((workspace) => (
                  <WorkspaceItemStyled
                    key={workspace._id}
                    className="workspace-item"
                  >
                    <WorkspaceLinkStyled
                      className="workspace-link"
                      key={workspace._id}
                      href="#"
                    >
                      <WorkspaceLogoStyled
                        className="workspace-logo"
                        style={{ backgroundColor: `${workspace.color}` }}
                      ></WorkspaceLogoStyled>
                      <WorkspaceNameStyled className="workspace-name">
                        {workspace.name}
                      </WorkspaceNameStyled>
                    </WorkspaceLinkStyled>
                  </WorkspaceItemStyled>
                ))}
                <WorkspaceItemStyled>
                  <SeeMoreDetailWorkspaces
                    className={"see-more-detail-workspace"}
                    href="/workspaces"
                  >
                    See more detail
                  </SeeMoreDetailWorkspaces>
                </WorkspaceItemStyled>
              </WorkspaceNavBarListStyled>
            </WorkspaceNavBarItemStyled>
          </WorkspaceNavBarListStyled>
        </WorkspaceNavBarStyled>
      </nav>
    </>
  );
}
