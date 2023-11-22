import { json, type DataFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { client } from '~/services/axios.server';

export const loader = async (dataArgs: DataFunctionArgs) => {
	const response = await client.get('/api/test');
	return json(response.data);
};

export default function Overview() {
	const data = useLoaderData();
	console.log('Data', data);
	return <div>Overview</div>;
}
