// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="maincontainer">
      <h1 className="mainheading">MY JOURNEY OF CCBP 4.O</h1>

      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(each =>
          each.categoryId === 'COURSE' ? (
            <CourseTimeLineCard eachDetails={each} key={each.id} />
          ) : (
            <ProjectTimeLineCard eachProject={each} key={each.id} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimeLineView
