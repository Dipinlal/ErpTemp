import React from 'react';

function AutofillStyle({ currentTheme }) {
  const autofillStyle = `
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px ${currentTheme.thirdColor} inset !important;
      -webkit-text-fill-color: ${currentTheme.primaryButtonColor} !important;
    }
  `;

  return (
    <style>
      {autofillStyle}
    </style>
  );
}

export default AutofillStyle;
