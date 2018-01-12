var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        // calling the parent function
        var location = this.refs.location.value;
        // validating the data passed
        if ( location.length > 0 ) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render : function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="location" placeholder="search weather by city" />
                    <button className='button expanded hollow'> Get Weather </button>
                </form>
            </div>

        )
    }
});

module.exports = WeatherForm;
