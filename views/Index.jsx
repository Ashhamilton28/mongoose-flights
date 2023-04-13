const React = require("react");

function Index(props) {
  const { flights } = props;

  return (
    <div>
      <nav>
        <a href="/flights/new">New Flight</a>
      </nav>
      
      <h1>Index Page</h1>

      <ul>
        {flights.map((flight, i) => {
          return (
            <li key={flight._id}>
              The <a href={`/flights/${flight._id}`}>{flight.airline}</a> is {flight.color}{" "}
              
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;