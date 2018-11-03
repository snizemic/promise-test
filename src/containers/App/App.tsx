import * as React from 'react';
import { doIt, doIt2 } from '../../public/promise';

interface OwnProps {
}

interface OwnState {
	message1: string;
	message2: string;
}

class App extends React.Component<OwnProps, OwnState> {

	constructor(props: OwnProps) {
		super(props);
		this.state = {
			message1: 'Initial message1',
			message2: 'Initial message2',
		};
	}

	public async componentDidMount() {
		try {
			const message1 = await doIt();
			this.setState(() => ({
				message1
			}));
		} catch (error) {
			this.setState(() => ({
				message1: error
			}));
		}
		try {
			const message2 = await doIt2();
			this.setState(() => ({
				message2
			}));
		} catch (error) {
			this.setState(() => ({
				message2: error.message
			}));
		}
	}

	public render() {
		return (
			<div>
				<p>{this.state.message1}</p>
				<p>{this.state.message2}</p>
			</div>
		);
	}
}

export default App;
