// Write your code here
import {FaClock} from 'react-icons/fa'

const CourseTimeLineCard = props => {
  const {eachDetails} = props
  const {
    id,
    categoryId,
    title,
    courseTitle,
    description,
    duration,
    tagsList,
  } = eachDetails

  return (
    <div className="coursemaincont">
      <div className="maincont">
        <h1 className="coursehead">{courseTitle}</h1>
        <div className="timecont">
          <FaClock className="clock" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="list">
        {tagsList.map(each => (
          <li className="eachcourselist">{each.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimeLineCard
