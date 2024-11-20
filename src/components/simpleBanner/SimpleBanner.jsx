import React from "react";
import video1 from "../../assets/video/Sabinus the tactics man 🤣 (oga sabinus).mp4";

const SimpleBanner = () => {
  return (
    <>
      <div className="bg-primary">
        <div data-aos="fade-up" className="container py-8 md:py-12">
          <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 md:gap-8">
            <div className="px-2">
              <iframe
                className=" aspect-video w-full"
                src={video1}
                title="Youtube video player"
                frameborder="0"
                allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="flex flex-col items-center gap4 text-center text-white dark:text-white md:col-span-2 md:items-start md:text-left">
              <h1 className="text-3xl font-bold">
                Market your next project with Oki
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem distinctio blanditiis culpa recusandae minima
                reiciendis explicabo esse consectetur iste perferendis, vero,
                odio quod consequuntur autem magni nisi eum nostrum ullam!
              </p>
              <button className="btn-primary !bg-white !text-black">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleBanner;
