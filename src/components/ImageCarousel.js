

export const ImageCarousel = (props) => {
    const { paths } = props;
    return (
      <div className="slideshow-container fade">
        <div className="Containers">
          <div className="MessageInfo">1 / 3</div>
          <img alt="" src="image1.jpg" style="width:100%" />
          <div className="Info">First caption</div>
        </div>
  
        <div className="Containers">
          <div className="MessageInfo">2 / 3</div>
          <img alt="" src="image2.jpg" style="width:100%" />
          <div className="Info">Second Caption</div>
        </div>
  
        <div className="Containers">
          <div className="MessageInfo">3 / 3</div>
          <img alt="" src="image3.jpg" style="width:100%" />
          <div className="Info">Third Caption</div>
        </div>
  
        <a className="Back" onclick="plusSlides(-1)">
          &#10094;
        </a>
        <a className="forward" onclick="plusSlides(1)">
          &#10095;
        </a>
      </div>
    );
  };