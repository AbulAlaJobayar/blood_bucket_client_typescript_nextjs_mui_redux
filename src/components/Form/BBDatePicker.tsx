import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Controller, useFormContext } from "react-hook-form";
import { SxProps } from "@mui/material";
export interface IDatePicker {
  name: string;
  size?: "small" | "medium";
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}
const BBDatePicker = ({
  name,
  size = "small",
  label,
  required,
  fullWidth = true,
  sx,
}: IDatePicker) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              {...field}
              label={label}
              timezone="system"
              value={value || Date.now()}
              onChange={(data) => onChange(data)}
              slotProps={{
                textField:{
                  required:required,
                  size:size,
                  sx:{
                    ...sx
                  },
                  variant:"outlined",
                  fullWidth:fullWidth
                }
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default BBDatePicker;
