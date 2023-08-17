import {Component} from 'react'
import Header from '../Header'
import Stories from '../Stories'
import './index.css'
import Posts from '../Posts'
import SearchContext from '../../context/SearchContext'

class Home extends Component {
  render() {
    return (
      <SearchContext.Consumer>
        {value => {
          const {searchPosts} = value
          return (
            <div className="home_container">
              <Header />
              <Stories />
              <Posts searchPosts={searchPosts} />
            </div>
          )
        }}
      </SearchContext.Consumer>
    )
  }
}
export default Home
