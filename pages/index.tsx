import { Layout } from '../src/features/layout';

export default function Home() {
	return (
		<Layout>
			<span className="absolute top-10 right-4 text-white text-lg">
				Challenge spring 2021
			</span>
			<div className="flex flex-col h-full justify-center mx-48 text-white">
				<p className="text-9xl">Fontys ICT</p>
				<p className="text-9xl">InnovationLab</p>
				<p className="text-5xl">Brandbook Dynamic Identity</p>
			</div>
		</Layout>
	);
}
