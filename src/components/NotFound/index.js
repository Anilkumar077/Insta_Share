import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://res.cloudinary.com/delpv3tin/image/upload/v1691997257/Not_Found_Image_fmjjfm.png"
      alt="page not found"
      className="not-found-img"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-description">
      we are sorry, the page you requested could not be found. <br />
      Please go back to the home page.
    </p>
    <Link to="/" className="links">
      <button className="not-found-button" type="button">
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
