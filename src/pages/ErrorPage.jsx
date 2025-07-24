import { useLocation } from "react-router-dom";
import { useState } from "react";

/**
 * Navbar component for navigation
 *
 * @author Alex
 * @description Error page component that displays error information based on the error code.
 * @param {Integer} errorCode - error code to display (default is 404)
 * @returns JSX.Element
 */

export default function TemplatePage({ errorCode = 404 }) {
  const location = useLocation();
  const errorNum = location.state?.errorNum || errorCode;

  const errorNames = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    408: "Request Timeout",
    429: "Too Many Requests",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
  };

  const errorDescriptions = {
    400: "The server could not understand the request.",
    401: "You must be authenticated to access this resource.",
    403: "You do not have permission to access this resource.",
    404: "The requested resource could not be found.",
    408: "The server timed out waiting for the request.",
    429: "You have sent too many requests in a given amount of time.",
    500: "Something went wrong on the server.",
    502: "The server received an invalid response from the upstream server.",
    503: "The server is currently unavailable (overloaded or down).",
    504: "The server did not receive a timely response from the upstream server.",
  };

  const errorName = errorNames[errorNum] || "Unknown Error";
  const errorDescription =
    errorDescriptions[errorNum] || "An unknown error occurred.";

  return (
    <div className="flex w-full h-screen flex-col items-center justify-center text-text">
      <div className="bg-box p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-7xl text-red-500 font-extrabold">{errorNum}</h1>
        <h1 className="text-3xl text-yellow-500 font-extrabold">{errorName}</h1>
        <p className="p-3">{errorDescription}</p>

        <a
          className="inline-block mt-4 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          href="/"
        >
          Back to Homepage
        </a>
      </div>
    </div>
  );
}
