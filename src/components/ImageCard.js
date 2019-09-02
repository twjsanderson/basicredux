import React from 'react';

// Another part of creating separate components is styling and keeping the
// css controlled so JSX doesn't mess everything up (ie. css grid)

class ImageCard extends React.Component {
  render () {

    // destructuring
    const { description, urls } = this.props.image;

    // normal
    // alt={this.props.image.description}
    // src={this.props.image.urls.regular}

    return (
      <div>
        <img
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;