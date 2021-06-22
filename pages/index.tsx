import { Layout } from '../src/features/layout';

export default function Home() {
	return (
		<Layout showCorner={false}>
			<span className="absolute top-10 right-4 text-white text-lg fontys-light">
				Challenge spring 2021
			</span>
			<div className="flex flex-col h-full justify-center mx-48 text-white">
				<h1 className="text-9xl fontys-bold -ml-2">Fontys ICT</h1>
				<h1 className="text-9xl fontys-bold mb-3 -ml-2">InnovationLab</h1>
				<h2 className="text-5xl fontys-light mb-12 -ml-1">
					Brandbook Dynamic Identity
				</h2>
				<p className="max-w-2xl text-2xl fontys-bold mb-6">
					In collaboration with the marketing communication team of the Fontys
					ICT Innovation Lab.
				</p>
				<p className="max-w-2xl text-2xl fontys-normal">
					This brand guide will provide as a guide line for the way of
					communicating the (dynamic) identity, the core values and tone of
					voice of the Fontys ICT Innovation Lab.
				</p>
			</div>
		</Layout>
	);
}
