class Search extends React.Component {
    constructor(props) {
        super(props);
        this.OnSubmit = this.OnSubmit.bind(this);
        this.SearchApartment = this.SearchApartment.bind(this);
    }

    async OnSubmit(event) {
        event.preventDefault();
        const name = event.target[0].value;
        const result = await this.SearchApartment(name);
        this.props.updateApartments(result);
    }

    async SearchApartment(name) {
        const response = await fetch('/api/getApartment', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ apartmentName: name })
        });

        const data = await response.json();
        return data;
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                null,
                '\u05E9\u05DC\u05D5\u05DD, \u05D1\u05E2\u05DC \u05D3\u05D9\u05E8\u05D4 '
            ),
            React.createElement(
                'button',
                { className: 'one' },
                'Payments'
            ),
            React.createElement(
                'button',
                { className: 'one' },
                'Messages'
            ),
            React.createElement(
                'button',
                { className: 'one' },
                'Profile'
            ),
            React.createElement(
                'button',
                { className: 'one' },
                'Apartment'
            )
        );
    }
}