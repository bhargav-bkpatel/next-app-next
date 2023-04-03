import Slide from "../slide";

const SectionFour = () => {
  return (
    <>
      <div className="home-max-width4 max-content-container">
        <h2 className="home-text24 heading2">
          <span>People love Feedbox.</span>
          <br></br>
          <span className="home-text26">So would you.</span>
          <span className="home-text27"></span>
        </h2>
      </div>
      <div data-type="slider" className="home-slider">
        <Slide></Slide>
        <Slide
          Role="DESIGN DIRECTOR"
          Author="Bill Smith"
          image_src="/playground_assets/vector%202-700w.png"
          Testimonial='“Stunning app! I use it everyday since I discovered it and love it every since. It really makes newsreading a pleasure. I enjoy all the customization options available, super highly recommended!"'
          Testimonial2="Super highly recommended!”"
          rootClassName="slide-root-class-name"
        ></Slide>
        <Slide
          Role="FREELANCE WRITER"
          Author="Julia Xang"
          image_src="/playground_assets/vector%202%20%5B2%5D-700w.png"
          Testimonial="“Feedbox is very easy to use and flexible! I especially like the pre-made templates that are accessible; they're extraordinary for monitoring a few feed sources and various RSS Feeds together.”"
          rootClassName="slide-root-class-name1"
        ></Slide>
      </div>
    </>
  );
};
export default SectionFour;
