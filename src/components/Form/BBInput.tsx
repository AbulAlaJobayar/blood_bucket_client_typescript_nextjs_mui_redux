import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
type TInputProps = {
  size?: "small" | "medium";
  type?: string;
  name: string;
  label?: string;
  fullWidth?: boolean;
  required?: boolean;
  sx?: SxProps;
  
};

const BBInput = ({
  size = "small",
  type = "text",
  name,
  label,
  fullWidth,
  required,
  sx,

}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          variant="outlined"
          type={type}
          size={size}
          fullWidth={fullWidth}
          required={required}
          placeholder={label}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default BBInput;
