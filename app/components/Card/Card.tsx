interface CardProps {
	header: string;
	children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, header }) => {
	return (
		<div className="max-w-md w-full space-y-5 p-2">
			<div className="flex flex-col rounded-md shadow bg-white p-4 md:p-10">
				<h1 className="text-center text-3xl text-gray-900 font-medium tracking-tight mb-6">
					{header}
				</h1>
				<div>{children}</div>
			</div>
		</div>
	);
};
