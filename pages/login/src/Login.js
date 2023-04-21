/*const App = props => (
    <Login />
);
class Login extends React.Component{

    render(){
        return(
            <div id="loginform">
                <FormHeader title="Login" />
                <Form />
            </div>
        )
    }
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
    <div>
        <FormInput description="Username" placeholder="Enter your username" type="text" />
        <FormInput description="Password" placeholder="Enter your password" type="password"/>
        <FormButton title="Log in"/>
    </div>
);

const FormButton = props => (
    <div id="button" class="row">
        <button>{props.title}</button>
    </div>
);

const FormInput = props => (
    <div class="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder}/>
    </div>
);

ReactDOM.render(<App />, document.getElementById('container'));*/


class Login extends React.Component {
    render(){
        return(
            <div>
                <h1>login</h1>
                <form>
                    <div className="form-group">
                        <label htmlfor={"username"}>username</label>
                        <input id={"username"} type={"text"} className={"form-control"} />
                    </div>
                    <div className="form-group">
                        <label htmlFor={"password"}>password</label>
                        <input id={"password"} type={"text"} className={"form-control"}/>
                    </div>
                    <button className={"btn btn-primary"}>login</button>


                </form>
            </div>


        )
    }

}

