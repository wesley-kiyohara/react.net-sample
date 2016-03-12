var React = require('react');
var $ = require('jquery');

class Root extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/api/inventory/',
      type: 'GET',
      success: (res) => {
        this.setState({
          inventory: res
        });
      }
    });
  }

  render() {
    var inventory = this.state.inventory;

    return (
      <div>
        <h1>Hello World!</h1>
        <div>
          {
            inventory.map((item, index) => {
              var { vin, make, model, year } = item;
              return (
                <div key={index}>
                  {vin}, {make}, {model}, {year}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
};

module.exports = Root;