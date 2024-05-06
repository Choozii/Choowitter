import PostTwitForm from "../components/post-twit-form";
import styled from "styled-components";
import Timeline from "../components/timeline";

const Wrapper = styled.div`
  display : grid;
  gap : 50px;
  overflow-y ; scroll;
  grid-template-rows : 1fr 5fr;
`;

const Home = () => {
  return (
    <Wrapper>
      <PostTwitForm />
      <Timeline />
    </Wrapper>
  );
};

export default Home;
