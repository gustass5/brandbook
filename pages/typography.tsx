import { Layout } from '../src/features/layout';

export default function Typography() {
	return (
		<Layout>
			<div className="flex bg-white h-full pb-32">
				<section className="flex flex-col justify-center mb-28 fontys-light max-w-screen-lg w-full mx-auto">
					<h1 className="text-5xl tracking-widest mt-32 mb-24">TYPOGRAPHY</h1>
					<article className="flex text-lg space-y-6">
						<div className="flex flex-col text-4xl fontys-light tracking-widest space-y-2">
							<span>Font to be used:</span>
							<span>Fontys Frutiger</span>
							<span>Family, in logo:</span>
							<span>FONTYS FRUTIGER</span>
							<span>LIGHT</span>
							<span>Spacing 300px</span>
						</div>
						<div className="">
							<div className="ml-28 py-20 pl-16 text-4xl fontys-bold border-l-8 border-black">
								Fontys Frutiger Black
							</div>
						</div>
					</article>
				</section>
			</div>
		</Layout>
	);
}
