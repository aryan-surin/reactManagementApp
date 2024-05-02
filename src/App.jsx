import { useState } from "react";

import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleAddProject(project) {
    const newProject = {
      ...project,
      id: Math.random().toString(),
    };

    setProjectsState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject],
    }));
    console.log(newProject);
  }

  let content;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
