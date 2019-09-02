import React from 'react';


// uncontrolled --> we have to reach into the DOM, the source of truth is in the HTML DOC
// We don't want to store data in the html element
// controlled --> we want the state or source of truth to live in the application, the component



class SearchBar extends React.Component {

  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault(); //stops from the browser from auto submitting

    this.props.onSubmit(this.state.term)
  }

  // onInputChange(event) {
  //   console.log(event.target.value)
  // }

  // can reference in return using this.~~~~ OR write it directly in the JSX without the function name
  // onClick={(e) => console.log(e.target.value)}
  //
  // onInputClick() {
  //   console.log('clicked')
  // }

  // we can leave the function above alone without binding it if we use an arrow function in the JSX below
  // example: <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
