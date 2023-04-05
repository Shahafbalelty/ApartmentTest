class ApartmentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.apartment === null) return React.createElement(
            'div',
            null,
            ' '
        );

        return React.createElement(
            'div',
            null,
            React.createElement(Apartment, { apartment: this.props.apartment }),
            ' ',
            React.createElement('br', null)
        );
    }
}

class Apartment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const apartment = this.props.apartment;
        return React.createElement(
            'div',
            null,
            React.createElement(
                'span',
                null,
                React.createElement('img', { src: apartment.image_url })
            ),
            React.createElement('br', null),
            ' ',
            React.createElement(
                'span',
                null,
                React.createElement(
                    'strong',
                    null,
                    'Apartment name: '
                ),
                ' ',
                apartment.name
            ),
            ' ',
            React.createElement('br', null),
            React.createElement('span', { style: { fontSize: '1rem' } })
        );
    }
}