// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  render() {
    const {reviewsList} = this.state
    console.log(reviewsList)
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
