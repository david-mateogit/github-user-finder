import React from 'react';

export default function Alert({ alert }) {
  return (
    <>
      {alert && (
        <div className={`alert alert-${alert.type}`}>
          <i className="fas fa-info-circle" /> {alert.msg}
        </div>
      )}
    </>
  );
}
