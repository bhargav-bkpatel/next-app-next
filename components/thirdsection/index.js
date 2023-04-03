const ThirdSection = () => {
  return (
    <div className="home-max-width3 max-content-container">
      <div className="home-content-container2">
        <h1 className="home-text18 heading2">
          <span>
            The best content, handpicked for you.
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
          <span className="home-text20">In the morning.</span>
        </h1>
        <span className="home-text21 content-Light">
          <span>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Velit officia
            consequat duis enim velit mollit.
          </span>
          <br></br>
          <span>Lorem ipsum dolor sit amet.</span>
        </span>
      </div>
      <div className="home-image-container2">
        <img
          alt="image"
          src="/playground_assets/section-image2-1200w.png"
          className="home-image2"
        />
      </div>
    </div>
  );
};
export default ThirdSection;
