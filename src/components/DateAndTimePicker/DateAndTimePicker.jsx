import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";

const customTheme = createTheme({
  components: {
    MuiInputBase: {
      // Targeting the input component
      styleOverrides: {
        input: {
          fontSize: "0.80rem", // Reduce font size
          padding: "0px", // Adjust padding as needed
        },
        root: {
            width:"250px",
          height: "30px", // Ensure TextField takes the full height of its parent
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          // Adjusting the outlined label style
          transform: "translate(14px, 6px) scale(0.85)", // Label position when not shrunk
          "&.MuiInputLabel-shrink": {
            transform: "translate(14px, -10px) scale(0.75)", // Label position when shrunk
            backgroundColor: "#fff",
            padding: "0 2px",
          },
        },
      },
    },
    MuiPicker: {
      styleOverrides: {
        // This is a hypothetical selector; you'll need to adjust based on actual class names or component structure
        pickerContainer: {
          overflow: "hidden", // Attempt to hide overflow and thus scrollbars
        },
        // If the above doesn't work, consider targeting more specific parts
      },
    },

    // If you need to target the picker dialog specifically, you can add overrides for MuiPickersModal or similar components here
  },
});

export default function BasicDateTimePicker({
  formData,
  setFormData,
  formDataName1,
  formDataName2,
  label,
  disableFuture
}) {
  const [initialDateTime, setInitialDateTime] = useState(null);

  const handleDateTimeChange = (newValue) => {
    const newDate = dayjs(newValue);
    const computedDateTime = dayjs(
      `${newDate.format("DD-MM-YYYY")}T${newDate.format("HH:mm:ss")}`,
      "DD-MM-YYYYTHH:mm:ss"
    );

    setFormData({
      ...formData,
      [formDataName1]: newDate.format("DD-MM-YYYY"),
      [formDataName2]: newDate.format("HH:mm:ss"), // Keep seconds in the output
    });
  };
  return (
    <ThemeProvider theme={customTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <Box sx={{ minWidth: "100%", maxWidth: "100%", height: "auto" }}>
          <DateTimePicker
            slotProps={{
              actionBar: {
                actions: ["accept", "today", "clear", "cancel"],
              },
            }}
            views={["year", "month", "day", "hours", "minutes", "seconds"]}
            label={label}
            value={initialDateTime}
            onChange={handleDateTimeChange}
            ampm={false}
            format="DD-MM-YYYY HH:mm:ss"
            timeSteps={{ hours: 1, minutes: 1, seconds: 1 }}
            disableFuture={disableFuture}
            
            
          />
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
