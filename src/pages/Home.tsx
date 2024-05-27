// import React, { useEffect, useState } from 'react';
// import { getPostList } from '../api';
import PostListItem from '../components/PostListItem';
import { IPost, IResponsePostList, TAG } from '../api/types';
import NoPostList from '../components/NoPostList';
import useGetPostList from '../queries/useGetPostList';

const list = [
  {
    post: {
      id: 1,
      title: '1번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
  {
    post: {
      id: 2,
      title: '2번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
  {
    post: {
      id: 3,
      title: '3번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
];

const Home = () => {
  // const [postList, setPostList] = useState<IResponsePostList>([]);
  const { data:postList = [], isError, isLoading } = useGetPostList();

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  // const fetchPostList = async () => {
  //   const { data } = await getPostList();
  //   // const sortedData = data.sort((a: IPost, b: IPost) => {
  //   //   if (a.id >= b.id) return -1;
  //   //   else return 1;
  //   // });
  //   data.reverse();
  //   setPostList(data);
  // };

  // useEffect(() => {
  //   fetchPostList();
  // }, []);

  if (postList.length === 0) {
    return <NoPostList />;
  }

  return <div>{
    postList.map((item) => {
      return (
        <PostListItem 
          key={item.id} 
          id={`${item.id}`} 
          title={item.title} 
          contents={item.contents} 
          tag={item.tag} 
        />
        // <PostListItem keu={item.id} {...item} />
      );
    })
  }</div>;
};

export default Home;
