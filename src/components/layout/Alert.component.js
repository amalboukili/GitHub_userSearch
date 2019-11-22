import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
  const { type, message } = props;
  return message ? (
    <div className="container">
      <div className={`toast toast-${type}`} style={toast}>
        <button className="btn btn-clear float-right"></button>
        {message}
      </div>
    </div>
  ) : (
    ''
  );
}
const toast = {
  marginTop: '6px',
  textAlign: 'left',
};

Alert.prototype = {
  type: PropTypes.string,
  message: PropTypes.string,
};

Alert.defaultProps = {
  type: 'info',
  message: 'Start your search',
};
export default Alert;
