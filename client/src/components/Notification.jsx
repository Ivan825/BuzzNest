import React, { useEffect, useState } from 'react';

function Notification({ message, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-yellow text-black p-2 rounded-lg fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        <div>{message}</div>
        <button onClick={onClose} className="text-black">
          Close
        </button>
      </div>
    </div>
  );
}

export default Notification;