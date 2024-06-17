import { useState } from "react";

import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProject from "./components/NewProject.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handlAddTask (text) {
    setProjectsState((prevState) => {
      const taskId = Math.random().toString();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
    }
    return {
      ...prevState,
      tasks: [...prevState.tasks, newTask],
    };
    });
    }

  function handleDeleteTask () {

  }
  
  function handleSelectProject(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

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
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    }));
    console.log(newProject);
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  
  function handleDeleteSelectedProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId),
    }));
    }

  let content = <SelectedProject project={selectedProject} onDeleteProject={handleDeleteSelectedProject} onAddTask={handlAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks} />;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} />
      {content}
    </main>
  );
}

export default App;
