import GridCard from "../grid-card";

const SectionFive = () => {
  return (
    <div className="home-max-width5 max-content-container">
      <div className="home-heading-container">
        <h2 className="home-text28 heading2">
          <span>If you love simplicity, you’ll</span>
          <br></br>
          <span>
            simply love
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
          <span className="home-text31">Feedbox.</span>
        </h2>
        <span className="content-Light">
          <span>
            Go to App Store, install Feedbox and start changing your reading
            habits to
          </span>
          <span className="home-text34"></span>
          <span>day!</span>
        </span>
      </div>
      <div className="home-get-the-app">
        <img
          alt="image"
          src="/playground_assets/frame-1200w.png"
          className="home-image3"
        />
        <img
          alt="image"
          src="/playground_assets/frame%2034-200h.png"
          className="home-image4"
        />
      </div>
      <div className="home-cards-container1">
        <GridCard image_src="/playground_assets/vector%203-200h.png"></GridCard>
        <GridCard
          text="Follow your friends"
          image_src="/playground_assets/vector%203%20%5B1%5D-200h.png"
        ></GridCard>
        <GridCard
          text="Declutter your life inbox"
          image_src="/playground_assets/vector%203%20%5B2%5D-200h.png"
        ></GridCard>
        <GridCard
          text="Less apps, more space"
          image_src="/playground_assets/vector%203%20%5B3%5D-200h.png"
        ></GridCard>
      </div>
    </div>
  );
};
export default SectionFive;
