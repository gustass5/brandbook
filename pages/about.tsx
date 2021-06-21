import { Layout } from '../src/features/layout';

export default function About() {
	return (
		<Layout>
			<div className="flex bg-white h-full pb-32">
				<section className="flex flex-col text-lg fontys-light w-3/4 mx-auto">
					<h1 className="text-6xl my-32 mx-auto">ABOUT</h1>
					<article className="flex flex-col space-y-6 mb-8">
						<h1 className="text-5xl">Brandstatement</h1>
						<p>
							We give colour to the world of tomorrow. Drawing our ideas
							outside of today's lines. By constantly challenging
							progress. With original experiments and surprising results.
							With innovative answers to practical research questions.
							With combined forces and talents. With curiosity and
							excitement. We do this together in the Fontys ICT
							InnovationLab.
						</p>
						<p>
							An inspiring environment where chance encounters lead to new
							insights. Where students, teachers and the work field have
							free reign to learn, research and work together. Where we
							form a community that builds a network of knowledge,
							information and technology. An environment where applied
							research shapes the world of tomorrow.
						</p>
						<p>
							Together we push the boundaries of today, so we can explore
							the potential of tomorrow. Fontys ICT InnovationLab - Daring
							the future starts today
						</p>
					</article>

					<article className="flex flex-col space-y-6">
						<h1 className="text-5xl">The tone of voice</h1>

						<div>
							<h2 className="text-3xl">Light normal</h2>
							<p>
								We don’t talk big, but we are also not a bar. Because
								everybody is a specialist and we are all colleagues.
							</p>
						</div>

						<div>
							<h2 className="text-3xl">Factual</h2>
							<p>We are a school, so we prove what we say or tell.</p>
						</div>

						<div>
							<h2 className="text-3xl">No-nonsense</h2>
							<p>
								No long texts or speeches, we get to the point, but when
								when clarification is required we provide that aswell.
							</p>
						</div>

						<div>
							<h2 className="text-3xl">Ambitious</h2>
							<p>
								We believe in everything we say. We try to push
								boundries, but we don’t give false hopes.
							</p>
						</div>

						<div>
							<h2 className="text-3xl">Progressive</h2>
							<p>
								We adapt to the here and now, because we don’t want to
								restrict anybody. With this in mind we’re also not a
								hipster organization.
							</p>
						</div>
					</article>
				</section>
			</div>
		</Layout>
	);
}
