class ApartmentList extends React.Component
{
	constructor(props) 
	{
		super(props);
	}

	render() {
        if(this.props.apartment === null)
            return (<div> </div>);

		return (                  <div> 
                        <Apartment apartment={this.props.apartment}/> <br/>
                        </div> );
	}
}

class Apartment extends React.Component
{
    constructor(props){
        super(props);
    }

    render() {
        const apartment = this.props.apartment
		return (	<div>
                    <span><img src={apartment.image_url}/></span><br/>
                    {' '}<span><strong>Apartment name: </strong> {apartment.name}</span> <br/>
                    <span style={{fontSize: '1rem'}}></span>
				</div>);
         }
}