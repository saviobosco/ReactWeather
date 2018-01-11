var React = require('react');

//var Examples = React.createClass({
//    render : function () {
//        return (
//            <h3> Example Component </h3>
//        )
//    }
//});

var Examples = (props) => {
    return (
        <div>
            <h3> Example! </h3>
            <p> Welcome to the example </p>
        </div>
    )
};

module.exports = Examples;