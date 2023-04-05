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
                'Search a apartment'
            ),
            React.createElement(
                'form',
                { onSubmit: e => this.OnSubmit(e) },
                React.createElement('input', { type: 'text', className: 'form-control', id: 'SearchInput', placeholder: 'apartment name' }),
                React.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary' },
                    'Search'
                )
            ),
            React.createElement('br', null),
            React.createElement('br', null)
        );
    }
}