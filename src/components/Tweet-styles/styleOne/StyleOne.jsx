import React, { useRef, useCallback } from 'react';

import { useSelector } from 'react-redux';
import { GoVerified } from 'react-icons/go';
import './styleOne.css';
import moment from 'moment';
import Loader from '../../Loader';
import html2canvas from 'html2canvas';
import { FaTwitter } from 'react-icons/fa';

const StyleOne = () => {
  const { tweet, bgColor, textColor, textFont, isLoading } = useSelector(
    (state) => state.tweet
  );
  const ref = useRef();
  // download image
  function downloadImage() {
    const image = ref.current;
    html2canvas(image, {
      logging: true,
      letterRendering: 1,
      allowTaint: false,
      useCORS: true,
    }).then(function (canvas) {
      const base64image = canvas.toDataURL('image/png');
      var anchor = document.createElement('a');
      anchor.setAttribute('href', base64image);
      anchor.setAttribute('download', 'twitter-image');
      anchor.click();
      anchor.remove();
    });
  }
  //++++++++++++++++++++++

  if (!tweet) return <Loader />;

  return (
    <>
      {isLoading && <Loader />}
      <section className="style--one">
        <article
          ref={ref}
          style={{
            backgroundColor: bgColor,
            color: textColor,
            fontFamily: textFont,
          }}
        >
          <div className="style--one--header">
            <img
              src={tweet?.includes?.users[0]?.profile_image_url}
              alt="user-image"
              className="user--image"
            />
            <div>
              <p>
                <span
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  {tweet?.includes?.users[0]?.name}
                </span>{' '}
                {tweet?.includes?.users[0]?.verified && <GoVerified />}
              </p>
              <small>@{tweet?.includes?.users[0]?.username}</small>
            </div>
          </div>
          <p>
            {tweet?.data?.text.split(' ').pop().startsWith('https://')
              ? tweet?.data?.text
                  .split(' ')
                  .slice(0, tweet?.data?.text.split(' ').length - 1)
                  .join(' ')
              : tweet?.data?.text}
          </p>
          {Object.keys(tweet?.includes).includes('media') && (
            <div className="content--image--container">
              <div className="content--image">
                {' '}
                <img src={tweet?.includes?.media[0]?.url} alt="" />
              </div>
              {/* {tweet?.includes?.media[1]?.url && (
              <div className="content--image">
                {' '}
                <img src={tweet?.includes?.media[1]?.url} alt="" />
              </div>
            )} */}
            </div>
          )}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p>
              {new Date(tweet?.data?.created_at).getHours()}:
              {new Date(tweet?.data?.created_at).getMinutes()} .{' '}
              {moment(tweet?.data?.created_at).format('ll')}
            </p>
            <FaTwitter />
          </div>
        </article>
        <button className="download--btn" onClick={downloadImage}>
          Download
        </button>
      </section>
    </>
  );
};

export default StyleOne;
