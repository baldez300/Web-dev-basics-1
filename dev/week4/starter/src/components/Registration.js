// The Registration component should consist of a form with a minimum of three fields (e.g., name, email, password).
// The Registration component should render a form element.
// The Registration component should render a label element with the text "Name".

import "./Registration.css";

function Registration() {
    return (
        <div className="registration-form">
            <h1 className="header-form">Registration</h1>
            <form className="form">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Registration;