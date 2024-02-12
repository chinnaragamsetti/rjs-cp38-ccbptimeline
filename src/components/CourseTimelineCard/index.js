// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {eachDetails} = props
  const {courseTitle, description, duration, tagsList} = eachDetails

  return (
    <div className="coursemaincont">
      <div className="maincont">
        <h1 className="coursehead">{courseTitle}</h1>
        <div className="timecont">
          <AiFillClockCircle className="clock" />
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
