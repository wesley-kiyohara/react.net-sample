var React = require('react');

class Filter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { 
      name,
      value,
      options,
      optionName,
      optionValue,
      handleChange 
    } = this.props;

    return(
      <select name={name} value={value} onChange={handleChange}>
        {
          options.map((o) => {
            return (
              <option key={o[optionValue]} value={o[optionValue]}>
                {o[optionName]}
              </option>
            );
          })
        }
      </select>
    );
  }
}

module.exports = Filter;