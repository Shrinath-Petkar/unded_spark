import React from 'react';

const Blog = () => {
  const data = [
    {
      date: 'in Design October 25, 2023',
      title: '10 Reasons why you should make a physical portfolio',
      subtitle: 'Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly...'
    },
    {
      date: 'in Design October 23, 2023',
      title: 'A Day in the Life: Cool and Exteriors',
      subtitle: 'Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly...'
    },
    {
      date: 'in Design October 15, 2023',
      title: 'Increasing productivity through workplace friends',
      subtitle: 'Use high-quality images and videos to create a visually appealing experience. Visuals of happy clients can significantly...'
    },
  ];

  return (
    <div className="pl-36 pt-24 bg-black">
      <p className="text-2xl text-white">Blog Post</p>
      <br />
      <p className="text-7xl mt-1 text-white">My Latest Articles</p>
      <br />
      <div className="flex mr-36 ">
        {data.map((post, index) => (
          <React.Fragment key={index}>
            <div className="relative group w-80 flex-shrink-0 flex flex-col">
              <div className="pb-10">
                <p className="text-xl text-white mb-2">{post.date}</p>
                <h2 className="text-2xl mt-5 text-white mb-4">{post.title}</h2>
                <p className="text-lg text-white mt-2 mb-6">{post.subtitle}</p>
                <div className="absolute bottom-4 left-1 hidden group-hover:flex items-center text-orange-500 font-semibold cursor-pointer">
                  <span>Read More</span>
                </div>
              </div>
            </div>
            {index < data.length - 1 && (
              <div className="w-1 border-l border-white mx-8"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Blog;
