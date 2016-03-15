var React = require('react');
var $ = require('jquery');

const defaultProps = {
  makes: [
    { makeId: 0, make: 'All'},
    { makeId: 1, make: 'Toyota'},
    { makeId: 2, make: 'Lexus'},
    { makeId: 3, make: 'Honda'},
    { makeId: 4, make: 'Acura'}
  ],
  models: [
    { modelId: 0, model: 'All'},
    { modelId: 1, model: 'Prius'},
    { modelId: 2, model: 'Camry'},
    { modelId: 3, model: 'Sienna'},
    { modelId: 11, model: 'GS'},
    { modelId: 12, model: 'IS'},
    { modelId: 21, model: 'Accord'},
    { modelId: 22, model: 'Civic'},
    { modelId: 31, model: 'TLX'},
    { modelId: 32, model: 'ILX'}
  ],
  endYear: 2015
};

class Inventory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      makeId: 0,
      modelId: 0,
      year: 0
    };

    this._handleChange = this._handleChange.bind(this);
    this._updateInventory = this._updateInventory.bind(this);
  }

  componentDidMount() {
    this._updateInventory();
  }


  _handleChange(e) {
    var key = e.target.name;
    var val = e.target.value;
    this.setState({
      [key]: val
    }, () => {
      this._updateInventory();
    });
  }

  _generateURL() {
    var { makeId, modelId, year } = this.state;
    return '/api/inventory/?makeId=' + makeId + '&modelId=' + modelId + '&year=' + year;
  }

  _updateInventory() {
    var url = this._generateURL();
    $.ajax({
      url: url,
      type: 'GET',
      success: (res) => {
        this.setState({
          inventory: res
        });
      }
    });
  }

  render() {
    var { 
      inventory,
      makeId,
      modelId,
      year 
    } = this.state;

    var {
      makes,
      models
    } = this.props;

    var yearOptions = (x, y) => {
      var options = [];
      for (x; x <= y; x++) {
        options.push(<option key={x} value={x}>{x}</option>)
      }
      return options;
    };

    return (
      <div>
        <h1>Inventory</h1>
        <div>
          <select name="makeId" value={makeId} onChange={this._handleChange}>
            {
              makes.map((m) => {
                return <option key={m.makeId} value={m.makeId}>{m.make}</option>;
              })
            }
          </select>
          <select name="modelId" value={modelId} onChange={this._handleChange}>
            {
              models.map((m) => {
                return <option key={m.modelId} value={m.modelId}>{m.model}</option>;
              })
            }
          </select>
          <select name="year" value={year} onChange={this._handleChange}>
            <option value={0}>All</option>
            {yearOptions(1997, 2015)}
          </select>
        </div>
        <div>
          {
            inventory.map((item, index) => {
              var { vin, make, model, year, price } = item;
              return (
                <div key={index}>
                  {vin}, {make}, {model}, {year}, {price}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
};

Inventory.defaultProps = defaultProps;

module.exports = Inventory;