"use client";
import { useEffect, useState } from "react";
import UserService from "user-sdk/dist/UserService";

export type User = {
	id: number;
	name: string;
	email: string;
	username: string;
	phone: string;
};

const ClientPage = () => {
	// Change user state to hold an array of users
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const userService = new UserService();
				// Fetch multiple users using getUsers
				const userData = await userService.getUsers();
				setUsers(userData);
			} catch (err) {
				setError("Failed to fetch users");
			}
		};

		fetchUsers();
	}, []);

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div>
			{users.length > 0 ? (
				// Map through users array and display each user's details
				users.map((user) => (
					<div key={user.id}>
						<h1>{user.name}</h1>
						<p>{user.email}</p>
						<hr />
					</div>
				))
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default ClientPage;
