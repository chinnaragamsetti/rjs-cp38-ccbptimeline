// Write your code here
import './index.css'

const ProjectTimeLineCard = props => {
  const {eachProject} = props
  const {
    id,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = eachProject
  return (
    <div className="projectmaincont">
      <img src={imageUrl} alt="image" className="projectimage" />
      <div className="maincont">
        <h1 className="coursehead">{courseTitle}</h1>
        <div className="calendercont">
          <FaClock className="clock" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <p className="button">Visit</p>
    </div>
  )
}

export default ProjectTimeLineCard
