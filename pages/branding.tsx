import { Layout } from '../src/features/layout';

export default function Branding() {
	return (
		<Layout>
			<div className="flex bg-white h-full">
				<section className="flex flex-col fontys-light items-center w-3/4 mx-auto">
					<h1 className="text-6xl my-32">BRANDING</h1>
					<article className="flex flex-col text-lg space-y-6">
						<p>
							To make sure that the brand Is recognisable we use two brand
							elements descending from the logo.
						</p>
						<p>
							The dots come back in every outage. Through these dots
							people recognise the brand without seeing a logo. The dots
							stand for the core value’s open and innovation, because they
							are round and therefore welcoming. They can also transform,
							therefore they draw out innovation.
						</p>
						<p>
							The stripe is the second recognisable element from the
							brand. The stripe connects Fontys with the reimagined
							Innovation Lab. Because of this, when the stripe moves over
							elements, new elements appear.
						</p>
					</article>
				</section>
			</div>
		</Layout>
	);
}
