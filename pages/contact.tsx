import React from 'react';
import { Layout } from '../src/features/layout';

export default function Contact() {
	return (
		<Layout>
			<div className="flex bg-white h-full pb-32">
				<section className="flex flex-col justify-center mb-28 fontys-light w-full max-w-screen-lg mx-auto">
					<h1 className="text-5xl tracking-widest mt-32 mb-24 text-center">
						CONTACT
					</h1>
					<article className="space-y-16 w-full max-w-sm mx-auto">
						<form action="">
							<div className="space-y-8 mb-16">
								<input
									type="text"
									placeholder="your name"
									name="name"
									className="py-4 px-5 w-full shadow-lg rounded-xl focus:outline-none"
									style={{
										boxShadow: '0 7px 23px 1px rgb(0 0 0 / 25%)'
									}}
								/>
								<input
									type="email"
									placeholder="your email"
									name="email"
									className="py-4 px-5 w-full shadow-lg rounded-xl focus:outline-none"
									style={{
										boxShadow: '0 7px 23px 1px rgb(0 0 0 / 25%)'
									}}
								/>
								<input
									name="company"
									type="text"
									placeholder="your company"
									className="py-4 px-5 w-full shadow-lg rounded-xl focus:outline-none"
									style={{
										boxShadow: '0 7px 23px 1px rgb(0 0 0 / 25%)'
									}}
								/>
							</div>
							<textarea
								name="message"
								placeholder="message"
								className="py-4 px-5 mb-8 w-full shadow-lg rounded-xl focus:outline-none resize-none h-36"
								style={{
									boxShadow: '0 7px 23px 1px rgb(0 0 0 / 25%)'
								}}
							></textarea>

							<div className="flex justify-center">
								<button
									type="submit"
									className="px-12 py-3 rounded-lg bg-black text-white focus:outline-none"
								>
									Send
								</button>
							</div>
						</form>
					</article>
				</section>
			</div>
		</Layout>
	);
}
