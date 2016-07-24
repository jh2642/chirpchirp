import React from 'react'

class Follow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            value: ''
        }
    }

    render() {
        var name = this.state.name.map((name, i) => {
            return <div key={i}>
            <img src={user.userpic} />, {user.name}/>
            </div>
        })

        return <div>
            <ul>{name}</ul>
        </div>
    }
}

export default Follow
