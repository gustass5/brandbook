import { Layout } from '../src/features/layout';

export default function DynamicWebElements() {
	return (
		<Layout>
			<div className="flex bg-white h-full">
				<section className="flex flex-col fontys-light items-center w-3/4 mx-auto">
					<h1 className="text-6xl my-32">DYNAMIC WEB ELEMENTS</h1>
					<article className="flex text-lg space-y-6"></article>
				</section>
			</div>
		</Layout>
	);
}
