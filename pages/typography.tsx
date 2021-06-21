import { Layout } from '../src/features/layout';

export default function Typography() {
	return (
		<Layout>
			<div className="flex bg-white h-full pb-32">
				<section className="flex flex-col fontys-light items-center w-3/4 mx-auto">
					<h1 className="text-6xl my-32">TYPOGRAPHY</h1>
					<article className="flex text-lg space-y-6">
						<div className="flex flex-col">
							<span>Font to be used:</span>
							<span>Fontys Frutiger</span>
							<span>Family, in logo:</span>
							<span>FONTYS FRUTIGER LIGHT</span>
							<span>Spacing 300px</span>
						</div>
						<p>Fontys Frutiger Black</p>
					</article>
				</section>
			</div>
		</Layout>
	);
}
