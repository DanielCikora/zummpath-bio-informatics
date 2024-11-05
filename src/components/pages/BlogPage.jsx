import React from "react";
import BlogImage from "../assets/images/BlogImages/pexels-googledeepmind-18069423.jpg";
const BlogPage = () => {
  const posts = [
    {
      title: "Scouring the Scientific Literature with Large Language Models",
      excerpt:
        "Genomics England has developed a machine learning tool for scanning large volumes of scientific literature to find reports of gene-disease associations.",
      author:
        "Sam Barnett, Arina Puzriakova, Catherine Snow, Eleanor Williams, and Francisco Azuaje",
      date: "Oct 17, 2024",
      link: "https://www.genomicsengland.co.uk/bioinformatics/blog",
    },
    {
      title:
        "Understanding Genetic Links to Disease by Mapping Variants to Genes",
      excerpt:
        "This post introduces the context around variant-to-gene mapping, sharing the approach and information used to carry out the task.",
      author: "Elena Bernabeu and Chris Odhams",
      date: "Aug 1, 2024",
      link: "https://www.genomicsengland.co.uk/blog/pathology-whole-slide-images",
    },
    {
      title: "What Does a Bioinformatician Do?",
      excerpt:
        "A discussion on how the Bioinformatics Operations team supports the journey of a genomic sample.",
      author: "Aminata Tengbe",
      date: "Jun 17, 2024",
      link: "https://www.genomicsengland.co.uk/blog/pathology-whole-slide-images",
    },
    {
      title: "Pathology Whole Slide Images for Multimodal Cancer Research",
      excerpt:
        "This article discusses data quality and standards in digital pathology for machine learning research.",
      author: "Charlotte Jennings, Samuel Barnett, et al.",
      date: "Jun 6, 2024",
      link: "https://www.genomicsengland.co.uk/blog/pathology-whole-slide-images",
    },
    {
      title: "Increasing Gene Coverage for Developmental Disorders",
      excerpt:
        "This post describes how an external resource was used to improve gene coverage for testing patients with developmental disorders.",
      author: "Achchuthan Shanmugasundram",
      date: "May 2, 2024",
      link: "https://www.genomicsengland.co.uk/blog/pathology-whole-slide-images",
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
              Featured: Exploring Machine Learning in Bioinformatics
            </h2>
            <p className='mt-4 text-gray-800 text-xl'>
              Machine learning is transforming the field of bioinformatics...
            </p>
            <a
              href={posts[0].link}
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
