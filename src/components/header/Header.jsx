import React, { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateTweet,
  updateTweetUrl,
  updateIsLoading,
  updateTweetId,
} from '../../features/tweet/tweetSlice';
import './header.css';
import { getIdFromUrl } from '../../utils';
import axios from 'axios';

const Header = () => {
  const { tweetUrl, tweetId } = useSelector((state) => state.tweet);
  const dispatch = useDispatch();

  // get the tweet url then extract the id from it
  const getTweet = async () => {
    dispatch(updateIsLoading(true));
    // dispatch(updateTweetId(getIdFromUrl(tweetUrl)));
    const { data } = await axios.get(
      `https://api.twitter.com/2/tweets/${tweetId}?tweet.fields=created_at&expansions=author_id,attachments.media_keys&media.fields=preview_image_url,url,type&user.fields=created_at,profile_image_url,verified`,
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    dispatch(updateIsLoading(false));
    dispatch(updateTweet(data));
  };
  const getId = () => {
    dispatch(updateTweetId(getIdFromUrl(tweetUrl)));
  };
  useEffect(() => {
    getTweet();
  }, [tweetId]);

  return (
    <header>
      <h1>Tweet Snapshot</h1>
      <section>
        <div className="input--container">
          <input
            type="text"
            onChange={(e) => dispatch(updateTweetUrl(e.target.value))}
            placeholder="Paste link here"
          />
        </div>
        <div className="search-icon" onClick={getId}>
          <FaSearch />
        </div>
      </section>
    </header>
  );
};

export default Header;
