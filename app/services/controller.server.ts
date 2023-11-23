const getController = async (endpoint: string) => {
	// TODO: Improve
	const response = await fetch(process.env.API_HOST + '/api' + endpoint).then(res =>
		res.json()
	);
	return response;
};

const postController = () => {
	// TODO: Implement
	return '';
};

export const controller = {
	get: getController,
	post: postController
};
