import { createTheme } from '@mui/material';
import { green, red } from '@mui/material/colors';


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