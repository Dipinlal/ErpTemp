import React, { useCallback, useEffect, useState } from "react";
import {
  Autocomplete,
  TextField,
  Typography,
  ListSubheader,
  Paper,
} from "@mui/material";
import { secondryColor } from "../../config";

const AutoCompleteTable = ({
  formData,
  setFormData,
  autoId,
  autoLabel,
  isMandatory,
  disabled,
 
}) => {

  const [iTypeF2, setiTypeF2] = useState(1);
  const [AutoMenu, setAutoMenu] = useState([]);
  const [autoSearchKey, setautoSearchKey] = useState("");
  const [sCodeReq, setsCodeReq] = useState(false);
  const [error, setError] = useState({ isError: false, message: "" });

  const CustomListBox = React.forwardRef((props, ref) => {
    const { children, ...other } = props;

    return (
      <ul style={{ paddingTop: 0 }} ref={ref} {...other}>
        <ListSubheader
          style={{ backgroundColor: secondryColor, padding: "5px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography style={{ marginRight: "auto" }}>Name</Typography>
            {sCodeReq && (
              <Typography style={{ marginLeft: "auto" }}>Code</Typography>
            )}
          </div>
        </ListSubheader>
        {children}
      </ul>
    );
  });
  // Effect to sync state with prop changes
  useEffect(() => {
    setautoSearchKey(formData?.sName || "");
    if(formData?.sName)
    setFormData({
      ...formData,
      sName: formData?.sName ?? null,
      iId: formData?.iId ?? null,
    });
  }, []);
 
  const handleAutocompleteChange = (event, newValue) => {
    const updatedFormData = {
      ...formData,
      sName: newValue ? newValue.sName : null, //"" was replaced by null
      iId: newValue ? newValue.iId : null, //"" was replaced by null
    };

    setFormData(updatedFormData); // This will now update the parent's state
    setiTypeF2(1);
    // if (isMandatory && !newValue) {
    //   setError({ isError: true, message: 'This field is required.' });
    // } else {
    //   setError({ isError: false, message: '' });
    // }
  };
  // const validateInput = (newValue) => {
  //   if (isMandatory && !newValue) {
  //     setError({ isError: true, message: 'This field is required.' });
  //   } else {
  //     setError({ isError: false, message: '' });
  //   }
  // };

  const fetchSelectedItem = async (fieldName) => {
    try {
      const encodedSearchkey = encodeURIComponent(fieldName);
           
         
       const response =await  fetch(`http://103.120.178.195/Sang.Ray.Web.Api/Ray/GetProject?iStatus=1&sSearch=${encodedSearchkey}`)
       
        const data = await response.json();
       
        if(data.Status ==="Success"){
          
        
          setAutoMenu(JSON.parse(data.ResultData));
        }
        
      if (response?.status === "Success") {
          const myObject = JSON.parse(response?.result);
          setAutoMenu(myObject);
      } else if (response?.status === "Failure") {
          setAutoMenu([]);
      }
    } catch (error) {
      console.error("Failed to fetch selected item:", error);
    }
    return null; // Return null if no item is found or in case of an error
  };

  //get AutoMenu
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const encodedSearchkey = encodeURIComponent(autoSearchKey);
           
         
       const response =await  fetch(`http://103.120.178.195/Sang.Ray.Web.Api/Ray/GetProject?iStatus=1&sSearch=${encodedSearchkey}`)
       
        const data = await response.json();
       
        if(data.Status ==="Success"){
          const results = JSON.parse(data.ResultData)
          const currentSelection = results.find(
            (option) => option.sName === formData?.sName
          );

          // Ensure the current selection is always in the menu
          if (!currentSelection && formData?.sName) {
            const selectedItem = await fetchSelectedItem(
              formData?.sName
            );
            if (selectedItem) {
              results.unshift(selectedItem); // Add to the start of the list
            }
          }
        
          setAutoMenu(JSON.parse(data.ResultData));
        }
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [iTypeF2, autoSearchKey]);
  
  useEffect(() => {
    if (AutoMenu && AutoMenu[1]?.sCode) {
      setsCodeReq(true);
    }
  }, [AutoMenu]);
  // useEffect(() => {//for edit case
  //   console.log(formDataHeader);
  //   const matchingItem = AutoMenu.find(item => item.Id.toString() === formDataHeader[key1]?.toString());
  //   if (matchingItem) {
  //     setFormData({
  //       ...formData,
  //       sName: matchingItem.Name,
  //       sCode: matchingItem.Code,
  //       iId: matchingItem.Id,
  //       [sFieldName]: matchingItem.Id // assuming sFieldName is the field to store the iId
  //     });
  //   }
  // }, [formDataHeader[key1],AutoMenu])

  //  useEffect(() => {
  //   if(triggerValidation){
  //     validateInput(formDataHeader[key1])
  //   }

  //   resetTriggerVAlidation()
  //  }, [triggerValidation])

  return (
    <Autocomplete
      disabled={disabled}
      PaperComponent={({ children }) => (
        <Paper style={{ minWidth: "150px", maxWidth: "300px" }}>
          {children}
        </Paper>
      )}
      
      id={autoId}
      options={AutoMenu}
      getOptionLabel={(option) => option?.sName ?? ""}
      value={
        AutoMenu.find((option) => option?.sName.trim() === formData?.sName) ||
        null
      }
      onChange={handleAutocompleteChange}
      filterOptions={(options, { inputValue }) => {
        return options.filter(
          (option) =>
            option.sName?.toLowerCase().includes(inputValue.toLowerCase()) ||
            option.sCode?.toLowerCase().includes(inputValue.toLowerCase())
        );
      }}
      onInputChange={(event, newInputValue) => {
        setautoSearchKey(newInputValue);
      }}
      renderOption={(props, option) => (
        <li {...props}>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography style={{ marginRight: "auto", fontSize: "12px" }}>
              {option.sName}
            </Typography>
            {option.sCode && (
              <Typography style={{ marginLeft: "auto", fontSize: "12px" }}>
                {option.sCode}
              </Typography>
            )}
          </div>
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={autoLabel}
          // variant="standard"
          error={error.isError}
          helperText={error.isError ? error.message : null}
          InputProps={{
            ...params.InputProps,
            autoComplete: "off",
            // disableUnderline: true, // Disables the underline on the standard variant
            style: {
              // Overrides default styles
             
              borderColor: "transparent",
              borderStyle: "solid",
              
              fontSize: "12px",
              height: "36px",
          
              
            },
            inputProps: {
              ...params.inputProps,
              autoComplete: "off",
              //maxLength: iMaxSize,
              onKeyDown: (event, newValue) => {
                if (event.key === "F2") {
                  // Clear selected option and search key before handling F2 press
                  const updatedFormData = {
                    ...formData,
                    sName: newValue ? newValue?.sName : "",
                    iId: newValue ? newValue?.iId : 0,
                  };
                  setFormData(updatedFormData);

                  setautoSearchKey("");

                  setiTypeF2((prevType) => (prevType === 1 ? 2 : 1));

                  // Prevent default F2 key action
                  event.preventDefault();
                }
              },
            },
          }}
          InputLabelProps={{
            style: {
              fontSize: "16px",
              padding: '0 0px',
              zIndex:1,
              // backgroundColor: '#fff',
            },
          }}
          sx={{
            "& .MuiOutlinedInput-input": {
              padding: "8px 14px", // Reduce padding to decrease height
              transform: "translate(10px, -10px) scale(1)",
            },
            "& .MuiInputBase-input": {
              zIndex:2,
              fontSize: '0.75rem', // Adjust the font size of the input text
            },
            "& .MuiInputLabel-outlined": {
              transform: "translate(14px, 22px) scale(0.85)", // Adjust the label position
            },
            "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
              transform: "translate(14px, 6px) scale(0.75)",
              // backgroundColor: "#fff",
              padding: "0px 2px",
            },
            
            
            // "& .MuiInputLabel-outlined.Mui-focused": {
            //   color: "currentColor", // Keeps the current color of the label
            // },
            // "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            //   {
            //     borderColor: "currentColor", // Keeps the current border color
            //   },
          }}
        />
      )}
      ListboxComponent={CustomListBox}
      style={{ width: "auto" }}
    />
  );
};

export default AutoCompleteTable;
