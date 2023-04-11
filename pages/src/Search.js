class Search extends React.Component {
    constructor(props) {
        super(props)
        this.OnSubmit = this.OnSubmit.bind(this);
        this.SearchApartment = this.SearchApartment.bind(this);
    }

    async OnSubmit(event) {
        event.preventDefault();
        const name = event.target[0].value
        const result = await this.SearchApartment(name);
        this.props.updateApartments(result);
    }

    async SearchApartment(name) {
		const response = await fetch('/api/getApartment',{
			headers: {
            	'Content-Type':'application/json',
            	'Accept':'application/json'
        	},
			method:'POST',
			body: JSON.stringify({apartmentName:name}),
		})

        const data = await response.json()
        return data
	}


    render() {
        return (
            <div>
                <h3>שלום, בעל דירה </h3>

            <button className="one">Payments</button>
            <button className="one">Messages</button>
            <button className="one">Profile</button>
            <button className="one">Apartment</button>
            </div>
        )
    }
}