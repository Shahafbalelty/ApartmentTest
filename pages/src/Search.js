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
            <h3>Search a apartment</h3>
			<form onSubmit={e => this.OnSubmit(e)}>
		    <input type="text" className="form-control" id="SearchInput" placeholder="apartment name"/>
	        <button type="submit" className="btn btn-primary">Search</button>
	    	</form><br/><br/>
            </div>
        )
    }
}