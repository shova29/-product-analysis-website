import React from "react";

const Blogs = () => {
  return (
    <div
      className="mt-16 ml-16 mr-16 mb-2"
      id="accordion-color"
      data-accordion="collapse"
      data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
    >
      <h2 id="accordion-color-heading-1">
        <button
          type="button"
          class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-color-body-1"
          aria-expanded="true"
          aria-controls="accordion-color-body-1"
        >
          <span>Question-01: What is a Context Api?</span>
          <svg
            data-accordion-icon
            class="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-1"
        class="hidden"
        aria-labelledby="accordion-color-heading-1"
      >
        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            In React application, we tend to passed data in an exceedingly
            top-down approach via props. Generally, it's inconvenient sure
            enough styles of props which are needed through several components
            within the React application. The React Context API is that kind of
            components structure, which permits and shares data through all
            levels of the React application. The most purpose of Context API is
            to resolve the matter of prop drilling which also known as
            threading. The Context API provides the way to pass values in the
            middle of components while not expressly passing a prop via each
            level of the component tree.
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            There are two major steps to use the react context within the React
            application. One is to line up a context consumer and defines the
            data that we wish to store. Another one is to use a context consumer
            whenever we would necessity of the data from the store. Context
            Providers takes for the value prop and pass it to consuming
            components that are descendants of this Provider. We can only
            connect one Provider within several consumers.
          </p>
        </div>
      </div>

      <h2 id="accordion-color-heading-3">
        <button
          type="button"
          class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-color-body-3"
          aria-expanded="false"
          aria-controls="accordion-color-body-3"
        >
          <span>
            Question-02: What are the differences among Inline, Block and
            Inline-Block elements?
          </span>
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-3"
        class="hidden"
        aria-labelledby="accordion-color-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Inline
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Block
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Inline-Block
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    Inline elements don’t start in an exceedingly new line
                    afterward the element.{" "}
                  </td>
                  <td className="px-6 py-4">
                    Block elements continually begin in an exceedingly new line.
                  </td>
                  <td className="px-6 py-4">
                    Inline-Block elements doesn't add a line break.{" "}
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    Inline elements enable different elements to take a seat to
                    their left and right.{" "}
                  </td>
                  <td className="px-6 py-4">
                    But block elements don’t enable other elements to take a
                    seat.
                  </td>
                  <td className="px-6 py-4">
                    Inline-block elements also enable other elements to take a
                    seat to their left and right.{" "}
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    Inline elements don’t have top and bottom of margin and
                    padding.
                  </td>
                  <td className="px-6 py-4">
                    But block elements have top and bottom margins and padding.
                  </td>
                  <td className="px-6 py-4">
                    However inline-block elements respect top and bottom of
                    margin and padding.{" "}
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">
                    Inline elements respect left & right margins and padding
                  </td>
                  <td className="px-6 py-4">
                    Also, block elements don’t have left & right margin and
                    padding.
                  </td>
                  <td className="px-6 py-4">
                    However inline-block elements doesn’t have left & right
                    margin and padding.
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <td className="px-6 py-4">
                    Inline elements doesn’t permit to set a width and height on
                    the element.
                  </td>
                  <td className="px-6 py-4">
                    On the other hand, block elements conquer the full width on
                    the element always.
                  </td>
                  <td className="px-6 py-4">
                    Inline-block permits to set a width and height on the
                    element.{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
