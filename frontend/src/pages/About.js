import React from "react";

export const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">About us</h1>
          <p className="py-6">
            At InstaShop, we believe in the power of community and the strength
            of local businesses. In a world dominated by impersonal e-commerce
            giants, we’re here to make a difference. Our platform is not just
            another online marketplace; it’s a vibrant community where local
            businesses thrive and customers discover the heart and soul of their
            neighborhoods.
          </p>
          <div className="collapse collapse-plus bg-base-200 w-[500px]">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What Makes Us Unique:
            </div>
            <div className="collapse-content">
              <p>
                ~ Personalized Storefronts: Each local business on InstaShop has
                its own dedicated storefront, ensuring they stand out and shine
                in the digital world.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Our Future Scope:
            </div>
            <div className="collapse-content">
              <p>
                {" "}
                ~ Smart Recommendation System: Discover new favorites
                effortlessly with our smart recommendation system, tailored just
                for you.
              </p>
              <p>
                {" "}
                ~ Customizable Store Layouts: Each business is unique, and so
                should their storefronts be. We'll be introducing customizable
                store layouts to reflect the personality of each business.
              </p>
              <p>
                ~ Subscribe to Your Favorite Shops: Stay updated with your
                favorite shops! We're working on a system that allows you to
                subscribe to your favorite shops for updates and exclusive
                offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
