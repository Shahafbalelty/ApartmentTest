class PostApartment extends React.Component {
    constructor(props) {
        super(props);
        this.AddApartment = this.AddApartment.bind(this);
    }

    async AddApartment(event) {
        event.preventDefault();
        const email = event.target[0].value;
        const ApartmentName = event.target[1].value;
        const img = event.target[2].value;

        const response = await fetch('/api/createApartment', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ email: email, name: ApartmentName, imageUrl: img })
        });
    }

    render() {
        return React.createElement(
            'form',
            { onSubmit: e => this.AddApartment(e) },
            React.createElement(
                'div',
                { 'class': 'form-group' },
                React.createElement(
                    'label',
                    { 'for': 'exampleFormControlTextarea1' },
                    'Add Apartment:'
                ),
                React.createElement('br', null),
                React.createElement('input', { type: 'email', className: 'form-control1', id: 'SearchInput', placeholder: 'email' }),
                React.createElement('input', { type: 'text', className: 'form-control2', id: 'SearchInput', placeholder: 'apartment name' }),
                React.createElement('input', { type: 'text', className: 'form-control2', id: 'SearchInput', placeholder: 'image url' }),
                React.createElement(MySubmitButton, { text: 'Submit' })
            )
        );
    }
}