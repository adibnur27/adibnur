import React from "react";

const ContactIcon = () => {
  return (
    <div className="">
      {/* ClipPath untuk bentuk squircle */}
      <svg width={0} height={0} style={{ position: "absolute" }}>
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
          </clipPath>
        </defs>
      </svg>

      <div className="relative flex gap-x-3 p-2">
        {/* Instagram */}
        <a
          href="https://instagram.com/adib.nurr"
          target="_blank"
          rel="noopener noreferrer"
          style={{ clipPath: "url(#squircleClip)" }}
          className="w-8 h-8 bg-gradient-to-br from-pink-500 to-yellow-500 
                     flex items-center justify-center shadow-lg border border-pink-400/50 
                     cursor-pointer transition-all duration-300 ease-out 
                     hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white">
            <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 .001 6.001A3 3 0 0 0 12 9z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/adibnur27"
          target="_blank"
          rel="noopener noreferrer"
          style={{ clipPath: "url(#squircleClip)" }}
          className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 
                     flex items-center justify-center shadow-lg border border-gray-500/50 
                     cursor-pointer transition-all duration-300 ease-out 
                     hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white">
            <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.844 10.943c.574.105.786-.248.786-.553 0-.272-.01-.993-.015-1.948-3.192.694-3.867-1.54-3.867-1.54-.523-1.33-1.277-1.686-1.277-1.686-1.043-.714.079-.699.079-.699 1.152.082 1.758 1.183 1.758 1.183 1.026 1.756 2.693 1.249 3.35.955.105-.743.402-1.249.73-1.538-2.55-.289-5.231-1.275-5.231-5.674 0-1.253.446-2.277 1.176-3.08-.118-.289-.51-1.452.112-3.026 0 0 .96-.307 3.146 1.176a10.9 10.9 0 0 1 2.866-.385c.973.004 1.953.132 2.867.386 2.184-1.483 3.142-1.176 3.142-1.176.624 1.574.232 2.737.114 3.026.732.803 1.174 1.827 1.174 3.08 0 4.41-2.686 5.381-5.248 5.664.414.356.783 1.065.783 2.147 0 1.55-.014 2.8-.014 3.181 0 .307.21.664.792.552A11.5 11.5 0 0 0 23.5 12c0-6.352-5.148-11.5-11.5-11.5z" />
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:adibnur.job@gmail.com"
          style={{ clipPath: "url(#squircleClip)" }}
          className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 
                     flex items-center justify-center shadow-lg border border-red-500/50 
                     cursor-pointer transition-all duration-300 ease-out 
                     hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white">
            <path d="M12 13.065L1.5 6.75V18a2.25 2.25 0 0 0 2.25 2.25h16.5A2.25 2.25 0 0 0 22.5 18V6.75l-10.5 6.315zM12 10.935L22.5 4.5H1.5L12 10.935z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/adib-nur-lubis"
          target="_blank"
          rel="noopener noreferrer"
          style={{ clipPath: "url(#squircleClip)" }}
          className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 
                     flex items-center justify-center shadow-lg border border-blue-500/50 
                     cursor-pointer transition-all duration-300 ease-out 
                     hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.6v1.64h.05c.5-.95 1.7-1.95 3.5-1.95 3.7 0 4.4 2.45 4.4 5.63V21H19v-6.02c0-1.44-.03-3.29-2-3.29-2 0-2.3 1.56-2.3 3.17V21H11V9z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ContactIcon;
