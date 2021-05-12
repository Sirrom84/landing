import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<title>What's Sphere </title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<h1 className="title"> What's Sphere?</h1>
			<div className="container">
				<div className="quote">
					{" "}
					<span>
						"It is never too late to be who you might have been." <br /> -
						George Eliot
					</span>
				</div>
				<div className="banner">Breaking Barriers</div>
				<p>
					Going at it alone or “figuring it out” yourself is a thing of the
					past. Sphere brings the world of coaching/guidance into the pockets
					and homes of everyday people. For too long the idea of wellness and
					self-improvement has felt like a luxury not afforded to the average
					person. Sphere was created as a way to bring <strong> ANYONE </strong>
					to their full potential by offering personalized coaching based on
					each person’s individual needs. Whether it’s being a better parent,
					business owner, leader, partner or friend, Sphere is here to take down
					the walled gardens of self-care and improvement and help connect{" "}
					<strong>YOU</strong> with a guide.
				</p>
				<div className="how">
					<img src="/images/BwAstro.png" alt="astro" />
				</div>
				<div className="banner">How Does It Work?</div>
				<p>
					Everyone, no matter how successful, has areas of their life that could
					use improvement. Whether career related, relationships or even general
					well-being, a guide can coach you through your self-improvement
					journey to reach your full potential. Sphere uses a custom algorithm
					that allows users to be matched with the right guide based on user
					preferences. There are hundreds of highly qualified guides that can
					fit your personal needs, why not have an edge?
				</p>
				<p>
					As a user you simply create an account and answer some questions.
					After, you’re given a list of guides Sphere thinks would suit your
					needs or preferences. From there you have the ability to try a
					30-minute coaching session for free to see if it’s for you. If you
					find you click with a guide you can conveniently book further sessions
					all in the app. It’s that easy.
				</p>
				<div className="conclude">
					<h1>
						Take your potential<br></br> to new heights
						<br /> <br />
						<a href="https://sphere.guide/"> Sphere</a>
					</h1>
				</div>
			</div>
		</div>
	);
}
