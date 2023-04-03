const SecondSection = () => {
  return (
    <div className="home-max-width2 max-content-container">
      <div className="home-image-container1">
        <img
          alt="image"
          src="/playground_assets/section-image1-1200w.png"
          className="home-image1"
        />
      </div>
      <div className="home-content-container1">
        <h1 className="home-text12 heading2">
          <span>
            Your favorite articles at your fingertips.
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
          <span className="home-text14">Always.</span>
        </h1>
        <span className="home-text15 content-Light">
          <span>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Velit officia
            consequat duis enim velit mollit.
          </span>
          <br></br>
          <span>Lorem ipsum dolor sit amet.</span>
        </span>
      </div>
    </div>
  );
};
export default SecondSection;
