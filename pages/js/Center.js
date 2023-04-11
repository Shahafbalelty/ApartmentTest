class Center extends React.Component {

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { onClick: this.props.onClick, type: this.props.type, className: "btn btn-primary" },
                this.props.text
            )
        );
    }

}