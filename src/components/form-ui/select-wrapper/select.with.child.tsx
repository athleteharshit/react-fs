import { styled, alpha } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Select, { SelectProps } from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

type SelectWrapperProps = {
  children: React.ReactNode;
} & SelectProps;

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    minHeight: 'auto !important',
    color: theme.palette.primary.main,
    borderRadius: theme.spacing(0.6),
    border: `1px solid ${theme.palette.primary.main}`,
    textTransform: 'capitalize',
    padding: theme.spacing(1, 2),
    font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
      1.4,
    )} Roboto sans, sans-serif`,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: theme.spacing(0.6),
      borderColor: theme.palette.primary.light,
      boxShadow: `0 0 0 0.2rem ${alpha(theme.palette.primary.main, 0.3)}`,
    },
  },
}));

const StyledSelect = styled(Select)<SelectProps>(({ theme }) => ({
  '& .MuiSelect-icon': {
    color: theme.palette.primary.main,
  },
}));

function SelectWithChild({ children, ...otherProps }: SelectWrapperProps) {
  return (
    <FormControl variant="standard">
      <StyledSelect input={<BootstrapInput />} {...otherProps}>
        {children}
      </StyledSelect>
    </FormControl>
  );
}

export default SelectWithChild;
