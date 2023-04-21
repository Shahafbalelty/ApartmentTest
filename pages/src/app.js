import React from "react";

class App extends React.Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {
			apartment: null
		}
		this.UpdateApartment = this.UpdateApartment.bind(this)
	}

	UpdateApartment(apartment) {
        this.setState({ apartment: apartment });
    }

	render() {
		return (
		<div><header><Logo /></header>
		<div className="row">
		<main>
		<Search updateApartment={this.UpdateApartment} />
		<ApartmentList apartment={this.state.apartment} />
		</main>
		</div>
		</div>
		)
	}
}

