export default function Page() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="kefir-care-content flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-16 px-16 bg-white dark:bg-black sm:items-start" aria-label="Milk Kefir Care Guide">
				<div>
					<h1 className="text-3xl font-bold">Caring for Milk Kefir Grains</h1>
					<section className="my-4" aria-labelledby="feeding-instructions">
						<h2 className="font-bold text-xl" id="feeding-instructions">Daily Feeding Instructions</h2>
						<p>Milk kefir grains require fresh milk daily to remain healthy.</p>

						<h3 className="font-bold mt-2">Equipment Needed</h3>
						<ul>
							<li>glass jars, 12-16ounces</li>
							<li>plastic wrap, cheesecloth, or other type of lid</li>
							<li>fine mesh strainer, plastic or stainless steel</li>
						</ul>

						<h3 className="font-bold mt-2">Basic Feeding Ratio</h3>
						<ul>
							<li>1 tablespoon kefir grains</li>
							<li>1 to 2 cups fresh milk</li>
						</ul>
						<p>You may adjust the milk quantity depending on how quickly your grains ferment and your desired thickness.</p>

						<h3 className="font-bold mt-2">Directions</h3>
						<ol>
							<li>Place kefir grains in a clean glass jar.</li>
							<li>Add fresh milk (cow, goat, or sheep milk all work well).</li>
							<li>Cover the jar with a breathable lid (cloth secured with a band or a loose-fitting lid).</li>
							<li>Leave at room temperature (68–75°F / 20–24°C) for approximately 18–24 hours.</li>
							<li>Once fermentation is complete, strain the kefir through a non-reactive strainer (plastic or stainless steel) into a separate container.</li>
							<li>Transfer the grains immediately into fresh milk to begin the next cycle.</li>
						</ol>
						<h3 className="font-bold mt-2">Notes</h3>
						<p>Avoid prolonged contact with reactive metals such as aluminum. Occasional contact with stainless steel during straining is safe.</p>
						<p>Consistency is important. Grains thrive on regular feeding at roughly the same temperature and interval each day.</p>
					</section>
					<hr className="my-4" />
					<section className="my-4" aria-labelledby="ready-indicator">
						<h3 className="font-bold" id="ready-indicator">How to Know When It’s Ready</h3>
						<ul>
							<li>The milk has thickened to a drinkable yogurt-like consistency.</li>
							<li>It has a pleasant tangy aroma.</li>
							<li>You may see slight separation between curds and whey near the bottom of the jar.</li>
							<li>Small bubbles may be visible, indicating active fermentation.</li>
						</ul>
						<p>Taste is the best indicator. It should be mildly tart but not sharply sour. Longer fermentation increases acidity and thickness.</p>
						<p>If fully separated into large curds and clear whey, the kefir is over-fermented but still usable. Simply strain and adjust the next fermentation time or increase the amount of milk.</p>
					</section>
					<hr className="my-4" />
					<section className="my-4" aria-labelledby="splitting">
						<h3 className="font-bold" id="splitting">Splitting and Sharing</h3>
						<p>Over time, kefir grains naturally multiply. When you find that:</p>
	<ul>
						<li>Fermentation is consistently finishing too quickly,</li>

						<li>You are needing large quantities of milk daily,</li>

						<li>Or the grains have significantly increased in mass,</li>

			
						</ul>
						<p>it is appropriate to divide them.</p>

						<p>To split:</p>
						<ol>

						<li>Simply separate the grains into two portions.</li>

						<li>Continue feeding one portion at your preferred milk ratio.</li>

						<li>The extra portion may be shared, stored temporarily in the refrigerator, or dehydrated for later use.</li>

						<li>After splitting, reduce the milk quantity back to a balanced ratio for the remaining grains. This keeps fermentation predictable and prevents over-acidification.</li>
						</ol>

						<p>Regular splitting is a normal and healthy part of maintaining milk kefir grains. With consistent care, grains can continue multiplying indefinitely, making them easy to share within a community.</p>
						<p>If grains need a short break, they can be stored in fresh milk in the refrigerator for up to one week. After refrigeration, allow a few room-temperature cycles for full activity to resume.</p>
					</section>
					<hr className="my-4" />
					<section className="my-4" aria-labelledby="troubleshooting">
						<h3 className="font-bold" id="troubleshooting">Troubleshooting</h3>
						<dl>
							<dt><strong>Kefir is too thin</strong></dt>
							<dd>
								<ul>
									<li>Fermentation time may be too short.</li>
									<li>Room temperature may be too cool.</li>
									<li>Increase fermentation time or slightly reduce milk volume.</li>
								</ul>
							</dd>
							<dt><strong>Kefir is too sour</strong></dt>
							<dd>
								<ul>
									<li>Fermented too long.</li>
									<li>Reduce fermentation time or increase milk volume.</li>
								</ul>
							</dd>
							<dt><strong>Grains are not thickening milk</strong></dt>
							<dd>
								<ul>
									<li>They may need several days to acclimate to a new environment.</li>
									<li>Ensure daily feeding.</li>
									<li>Avoid chlorinated or ultra-pasteurized milk when possible.</li>
								</ul>
							</dd>
							<dt><strong>Grains shrinking or not multiplying</strong></dt>
							<dd>
								<ul>
									<li>Check room temperature (extreme heat or cold stresses grains).</li>
									<li>Ensure consistent feeding schedule.</li>
									<li>Verify milk quality.</li>
								</ul>
							</dd>
							<dt><strong>Strong yeast smell or excessive carbonation</strong></dt>
							<dd>
								<ul>
									<li>Shorten fermentation time.</li>
									<li>Slightly increase milk-to-grain ratio.</li>
								</ul>
							</dd>
						</dl>
						<p>If grains need a short break, they can be stored in fresh milk in the refrigerator for up to one week. After refrigeration, allow a few room-temperature cycles for full activity to resume.</p>
					</section>
					<hr className="my-4" />
					<section className="my-4" aria-labelledby="summary">
						<h3 className="font-bold sr-only" id="summary" >Summary</h3>
						<p>With steady daily care, milk kefir grains are remarkably resilient and self-sustaining. Their balanced microbial ecosystem allows them to grow, adapt, and continue producing fresh kefir for years. Regular attention and simple consistency are the keys to long-term success.</p>
					</section>
				</div>
			</main>
		</div>
	)
}