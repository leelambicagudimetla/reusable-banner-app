// Write your code here.
import './index.css'

const UserProfile = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="paragraph">{description}</p>
      <button className="buttons">Show More</button>
    </li>
  )
}

export default UserProfile
