import React from 'react'

class App2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'william'
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                Hello {this.state.name} <br />
                Change name here <input type = 'text' value = {this.state.name} onChange = {this.handleChange} />
            </div>
        )
    }
}

export default App2;