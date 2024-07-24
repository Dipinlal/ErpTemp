// AlertContext.jsx
import React, { createContext, useContext, useState } from 'react';
import WarningMessage from '../../components/Warning/Warnings';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const showAlert = (type, msg) => {
    setAlertType(type);
    setMessage(msg);
    setAlert(true);
  };

  const handleAlertClose = () => {
    setAlert(false);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <WarningMessage
        open={alert}
        handleClose={handleAlertClose}
        message={message}
        type={alertType}
      />
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  return useContext(AlertContext);
};
