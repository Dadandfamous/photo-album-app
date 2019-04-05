import * as React from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { helloWorld } from '../actions/test'
import { addAlbum } from '../actions/addalbum'
import { setAlbums } from '../actions/setalbums'



 class AlbumsListContainer extends React.Component {
  state = {}
  componentDidMount() {
    sleep(2000)
      .then(message => this.props.setAlbums([
        {
          id: 1,
          title: message
        },
        {
          id: 2,
          title: 'This is the second album'
        },
        {
          id: 3,
          title: 'The last album'
        }
      ]))
  }
  // componentDidMount() {

  //   sleep(2000)
  //   .then(message => this.props.addAlbum(1, message))

  // sleep(3000)
  //   .then(message => this.props.addAlbum(2, message))


  //   request('https://jsonplaceholder.typicode.com/albums')
  //     .then(response => this.setState({ albums: response.body }))

  //     this.props.helloWorld('Alice', 'Seriously Alice')
  //     // If we bind action creators using connect, this.props.dispatch is no longer available.
  //     // this.props.dispatch(
  //     //   helloWorld ("pietje","bas")
  //     // )
  //     this.props.addAlbum(5,"Enjoying sunshine")
  //     this.props.addAlbum(10,"Having fun in the US")


  // }

  render() {
    // console.log(this.state.albums)
    // console.log(this.props)
    if (!this.state.albums) return 'Loading...'
    return <AlbumsList albums={this.state.albums} />
  } 
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

const sleep = time => new Promise(
  resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
)

export default connect (mapStateToProps, { helloWorld , setAlbums , addAlbum })(AlbumsListContainer)