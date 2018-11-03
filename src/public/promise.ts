export const doIt = (): Promise<string> => {
	return new Promise((resolve: (message: string) => void, reject: (error: string) => void) => {
		setTimeout(() => {
			const coin = Math.random();
			console.log(coin);
			if (Math.random() < 0.4) {
				resolve('Job has been successfully done!');
			} else {
				reject('Error has occurred!');
			}
		}, 1000);
	});
};

export const doIt2 = (): Promise<string> => {
	return new Promise((resolve: (message: string) => void, reject: (error: Error) => void) => {
		setTimeout(() => {
			const coin = Math.random();
			console.log(coin);
			if (Math.random() < 0.4) {
				resolve('Job has been successfully done!');
			} else {
				reject(new Error(' Error has occurred!'));
			}
		}, 2000);
	});
};
