import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
	loader: async () => {
		const res = await fetch("http://localhost:8787/");
		return res.json();
	},
	component: Test,
});

function Test() {
	const data = Route.useLoaderData();

	return (
		<div>
			{JSON.stringify(data)}
			<h1>Hello</h1>
		</div>
	);
}
