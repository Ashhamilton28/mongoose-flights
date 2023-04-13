const React = require("react");

function New() {
  return (
    <div>
      <h1>Add A New Flight</h1>

      <form action="/flights" method="POST">
        <label>Airline:
            <input type="text" name="airline"/>
        </label><br/>
        <label>Flight Number:
            <input type="name" name="flightNo"/>
        </label><br/>
        <label>Depart Date:
            <input type="name" name="flightNo"/>
        </label><br/>
        <button type="submit" value="addFlight">Add Flight</button>
      </form>
    </div>
  );
}

module.exports = New;
