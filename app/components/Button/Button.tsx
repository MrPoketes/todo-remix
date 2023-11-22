import clsx from 'clsx';

interface ButtonProps {
	type?: 'submit' | 'button';
	children?: React.ReactNode;
	color?: 'red' | 'blue' | 'green';
}

export const Button: React.FC<ButtonProps> = ({
	type = 'submit',
	children,
	color = 'blue'
}) => {
	const styles = {
		blue: 'bg-blue-500',
		green: 'bg-green-500',
		red: 'bg-red-500'
	}[color];
	return (
		<button
			className={clsx(
				'w-full rounded p-1.5 font-semibold focus:ring focus:outline-none transition text-white',
				styles
			)}
			type={type}
		>
			{children}
		</button>
	);
};
