import React from "react";

export const Contact = () => {
  return (
    <div className=" my-5 grid grid-cols-1 justify-items-center h-[500px]">
      <text className="text-bold text-white font-mono text-4xl">
        Drop a mail to reach us !
      </text>
      <form
        className="grid p-3 border-purple-600 border rounded-lg"
        method="POST"
        action="https://formspree.io/f/xayrdyee"
      >
        <label className="input input-bordered flex items-center gap-2 w-[400px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            required
            name="Name"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-[400px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Email"
            required
            name="email"
          />
        </label>
        <textarea
          className="textarea textarea-bordered w-[400px]"
          placeholder="Message..."
          required
          name="message"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};
