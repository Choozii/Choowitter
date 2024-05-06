import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Tweet from "./tweet";

export interface ITweet {
  id: string;
  photo?: string;
  tweet: string;
  userId: string;
  userName: string;
  createdAt: number;
}

const Wrapper = styled.div``;
const Timeline = () => {
  const [tweets, setTweets] = useState<ITweet[]>([]);

  const fetchTweets = async () => {
    const tweetsQuery = query(
      collection(db, "tweets"),
      orderBy("createdAt", "desc"),
    );

    const snapshot = await getDocs(tweetsQuery);

    const tweetArr = snapshot.docs.map((doc) => {
      const { tweet, createdAt, userId, userName, photo } = doc.data();
      return { tweet, createdAt, userId, userName, photo, id: doc.id };
    });

    setTweets(tweetArr);
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <Wrapper>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Wrapper>
  );
};

export default Timeline;
