import { Layout } from '../src/features/layout';

export default function Home() {
	return (
		<Layout>
			<span className="absolute top-10 right-4 text-white text-lg fontys-light">
				Challenge spring 2021
			</span>
			<div className="flex flex-col h-full justify-center mx-48 text-white">
				<p className="text-9xl fontys-bold">Fontys ICT</p>
				<p className="text-9xl fontys-bold">InnovationLab</p>
				<p className="text-5xl fontys-light">Brandbook Dynamic Identity</p>
			</div>
		</Layout>
	);
}
