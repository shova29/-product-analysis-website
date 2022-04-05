import React from "react";

const Blogs = () => {
  return (
    <article
      className="mt-16 ml-16 mr-16 mb-6"
      data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
    >
      <h2 className="text-center text-2xl font-bold mb-8">Question&Answer</h2>
      <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <p className="font-bold">
          <span>Question-01: What is a Context Api?</span>
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400 text-base">
          In React application, we tend to passed data in an exceedingly
          top-down approach via props. Generally, it's inconvenient sure enough
          styles of props which are needed through several components within the
          React application. The React Context API is that kind of components
          structure, which permits and shares data through all levels of the
          React application. The most purpose of Context API is to resolve the
          matter of prop drilling which also known as threading. The Context API
          provides the way to pass values in the middle of components while not
          expressly passing a prop via each level of the component tree.
        </p>
        <p class="text-gray-500 dark:text-gray-400 text-base">
          There are two major steps to use the react context within the React
          application. One is to line up a context consumer and defines the data
          that we wish to store. Another one is to use a context consumer
          whenever we would necessity of the data from the store. Context
          Providers takes for the value prop and pass it to consuming components
          that are descendants of this Provider. We can only connect one
          Provider within several consumers.
        </p>
      </div>
      <div>
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="font-bold">
            <span>
              Question-02: What are the differences among Inline, Block and
              Inline-Block elements?
            </span>
          </p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
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
                <tr className="bg-white border-b text-base dark:bg-gray-800 dark:border-gray-700">
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
                <tr className="bg-white border-b text-base dark:bg-gray-800 dark:border-gray-700">
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
                <tr className="bg-white border-b text-base dark:bg-gray-800 dark:border-gray-700">
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
                <tr className="bg-white border-b text-base   dark:bg-gray-800 dark:border-gray-700">
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
                <tr class="bg-white dark:bg-gray-800 text-base">
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
    </article>
  );
};

export default Blogs;
