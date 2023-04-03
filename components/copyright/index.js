import React from 'react'

const Copyright = (props) => {
  return (
    <>
      <div className="copyright-copyright">
        <div className="copyright-max-width max-content-container">
          <span className="copyright-text">
            <span className="copyright-text1">
              © All rights reserved
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://www.teleporthq.io"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="copyright-text2">@TeleportHQ.</span>
            </a>
            <span className="copyright-text3">
              {' '}
              Powered by
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://www.vercel.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="copyright-text4">Vercel</span>
            </a>
            <span className="copyright-text5">
              . Image source:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://www.unsplash.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="copyright-text6">Unsplash</span>
            </a>
            <span className="copyright-text7">.</span>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .copyright-copyright {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .copyright-max-width {
            align-items: stretch;
          }
          .copyright-text {
            color: var(--dl-color-grays-gray100);
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.5;
          }
          .copyright-text1 {
            font-style: normal;
            font-weight: 300;
          }
          .copyright-text2 {
            font-style: normal;
            font-weight: 300;
            text-decoration: underline;
          }
          .copyright-text3 {
            font-style: normal;
            font-weight: 300;
          }
          .copyright-text4 {
            font-style: normal;
            font-weight: 300;
            text-decoration: underline;
          }
          .copyright-text5 {
            font-style: normal;
            font-weight: 300;
          }
          .copyright-text6 {
            font-style: normal;
            font-weight: 300;
            text-decoration: underline;
          }
          .copyright-text7 {
            font-style: normal;
            font-weight: 300;
          }
          @media (max-width: 991px) {
            .copyright-max-width {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Copyright
