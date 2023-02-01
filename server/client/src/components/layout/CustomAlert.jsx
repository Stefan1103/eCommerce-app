import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';

const CustomAlert = () => {
	const alerts = useSelector((state) => state.alert);

	if (alerts !== null && alerts.length > 0) {
		return (
			<div>
				{alerts.map((alert) => {
					const { msg, alertType, id } = alert;
					return (
						<Alert key={id} variant={alertType}>
							<p style={{ textAlign: 'center', fontWeight: 600 }}>{msg}</p>
						</Alert>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
};

export default CustomAlert;
