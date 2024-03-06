import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ErrorComponent = ({ error }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (error) {
      setIsVisible(true);
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  return (
    <div className={`error ${isVisible ? 'visible' : 'hidden'}`}>
      {error && <p>{error}</p>}
    </div>
  );
};

ErrorComponent.propTypes = {
  error: PropTypes.string
};

export default ErrorComponent;
