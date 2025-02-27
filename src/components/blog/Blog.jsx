import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/image/blog1.jpg";
import Img2 from "../../assets/image/blog2.jpg";
import Img3 from "../../assets/image/blog3.jpg";

const Blog = () => {
  return (
    <>
      <div className=" dark:bg-gray-900 dark:text-white">
        <section data-aos="fade-up" className="container mb-10 py-8">
          <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <BlogCard Img={Img1} />
            <BlogCard Img={Img2} />
            <BlogCard Img={Img3} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
