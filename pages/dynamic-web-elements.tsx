import { Layout } from '../src/features/layout';

export default function DynamicWebElements() {
	return (
		<Layout>
			<div className="flex bg-white h-full pb-32">
				<section className="flex flex-col fontys-light items-center w-3/4 mx-auto">
					<h1 className="text-6xl my-32">DYNAMIC WEB ELEMENTS</h1>
					<article className="flex flex-col text-lg space-y-6">
						<h2 className="text-5xl">Components</h2>
						<div>
							<h3 className="text-3xl">Bento menu</h3>
							<div className="flex space-x-6">
								<div className="flex flex-col">
									<img
										className="w-16 h-16"
										src="/images/webUi_1.svg"
										alt=""
									/>
									<span>Bento</span>
								</div>

								<div className="flex flex-col">
									<img
										className="w-16 h-16"
										src="/images/webUi_2.svg"
										alt=""
									/>
									<span>Hamburger</span>
								</div>

								<div className="flex flex-col">
									<img
										className="w-16 h-16"
										src="/images/webUi_3.svg"
										alt=""
									/>
									<span>Alt-burger</span>
								</div>

								<div className="flex flex-col">
									<img
										className="w-16 h-16"
										src="/images/webUi_4.svg"
										alt=""
									/>
									<span>Meatball</span>
								</div>

								<div className="flex flex-col">
									<img
										className="w-16 h-16"
										src="/images/webUi_5.svg"
										alt=""
									/>
									<span>Kebab</span>
								</div>

								<div className="flex flex-col">
									<img
										className="w-16 h-16"
										src="/images/webUi_6.svg"
										alt=""
									/>
									<span>Döner</span>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-3xl">Buttons</h3>
							<div className="flex space-x-6">
								<div className="flex flex-col items-center">
									<img src="/images/webUi_7.svg" alt="" />
									<span>Primary button</span>
								</div>

								<div className="flex flex-col items-center">
									<img src="/images/webUi_8.svg" alt="" />
									<span>Secondary button</span>
								</div>

								<div className="flex flex-col items-center">
									<img src="/images/webUi_9.svg" alt="" />
									<span>Hover</span>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-3xl">Checkbox</h3>
							<div className="flex space-x-6">
								<div className="flex flex-col items-center">
									<img src="/images/webUi_10.svg" alt="" />
									<span>Un-checked</span>
								</div>

								<div className="flex flex-col items-center">
									<img src="/images/webUi_11.svg" alt="" />
									<span>Checked</span>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-3xl">Checkbox</h3>
							<div className="flex space-x-6">
								<div className="flex flex-col items-center">
									<img src="/images/webUi_12.svg" alt="" />
									<span>Un-checked</span>
								</div>

								<div className="flex flex-col items-center">
									<img src="/images/webUi_13.svg" alt="" />
									<span>Checked</span>
								</div>
							</div>
						</div>

						<h2 className="text-5xl">Animations</h2>

						<div>
							<h3 className="text-3xl">Mouse transformation</h3>
							<div className="flex space-x-6 items-center">
								<div className="flex flex-col items-center m-6">
									<img
										className="w-24 h-8"
										src="/images/webUi_14.svg"
										alt=""
									/>
									<span>Mouse effect</span>
								</div>

								<div className="flex flex-col  items-center m-6">
									<img
										className="w-24 h-8"
										src="/images/webUi_15.svg"
										alt=""
									/>
									<span>Hover effect</span>
								</div>

								<div className="flex flex-col items-center m-6">
									<img
										className="w-24 h-8"
										src="/images/webUi_16.svg"
										alt=""
									/>
									<span>Hover effect v2</span>
								</div>
							</div>
						</div>

						<div className="space-y-6">
							<h3 className="text-3xl">Page loader</h3>
							<div className="flex space-x-6 items-center">
								<div className="flex flex-col items-center">
									<img src="/images/webUi_17.svg" alt="" />
									<span>State 1</span>
								</div>

								<div className="flex flex-col ">
									<img src="/images/webUi_18.svg" alt="" />
									<span>State 2</span>
								</div>

								<div className="flex flex-col items-center">
									<img src="/images/webUi_19.svg" alt="" />
									<span>State 3</span>
								</div>
							</div>

							<div>
								<div className="flex flex-col">
									<img
										className="flex-1"
										src="/images/webUi_20.svg"
										alt=""
									/>
									<span>State 4</span>
								</div>

								<div className="flex flex-col">
									<img
										className="flex-1"
										src="/images/webUi_21.svg"
										alt=""
									/>
									<span>State 5</span>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-3xl">Page transition</h3>
							<div className="flex my-3 space-x-6">
								<div className="flex flex-col items-center">
									<img src="/images/page_trans_state_1.png" alt="" />
									<span>State 1</span>
								</div>

								<div className="flex flex-col items-center">
									<img src="/images/page_trans_state_2.png" alt="" />
									<span>State 2</span>
								</div>
							</div>
						</div>
					</article>
				</section>
			</div>
		</Layout>
	);
}
