import React, { useEffect } from 'react';

const Book = () => {
  useEffect(() => {
    // Append the Calendly script dynamically to the document
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script if component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="book-page">
      {/* Calendly inline widget */}
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/thenscreationfilms-vgjf?hide_landing_page_details=1&hide_gdpr_banner=1" 
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </div>
  );
};

export default Book;
