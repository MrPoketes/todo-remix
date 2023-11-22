import { redirect, type DataFunctionArgs, type MetaFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { Button } from '~/components/Button/Button';
import { Card } from '~/components/Card/Card';
import { TextField } from '~/components/Fields/TextField';

export const meta: MetaFunction = () => {
	return [
		{ title: 'New Remix App' },
		{ name: 'description', content: 'Welcome to Remix!' }
	];
};

export const action = async (dataArgs: DataFunctionArgs) => {
	// TODO: implement authentication
	const formData = await dataArgs.request.formData();
	console.log('formData', formData);
	return redirect('/overview');
};

export default function Index() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<Card header="Login to your account">
				<Form className="space-y-5" method="post">
					<TextField type="text" name="username" label="Username" />
					<TextField type="password" name="password" label="Password" />
					<Button>Submit</Button>
				</Form>
			</Card>
		</div>
	);
}
