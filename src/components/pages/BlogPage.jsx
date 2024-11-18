import React from "react";
import BlogImage from "../assets/images/BlogImages/pexels-googledeepmind-18069423.jpg";
const BlogPage = () => {
  const posts = [
    {
      title:
        "Navigating the Inclusion Body Challenge: Problems and Effective Strategies",
      excerpt:
        "A deep dive into the challenges of inclusion body formation in recombinant protein expression and strategies to overcome them.",
      author: "John Doe, Jane Smith",
      date: "Nov 18, 2024",
      link: "https://blogs.quantumzyme.com/blog/1",
    },
    {
      title: "Enzyme Immobilization: A Sustainable Approach",
      excerpt:
        "Exploring enzyme immobilization techniques and their importance in sustainable biocatalysis and industrial applications.",
      author: "Alice Cooper, Mark Lee",
      date: "Nov 10, 2024",
      link: "https://blogs.quantumzyme.com/blog/2",
    },
    {
      title:
        "Unlocking Molecular Interactions: The Significance of Computational Molecular Biology and Molecular Docking",
      excerpt:
        "How computational molecular biology and molecular docking methods are unlocking the secrets of molecular interactions.",
      author: "Ravi Patel, Emily Thompson",
      date: "Nov 5, 2024",
      link: "https://blogs.quantumzyme.com/blog/3",
    },
    {
      title:
        "A Guide to Effective Protein Induction Strategies in Escherichia coli",
      excerpt:
        "A comprehensive guide on optimizing protein induction in E. coli for successful recombinant protein expression.",
      author: "David Lee, Sarah Johnson",
      date: "Oct 30, 2024",
      link: "https://blogs.quantumzyme.com/blog/4",
    },
    {
      title:
        "Catalytic Evolution: Advancing Biocatalysis with Enzyme Engineering",
      excerpt:
        "Exploring the process of catalytic evolution and how enzyme engineering is advancing biocatalysis for industrial applications.",
      author: "Liam Chen, Noah Brooks",
      date: "Oct 25, 2024",
      link: "https://blogs.quantumzyme.com/blog/5",
    },
    {
      title:
        "Catalytic Evolution: Advancing Biocatalysis with Enzyme Engineering",
      excerpt:
        "A second look at how catalytic evolution and enzyme engineering can advance biocatalysis, revolutionizing industrial processes.",
      author: "Liam Chen, Noah Brooks",
      date: "Oct 20, 2024",
      link: "https://blogs.quantumzyme.com/blog/6",
    },
    {
      title:
        "Soluble Biocatalysts: Screening and Production in Escherichia coli",
      excerpt:
        "An overview of soluble biocatalysts, their production in E. coli, and the importance of screening techniques for biotechnological applications.",
      author: "Olivia Green, James White",
      date: "Oct 15, 2024",
      link: "https://blogs.quantumzyme.com/blog/7",
    },
  ];
  return (
    <section className='bg-offWhite py-20 relative'>
      <h1 className='md:text-6xl mediumSmall:text-5xl text-4xl font-semibold text-center text-gray-800 md:mb-24 mb-16'>
        Blogs
      </h1>
      <div className='wrapper'>
        <div className='bg-white shadow-lg rounded-xl overflow-hidden mb-6'>
          <img
            className='h-auto w-full max-h-[500px] object-cover'
            src={BlogImage}
            alt='blog'
          />
          <div className='p-6'>
            <h2 className='md:text-4xl text-3xl font-bold text-royalGreen'>
              GO GREEN and CLEAN: Harnessing the beauty of enzymes for
              industrial applications
            </h2>
            <p className='mt-4 text-gray-800 text-xl'>
              Enzymes are bio-catalysts that help in accomplishing chemical...
            </p>
            <a
              href={posts[0].link}
              target='_blank'
              rel='noreferrer'
              className='inline-block cursor-pointer mt-4 text-royalGreen font-semibold hover:underline'
            >
              Read More
            </a>
          </div>
        </div>
        {/* Blog Post List */}
        <div className='flex flex-wrap'>
          <div className='w-full'>
            <div className='grid w-full grid-cols-1 md:grid-cols-2 gap-6'>
              {posts.map((post, index) => (
                <div
                  key={index}
                  className='bg-white w-full rounded-lg shadow p-4'
                >
                  <h3 className='md:text-3xl text-2xl font-bold text-royalGreen'>
                    {post.title}
                  </h3>
                  <p className='text-gray-800 text-xl mt-2'>{post.excerpt}</p>
                  <div className='text-sm text-gray-500 mt-4'>
                    By {post.author} on {post.date}
                  </div>
                  <a
                    href={post.link}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-block cursor-pointer mt-4 text-royalGreen font-semibold hover:underline'
                  >
                    Read More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
