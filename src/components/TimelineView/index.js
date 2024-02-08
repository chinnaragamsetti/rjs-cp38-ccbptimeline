// Write your code here
import {Chrono} from 'react-chrono'
 import CourseTimeLineCard from '../CourseTimelineCard'
 import ProjectTimeLineCard from '../ProjectTimelineCard'

import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="maincontainer">
      <h1 className="mainheading">My Journey</h1>
      <p className="subhead">CCBP 4.O</p>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(each=>(
            if (each.categoryId==='COURSE'){
                return <CourseTimeLineCard eachDetails={each}/>
            }
            else{
                return <ProjectTimeLineCard eachProject={each}/>
            }
        ))}
      
      </Chrono>
    </div>
  )
}

export default TimeLineView
