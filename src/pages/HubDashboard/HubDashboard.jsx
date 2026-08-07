import React from 'react';
import { Box, Typography } from '@mui/material';

function HubDashboard() {
	return (
		<Box sx={{ p: 4 }}>
			<Typography variant='h4' component='h1' gutterBottom>
				Hub Dashboard Example
			</Typography>
			<Typography color='text.secondary'>
				Scaffold ready — same CRA + MUI setup as the sustainability websites.
			</Typography>
		</Box>
	);
}

export default HubDashboard;
