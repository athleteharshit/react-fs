import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

type InputFieldProps = TextFieldProps;

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& label': {
    color: theme.palette.primary.main,
  },
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiInput-underline:after': {},
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
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

function InputField(props: InputFieldProps) {
  return <StyledTextField {...props} />;
}

export default InputField;
