import React from "react"


class MainItem extends React.Component {

    constructor(props) {
        super(props)
        this.handlerItemClick = this.handlerItemClick.bind(this)
    }

    handlerItemClick() {
        this.props.delete(this.props.posi)
    }

    render() {
        return (
            <div
                onClick={this.handlerItemClick}>{this.props.content}</div>
        )
    }
}
export default MainItem