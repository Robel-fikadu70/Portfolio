// src/components/IconMarquee.jsx
import React from 'react';

// You can replace these with actual SVG components or <img> tags
// For SVGs, you might import them: import { ReactComponent as Icon1 } from './icons/icon1.svg';
const icons = [
  // { id: 1, element: '💻', label: 'Laptop Icon' },
  // { id: 2, element: '📱', label: 'Phone Icon' },
  // { id: 3, element: '🎨', label: 'Art Palette Icon' },
  // { id: 4, element: '⚙️', label: 'Settings Icon' },
  { id: 5, src: 'src/assets/icons8-tailwind-css-96.svg', label: 'tailwind' },
  { id: 6, src: 'src/assets/icons8-python-100.svg', label: 'python' },
  { id: 7, src: 'src/assets/icons8-python-50.svg', label: 'python' },
  { id: 8, src: 'src/assets/icons8-postgresql-96.svg', label: 'postgresql' },
  { id: 9, src: 'src/assets/icons8-nodejs-96.svg', label: 'nodejs' },
  { id: 10, src: 'src/assets/icons8-nextjs-96.svg', label: 'nextjs' },
  { id: 11, src: 'src/assets/icons8-mongodb-96.svg', label: 'mongodb' },
  { id: 12, src: 'src/assets/icons8-javascript-100.svg', label: 'javascript' },
  { id: 13, src: 'src/assets/icons8-express-js-100.svg', label: 'express-js'},
  
];

const Stack = () => {
  // Duplicate the icons array to create the seamless loop effect
  const duplicatedIcons = [...icons, ...icons];

  return (
    <section className="bg-transparent flex flex-col mb-10  items-center justify-center"> {/* Example section styling */}

      <div className="relative w-full overflow-hidden group"> {/* group for hover pause (optional) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-10 h-full w-1/3 bg-gradient-to-r from-gray-950 via-gray-900 to-transparent"/>

        <div className="flex w-max animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {duplicatedIcons.map((iconItem, idx) => (
            <div
              key={idx} // Using index for key is okay here because the list is static and duplicated
              className="flex items-center justify-center mx-6 sm:mx-8 md:mx-10" // Adjust spacing as needed
              aria-label={iconItem.label}>
              <img src={iconItem.src} alt={iconItem.label} className="h-20 w-20 sm:h-20 sm:w-20 bg-gray-300 p-5 rounded-3xl" />             
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/3 bg-gradient-to-l from-gray-900 via-gray-900 to-transparent"
        />
      </div>
    </section>
  );
};

export default Stack;