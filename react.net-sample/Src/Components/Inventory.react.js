var React = require('react');
var Filter = require('./Filter.react');
var $ = require('jquery');

const defaultProps = {
  inventory: [],
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
  years: (start, end) => {
    var options = [];
    options.push({
      year: 'All',
      yearId: 0
    });
    for(var y = start; y <= end; y++) {
      options.push({
        year: y,
        yearId: y
      });
    }
    return options;
  }
};

class Inventory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: this.props.inventory,
      makeId: 0,
      modelId: 0,
      year: 0
    };

    this._handleChange = this._handleChange.bind(this);
    this._updateInventory = this._updateInventory.bind(this);
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
      models,
      years
    } = this.props;

    return (
      <div>
        <h1>Inventory</h1>
        <div>
          <Filter name="makeId" 
            value={makeId} 
            options={makes}
            optionName="make" 
            optionValue="makeId" 
            handleChange={this._handleChange} 
          />
          <Filter name="modelId" 
            value={modelId} 
            options={models}
            optionName="model" 
            optionValue="modelId" 
            handleChange={this._handleChange} 
          />
          <Filter name="year"
            value={year}
            options={years(2011,2015)}
            optionName="year"
            optionValue="yearId"
            handleChange={this._handleChange}
          />
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