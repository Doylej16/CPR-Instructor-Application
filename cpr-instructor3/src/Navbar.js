import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-between items-center max-w-4xl mx-auto p-4">
        <li>
          <a className="text-gray-300 hover:text-white mr-4" href="/">Home</a>
        </li>
        <li>
          <a className="text-gray-300 hover:text-white mr-4" href="/Registration">Register</a>
        </li>
        <li>
          <a className="text-gray-300 hover:text-white mr-4" href="/CourseGallery">CPR Course</a>
        </li>
        <li>
          <a className="text-gray-300 hover:text-white mr-4" href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

