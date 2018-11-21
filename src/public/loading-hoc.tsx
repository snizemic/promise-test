import * as React from 'react';

interface WithLoadingProps {
	loading: boolean;
}

export const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
	return class WithLoading extends React.Component<P & WithLoadingProps> {
		public render() {
			const {loading, ...props} = this.props as WithLoadingProps;
			return loading ? <div>Loading...</div> : <Component{...props}/>;
		}
	};
};
