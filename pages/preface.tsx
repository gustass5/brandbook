import { Layout } from '../src/features/layout';

export default function Preface() {
	return (
		<Layout>
			<div className="flex bg-white h-full">
				<section className="flex flex-col fontys-light items-center w-3/4 mx-auto">
					<h1 className="text-6xl my-32">PREFACE</h1>
					<article className="text-lg">
						<p>
							In collaboration with the marketing communication team of
							the Fontys ICT Innovation Lab. This brand guide will provide
							as a guide line for the way of communicating the (dynamic)
							identity, the core values and tone of voice of the Fontys
							ICT Innovation Lab.
						</p>
					</article>
				</section>
			</div>
		</Layout>
	);
}
