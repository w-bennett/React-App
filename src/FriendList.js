import React, { useState } from 'react'
import PropTypes from 'react'

class FriendList extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name : 'Will',
            friends: ['mike', 'jeff']
        }

        this.addFriend = this.addFriend.bind(this)
    }

    addFriend(friend) {
        this.setState((state) => ({
            friends: state.friends.concat(friend)
        }))

        // this.setState({
        //     friends: this.state.friends.concat([friend])
        // })
    }

    render() {
        return(
            <div>
                <h3> {this.state.name}'s Friends: </h3>
                <br />
                <Friends list = {this.state.friends}/>
                <NewFriends addFriend = {this.addFriend} />
            </div>
        )
    }
    
}

function Friends(props) {
    return(
        <div>
            <ul>
                {props.list.map(item => <li>{item}</li>)}
            </ul>
        </div>
    );
}

function NewFriends(props) {
    // newFriend is state variable
    // setFriend is setState
    // useState('') is default value for state aka this.state.newFriend
    // useState is React Hook that allows for state functionality in functional component

    let [ newFriend, setFriend ] = useState('')

    function addFriend(e) {
        setFriend (
            newFriend = e.target.value
        )
    }

    function handleIt() {
        props.addFriend(newFriend) 

        setFriend(
            newFriend = ''
        )
    }

    return(
        <div>
            New Friends 
            <input type = 'text' value = {newFriend} onChange = {addFriend} />
            <button onClick = {handleIt}> Add Friend </button>
        </div>
    )
}

export default FriendList;