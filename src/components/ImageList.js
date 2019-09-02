import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

// React wants to render new list of images and looks to the DOM to see if it has to
// OR whether the images are already represented in the DOM
// That is easy for React if it can compare keys, alt is important for accessible web standards

// React refs gives us direct access to DOM elements
// Traditional JS way to get an img height => ex. document.querySelector('img').clientHeight
// In JSX we define the Ref in the constructor, this will tell us about this image
//
// constructor(props) {
//  super(props)
//
// this.state =  { spans: 0 }
//
// this.imageRef = React.createRef();
// }
//
// this allows us to actually access the ref info BUT its aysnchronous because we are pulling from an api
// componentDidMount() {
//
// WRONG
//   console.log(this.imageRef.current.clientHeight)
//
// RIGHT
// this.imageRef.current.addEventListener('load', this.setSpans)
// }
//
//
// setSpans = () => {
// console.log(this.imageRef.current.clientHeight)
// we get the 150 from the clientHeight
// const spans = Math.ceil(height / 150)
// this.setState({ spans })
// }



// render() {
//  const { description, urls } = this.props.image;
//
//  return (
//  <div style={{gridRowEnd: `span ${this.state.spans}`}}>
//    <img ref={this.imageRef} alt={description} src={urls.regular} />
// </div>
// );
// }




// const ImageList = (props) => {
//   const images = props.images.map((image) => {
//   return <img key={image.id} src={image.urls.regular} alt={image.description} />
// });


// same as above but using destructuring
//   const images = props.images.map(({ id, urls, description }) => {
//   return <img key={id} src={urls.regular} alt={description} />
// });

// using an ImageCard component instead of doing all the work in this component
const ImageList = props => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;