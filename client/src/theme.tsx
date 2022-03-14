import { createTheme } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

const theme = createTheme({
	palette: {
		primary: {
			main: green[500],
			light: 'rgba(38, 41, 44, 0.2)'
		},
		error: {
			main: red[400]
		},
		success: {
			main: green[500]
		}
	}
});

export default theme;