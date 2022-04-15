import ProjectSingle from '../ProjectSingle/ProjectSingle'
import projectsCollection from '../../ProjectsColection'

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            { projectsCollection.map( (project,idx) => {
                const { img, title, content, projectLink,githubLink } = project
                return <ProjectSingle
                key={idx}
                imgLink={img}
                projectLink={projectLink}
                githubLink={githubLink}
                title={title}
                content={content}
                />
            } ) }
        </div>
    )
}
export default Projects