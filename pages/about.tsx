import React from 'react';
import { Bubble } from '../src/components/Bubble';
import { Layout } from '../src/features/layout';

export default function About() {
	return (
		<Layout>
			<div className="flex bg-white h-full pb-32">
				<section className="flex flex-col justify-center mb-28 fontys-light w-full max-w-screen-lg mx-auto">
					<h1 className="text-5xl tracking-widest mt-32 mb-24">ABOUT</h1>
					<article className="space-y-16">
						<div className="flex flex-1 flex-col text-xl fontys-light tracking-widest space-y-6">
							<h2 className="text-4xl">Brandstatement</h2>

							<p className="fontys-normal">
								We give colour to the world of tomorrow. Drawing our
								ideas outside of today's lines. By constantly
								challenging progress. With original experiments and
								surprising results. With innovative answers to practical
								research questions. With combined forces and talents.
								With curiosity and excitement. We do this together in
								the Fontys ICT InnovationLab.
							</p>
							<p className="fontys-normal">
								An inspiring environment where chance encounters lead to
								new insights. Where students, teachers and the work
								field have free reign to learn, research and work
								together. Where we form a community that builds a
								network of knowledge, information and technology. An
								environment where applied research shapes the world of
								tomorrow.
							</p>
							<p className="fontys-normal">
								Together we push the boundaries of today, so we can
								explore the potential of tomorrow. Fontys ICT
								InnovationLab - Daring the future starts today
							</p>
						</div>
						<div className="flex flex-1 flex-col text-xl fontys-light tracking-widest space-y-6">
							<h2 className="text-4xl">The tone of voice</h2>

							<p className="fontys-normal">
								Light informal <br />
								We don’t talk big, but we are also not a bar. Because
								everybody is a specialist and we are all colleagues.
							</p>
							<p className="fontys-normal">
								Factual
								<br />
								We are a school, so we prove what we say or tell.
							</p>
							<p className="fontys-normal">
								No-nonsense
								<br />
								No long texts or speeches, we get to the point, but when
								when clarification is required we provide that aswell.
							</p>
							<p className="fontys-normal">
								Ambitious
								<br />
								We believe in everything we say. We try to push
								boundries, but we don’t give false hopes.
							</p>
							<p className="fontys-normal">
								Progressive
								<br />
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
