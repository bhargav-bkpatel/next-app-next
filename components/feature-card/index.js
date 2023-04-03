import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard = (props) => {
  return (
    <>
      <div className="feature-card-card">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card-image"
        />
        <h4 className="feature-card-text heading4">{props.heading}</h4>
        <span className="feature-card-text1 content-Light">{props.text}</span>
        <span className="feature-card-text2">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .feature-card-card {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            max-width: 285px;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .feature-card-image {
            width: 60px;
            height: 60px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .feature-card-text {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card-text1 {
            color: var(--dl-color-grays-gray100);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card-text2 {
            color: var(--dl-color-backgrounds-primary);
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 600;
            line-height: 1.75;
          }
          .feature-card-text2:hover {
            text-decoration: underline;
          }
          @media (max-width: 767px) {
            .feature-card-card {
              width: 50%;
            }
          }
          @media (max-width: 479px) {
            .feature-card-card {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  text1: 'Get started >',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  heading: 'Search for ideas',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

FeatureCard.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard
