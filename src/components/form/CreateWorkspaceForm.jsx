import {
  ChooseBackgroundButtonStyled,
  CreateWorkspaceFormHeading,
  CreateWorkspaceFormStyled,
  CreateWorkspaceSubmitStyled,
  WorkspaceBackgroundInputStyled,
  WorkspaceBackgroundLabelStyled,
  WorkspaceBackgroundStyled,
  WorkspaceColorInputStyled,
  WorkspaceColorLabelStyled,
  WorkspaceNameInputStyled,
  WorkspaceNameLabelStyled,
} from "../../assets/css/components/WorkspaceFormStyled";
import { MdFormatColorFill } from "react-icons/md";
export default function CreateWorkspaceFormComponent({
  handleCreateWorkspaceInfo,
  handlePreviewBackground,
  workspaceInfo,
  backgroundOfWorkspace,
}) {
  return (
    <CreateWorkspaceFormStyled
      className={"create-workspace-form"}
      action="/api/workspaces"
      method="POST"
    >
      <CreateWorkspaceFormHeading className="create-workspace-form-heading">
        Create Workspace Form
      </CreateWorkspaceFormHeading>
      <WorkspaceNameLabelStyled
        className="workspace-name-label"
        htmlFor={"name"}
      >
        Name of workspace:
      </WorkspaceNameLabelStyled>
      <WorkspaceNameInputStyled
        type={"text"}
        id="name"
        name={"name"}
        placeholder="Ex: Buiding IT System"
        value={workspaceInfo.name}
        onChange={handleCreateWorkspaceInfo("name")}
        className={"workspace-name"}
      ></WorkspaceNameInputStyled>
      <WorkspaceColorLabelStyled
        className="workspace-color-label"
        htmlFor={"color"}
      >
        <MdFormatColorFill /> Color:
      </WorkspaceColorLabelStyled>
      <WorkspaceColorInputStyled
        type={"color"}
        id="color"
        name={"color"}
        placeholder="Ex: Buiding IT System"
        value={workspaceInfo.color}
        onChange={handleCreateWorkspaceInfo("color")}
        className={"workspace-color"}
      ></WorkspaceColorInputStyled>
      <WorkspaceBackgroundLabelStyled
        className="workspace-background-label"
        htmlFor={"background-label"}
      >
        Background of workspace:
      </WorkspaceBackgroundLabelStyled>
      <WorkspaceBackgroundInputStyled
        type={"file"}
        className="workspace-background-file"
        onChange={handlePreviewBackground}
        name={"url"}
      ></WorkspaceBackgroundInputStyled>
      <ChooseBackgroundButtonStyled
        handleOnClick={(e) => e.preventDefault()}
        type={""}
        className={"choose-image-btn"}
        text={"Choose the image"}
      ></ChooseBackgroundButtonStyled>
      {backgroundOfWorkspace && (
        <WorkspaceBackgroundStyled
          src={backgroundOfWorkspace.preview}
          width={160}
          height={100}
          alt={"avatar"}
          className={"workspace-background"}
        ></WorkspaceBackgroundStyled>
      )}
      <CreateWorkspaceSubmitStyled
        className={"create-workspace-submit"}
        type={"submit"}
        text={"Create"}
      ></CreateWorkspaceSubmitStyled>
    </CreateWorkspaceFormStyled>
  );
}
