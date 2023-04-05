
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			apartment: null
		};
		this.UpdateApartment = this.UpdateApartment.bind(this);
	}

	UpdateApartment(apartment) {
		this.setState({ apartment: apartment });
	}

	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"header",
				null,
				React.createElement(Logo, null)
			),
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"main",
					null,
					React.createElement(Search, { updateApartment: this.UpdateApartment }),
					React.createElement(ApartmentList, { apartment: this.state.apartment })
				),
				React.createElement(
					"aside",
					null,
					React.createElement(PostApartment, null)
				)
			)
		);
	}
}