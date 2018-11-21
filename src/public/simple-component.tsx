import * as React from 'react';
import { withLoading } from './loading-hoc';

const SimpleComponent = () => {
	return (
		<div>I am Simple Component</div>
	);
};

export default withLoading(SimpleComponent);
