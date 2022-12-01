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
              src={tweet?.user?.profile_pic_url}
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
                  {tweet?.user?.name}
                </span>{' '}
                {tweet?.user?.is_verified && <GoVerified />}
              </p>
              <small>@{tweet?.user?.username}</small>
            </div>
          </div>
          <p>
            {tweet?.text.split(' ').pop().startsWith('https://')
              ? tweet?.text
                  .split(' ')
                  .slice(0, tweet?.text.split(' ').length - 1)
                  .join(' ')
              : tweet?.text}
          </p>
          {Object.keys(tweet).includes('media_url') && (
            <div className="content--image--container">
              <div className="content--image">
                {' '}
                <img src={tweet?.media_url[0]} alt="" />
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
              {new Date(tweet?.creation_date).getHours()}:
              {new Date(tweet?.creation_date).getMinutes()} .{' '}
              {moment(tweet?.creation_date).format('ll')}
            </p>
            <FaTwitter
              style={{
                fontSize: '1.8rem',
              }}
            />
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
