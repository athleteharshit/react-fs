import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useField } from 'formik';

type TextFieldWrapperProps = {
  name: string;
} & TextFieldProps;

const StyledTextField = styled(TextField)<TextFieldWrapperProps>(({ theme }) => ({
  '& label': {
    color: theme.palette.primary.main,
  },
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiInput-underline:after': {},
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(0.6),
    font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
      1.8,
    )} Josefine Sans, sans-serif`,
    color: theme.palette.primary.main,
    '& fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.light,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.light,
    },
  },
}));

function TextFieldWrapper({ name, ...otherProps }: TextFieldWrapperProps) {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <StyledTextField {...configTextField} />;
}

export default TextFieldWrapper;
