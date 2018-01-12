var React = require('react');


var About = (props) => {
    return (
        <div>
            <h1 className='text-center page-title'> About! </h1>
            <p> This is a weather application built on React. I have built this for the Complete
              React Web Developer Course
             </p>
             <p>
               Here are some of the tools I used:
             </p>
             <ul>
               <li>
                 <a href='https://facebook.github.io/react'>React</a> - This was the javascript framework used
               </li>
               <li>
                 <a href='http://openweathermap.org'> Open weather Map</a> - I used Open Weather Map to Search for
                 weather data by city name .
               </li>
             </ul>
        </div>
    )
};
module.exports = About;
