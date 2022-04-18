import img from '../../assets/web-design.webp'
import { FaGithub, FaLink } from 'react-icons/fa'


const ProjectThree = () => {
    return (
        <div className="projectSingle">
            <h3>Project One</h3>
            <img src={img} alt="projectImage" />
           <div className="project-content">
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ad odit reprehenderit esse dignissimos, iure at animi asperiores delectus velit debitis fugiat similique quis itaque nihil officia. Veniam, odit fugit?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ad odit reprehenderit esse dignissimos, iure at animi asperiores delectus velit debitis fugiat similique quis itaque nihil officia. Veniam, odit fugit?</p>
            <div className="project-links">
            <FaGithub/> <FaLink/>
            </div>
           </div>

        </div>
    )
}

export default ProjectThree