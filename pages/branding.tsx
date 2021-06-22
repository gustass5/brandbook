import React from 'react';
import { Bubble } from '../src/components/Bubble';
import { Layout } from '../src/features/layout';

export default function Branding() {
	return (
		<Layout>
			<div className="flex bg-white h-full pb-32">
				<section className="flex flex-col justify-center mb-28 fontys-light w-full max-w-screen-lg mx-auto">
					<h1 className="text-5xl tracking-widest mt-32 mb-24">BRANDING</h1>
					<article className="flex text-lg space-y-6 space-x-32">
						<div className="flex flex-1 flex-col text-xl fontys-light tracking-widest space-y-2">
							<p className="fontys-bold mb-8">
								To make sure that the brand Is recognisable we use two
								brand elements descending from the logo.
							</p>
							<p className="fontys-normal pb-16">
								The dots come back in every outage. Through these dots
								people recognise the brand without seeing a logo. The
								dots stand for the core value’s open and innovation,
								because they are round and therefore welcoming. They can
								also transform, therefore they draw out innovation.
							</p>
							<p className="fontys-normal">
								The stripe is the second recognisable element from the
								brand. The stripe connects Fontys with the reimagined
								Innovation Lab. Because of this, when the stripe moves
								over elements, new elements appear.
							</p>
						</div>
						<div className="flex flex-col items-center justify-end space-y-6">
							<Bubble style="w-32 h-32" />

							<div className="w-3 bg-black h-32"></div>
						</div>
					</article>
				</section>
			</div>
		</Layout>
	);
}
