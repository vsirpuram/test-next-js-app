import UserService from "user-sdk/dist/UserService/index";

interface ServerPageProps {
	params: { id: string };
}

const ServerPage = async ({ params }: ServerPageProps) => {
	const userService = new UserService();
	try {
		const user = await userService.getUser(Number(params.id));

		return (
			<div>
				<h1>{user.name}</h1>
				<p>{user.email}</p>
			</div>
		);
	} catch (error) {
		return <div>Failed to fetch user</div>;
	}
};

export default ServerPage;
