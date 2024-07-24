import { Autocomplete, ListSubheader, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function Autocomplete1({
    formData,
    setFormData,
    key,
    label
}) {

    const CustomListBox = React.forwardRef((props, ref) => {
        const { children, ...other } = props;
        const buttonColor1 = "#1976D2"; // This is an example color value
        return (
          <ul style={{paddingTop:0}} ref={ref} {...other}>
            <ListSubheader
              style={{ backgroundColor: buttonColor1, padding: "0px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography style={{ marginRight: "auto" }}>Name</Typography>
                <Typography style={{ marginLeft: "auto" }}>Code</Typography>
              </div>
            </ListSubheader>
            {children}
          </ul>
        );
      });


    const [suggestion, setSuggestion] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [searchkey, setSearchKey] = useState({})
    const [iTypeF2, setiTypeF2] = useState(1);
    
    useEffect(() => {
        setSearchKey(formData.sName || "");
       
      }, [formData?.sName]);

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


    useEffect(() => {
        const fetchData = async () => {
            handleOpen();
            const encodedSearchkey = encodeURIComponent(searchkey);
           
         
             const response =await  fetch(`http://103.120.178.195/Sang.Ray.Web.Api/Ray/GetProject?iStatus=${iTypeF2}&sSearch=${encodedSearchkey}`)
             
              const data = await response.json();
             
              if(data.Status ==="Success"){
                
              
                setSuggestion(JSON.parse(data.ResultData));
              }
              
            if (response?.status === "Success") {
                const myObject = JSON.parse(response?.result);
                setSuggestion(myObject);
            } else if (response?.status === "Failure") {
                setSuggestion([]);
            }
            handleClose();
            
           
        };
        fetchData();
    }, [ searchkey,iTypeF2]);


    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Autocomplete
    freeSolo  // Enable free solo mode
    id={key}
    size="small"
    value={formData?.sName || ""}
    onChange={handleAutocompleteChange}
    onInputChange={(event, newInputValue) => {
      
      setSearchKey(newInputValue);
      setFormData({
        sName: newInputValue,
        iId: null // Assuming default or reset ID
      });
    }}
    isOptionEqualToValue={(option, value) => option?.sName === value}
    options={suggestion}
    filterOptions={(options, { inputValue }) => {
        return options.filter((option) =>
            option.sName.toLowerCase().includes(inputValue.toLowerCase()) ||
            option.sCode.toLowerCase().includes(inputValue.toLowerCase())
        );
    }}
    autoHighlight
    getOptionLabel={(option) => (typeof option === "string" ? option : option.sName)}
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
                <Typography
                    style={{
                        marginRight: "auto",
                        fontSize: "12px",
                        fontWeight: "normal",
                    }}
                >
                    {option.sName}
                </Typography>
                <Typography style={{ marginLeft: "auto", fontSize: "12px" }}>
                    {option.sCode}
                </Typography>
            </div>
        </li>
    )}
    renderInput={(params) => (
        <TextField
            {...params}
            label={label}
            variant="standard"
            InputProps={{
                ...params.InputProps,
                disableUnderline: true, // Disables the underline on the standard variant
                endAdornment: (
                  <React.Fragment>
                      {params.InputProps.endAdornment || <ArrowDropDownIcon />} 
                  </React.Fragment>
                  ),
                style: {
                    // Overrides default styles
                    borderWidth: "1px",
                    borderColor: "#ddd",
                    borderStyle: "solid",
                    borderRadius: "5px",
                    fontSize: "12px",
                    height: "30px",
                    paddingLeft: "6px",
                },
                inputProps: {
                    ...params.inputProps,
                    onKeyDown: (event,newValue) => {
                        if (event.key === "F2") {
                            // Clear selected option and search key before handling F2 press
                           const updatedFormData = {
                            ...formData,
                            sName: newValue ? newValue?.sName : null,
                            iId: newValue ? newValue?.iId : null,
                          };
                          setFormData(updatedFormData);
                            setSearchKey("");

                            setiTypeF2((prevType) => (prevType === 1 ? 2 : 1));

                            // Prevent default F2 key action
                            event.preventDefault();
                        }
                    },
                },
            }}
            InputLabelProps={{
              style: {
                zIndex:1,
                // backgroundColor: '#fff', // Set the background color you want here
                padding: '0 7px', // Optional: Padding to prevent background clipping text
                borderRadius: '0px', // Optional: To make the background look nicer with rounded corners
                fontSize:"14px",
              }
            }}
            sx={{
              // Adjust the width as needed
              "& .MuiInputBase-root": {
                height: 30, // Adjust the height of the input area
              },
              "& .MuiInputLabel-root": {
                transform: "translate(8px, 6.5px) scale(0.9)", // Adjust label position when not focused
             
              },
              // "& .MuiInputLabel-shrink": {
              //   transform: "translate(14px, -9px) scale(0.75)", // Adjust label position when focused
              // },
              "& .MuiInputBase-input": {
                zIndex:1,
                fontSize: '0.75rem', // Adjust the font size of the input text
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "currentColor", // Keeps the current border color
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "currentColor", // Optional: Keeps the border color on hover
              },
              
            }}
        />
    )}
    ListboxComponent={CustomListBox}

    style={{ width: `auto` }}
/>
            {/* <Loader open={open} handleClose={handleClose} /> */}
        </>
    );
}
