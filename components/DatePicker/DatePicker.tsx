import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const lightTheme = createTheme({
    palette: {
      mode: "dark"
    }
});

  // Only include disabled option
  type MuiStaticDatePicker = Pick<DateProps, "disabled">;
  
  
  export interface DateProps extends MuiStaticDatePicker {
    disabled: boolean;
  }
    
  export const DatePicker = ({ disabled, ...rest }: DateProps) => (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker disabled={disabled}{...rest}></StaticDatePicker>
      </LocalizationProvider>
    </ThemeProvider>
  );
  
  export default DatePicker;