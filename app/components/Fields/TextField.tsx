interface TextFieldProps {
	name: string;
	label: string;
	type?: 'text' | 'password' | 'email';
}

export const TextField: React.FC<TextFieldProps> = ({ name, label, type = 'text' }) => {
	return (
		<div className="space-y-1 text-gray-700">
			<label htmlFor={name}>{label}</label>
			<div>
				<input
					className="border border-gray-300 rounded p-1 focus:ring focus:outline-none transition w-full"
					type={type}
					name={name}
				/>
			</div>
		</div>
	);
};
