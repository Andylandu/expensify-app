import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>User Info</h1>
        {props.isAuthenticated ? <p>This is something that you can read</p> : <p></p>}
        
    </div>
);

const requireAuthentication = (WrappedComponents) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <p>Welcome in our site</p> : <p>Please, login</p>}
            <WrappedComponents {...props} />
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} />, document.getElementById('app'));