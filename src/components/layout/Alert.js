import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

export default function Alert() {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
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
