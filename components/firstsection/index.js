import FeatureCard from "../feature-card";

const FirstSection = () => {
  return (
    <div className="home-max-width1 max-content-container">
      <h2 className="home-text06 heading2">
        <span>
          Read
          <span
            dangerouslySetInnerHTML={{
              __html: " ",
            }}
          />
        </span>
        <span className="home-text08">everything in one place</span>
        <span> and</span>
        <br></br>
        <span> keep up with important news</span>
      </h2>
      <div className="home-cards-container">
        <FeatureCard image_src="/playground_assets/stars-200h.png"></FeatureCard>
        <FeatureCard
          text1="See how &gt;"
          heading="Follow favorite topics"
          image_src="/playground_assets/hearth-200h.png"
        ></FeatureCard>
        <FeatureCard
          text1="Learn more &gt;"
          heading="Read your emails"
          image_src="/playground_assets/mail-200h.png"
        ></FeatureCard>
        <FeatureCard
          text1="Learn more &gt;"
          heading="Read newspapers"
          image_src="/playground_assets/paper-200h.png"
        ></FeatureCard>
      </div>
    </div>
  );
};
export default FirstSection;
