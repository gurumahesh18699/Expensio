import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: '#4caf50 !important',
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: '#f44336 !important',
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}));