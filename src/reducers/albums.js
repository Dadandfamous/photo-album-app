const ADD_ALBUM = 'ADD_ALBUM'

export default (state = [], action = {}) => {
  // console.log('STATE:', state, 'ACTION:', action )
    switch(action.type){
      case ADD_ALBUM:
        return [...state, action.payload]

      case 'SET_ALBUMS' :
        return state = action.payload

      default:
      return state
    }
}