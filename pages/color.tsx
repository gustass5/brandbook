import { Layout } from '../src/features/layout';

export default function Color() {
	return (
		<Layout>
			<div className="flex bg-white h-full">
				<section className="flex flex-col fontys-light items-center w-3/4 mx-auto">
					<h1 className="text-6xl my-32">COLOR</h1>
					<article className="text-lg space-y-6">
						<p>
							Use of color is the same as with the logo guidelines. With
							the formal/fixed elements the only colors that are allowed
							are black and white.
						</p>
						<p>
							For the dynamic elements there are endless possibilities for
							color usage. The guideline for these type of outages are
							free as long as the only other dynamic parts are again the
							strip and “lab” part as mentioned in the logo section.
						</p>
					</article>
				</section>
			</div>
		</Layout>
	);
}
