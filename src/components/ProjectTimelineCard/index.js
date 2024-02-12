// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {eachProject} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = eachProject
  return (
    <div className="projectmaincont">
      <img src={imageUrl} alt="project" className="projectimage" />
      <div className="projectmaincontainer">
        <h1 className="coursehead">{projectTitle}</h1>
        <div className="calendercont">
          <AiFillCalendar className="clock" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="button">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
