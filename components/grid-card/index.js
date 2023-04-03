import React from 'react'

import PropTypes from 'prop-types'

const GridCard = (props) => {
  return (
    <>
      <div className="grid-card-grid-card">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="grid-card-image"
        />
        <span className="grid-card-text">{props.text}</span>
        <span className="content-Light">{props.text1}</span>
      </div>
      <style jsx>
        {`
          .grid-card-grid-card {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: 36px;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-grays-white100);
          }
          .grid-card-image {
            width: 60px;
            height: 60px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .grid-card-text {
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.3;
            margin-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

GridCard.defaultProps = {
  text1:
    'Lorem ipsum dolor sit amet. Velit officia lorem ipsum dolor consequat duis enim velit mollit.​',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: 'Challange yourself',
  image_alt: 'image',
}

GridCard.propTypes = {
  text1: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
}

export default GridCard
