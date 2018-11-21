import * as React from 'react';
import { doIt, doIt2, doIt3 } from '../../public/promise';
import SimpleComponent from '../../public/simple-component';

interface OwnProps {
}

interface OwnState {
	message1: string;
	message2: string;
	loading: boolean;
}

class App extends React.Component<OwnProps, OwnState> {

	constructor(props: OwnProps) {
		super(props);
		this.state = {
			message1: 'Initial message1',
			message2: 'Initial message2',
			loading: true,
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

		try {
			const loading = await doIt3();
			this.setState(() => ({
				loading
			}));
		} catch (error) {
			console.log(error);
		}
	}

	public render() {
		return (
			<div>
				<p>{this.state.message1}</p>
				<p>{this.state.message2}</p>
				<SimpleComponent loading={this.state.loading}/>
			</div>
		);
	}
}

export default App;
