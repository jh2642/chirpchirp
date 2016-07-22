import React from 'react'

class Timeline extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chirps: props.chirps,
            value: ''
        }
    }

    render() {
        var chirps = this.state.chirps.map((chirp, i) => {
            return <div key={i}><img src={chirp.user.userpic} />, {chirp.user.name}, {chirp.title}, {chirp.body}</div>
        })

        return <div>
            <input placeholder="Chirp here!" type="text" value={this.state.value} onChange={(e) => this.update(e)} onKeyPress={(e) => this.captureEnterKey(e)} />
            <ul>{chirps}</ul>
        </div>
    }

    update(e) {
        this.setState({value: e.target.value})
    }

    captureEnterKey(e) {
        if (e.charCode === 13) {
            var chirps = this.state.chirps
            chirps.push(e.target.value)
            this.setState({value: '', chirps: chirps})
        }
    }
}

export default Timeline
