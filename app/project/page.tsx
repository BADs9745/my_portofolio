import ArrowForwardIcon from "app/icons/arrow_forward";
import Link from "next/link";

export default function ProjectPage() {
	const projectList = {
		"Art Exhibit": {
			href: "https://github.com/BADs9745/art-exhibit.git",
			detail: "This is the the Coursework capstone project in my Campus",
		},
		"Take Home Challenge": {
			href: "https://github.com/BADs9745/takehomechallenge-baihaqialfarizidarnas.git",
			detail: "The task that given to me for the internship qualification",
		},
		"Next JS Dashboard": {
			href: "https://github.com/BADs9745/nextjs-dashboard.git",
			detail:
				"The First Project that I create with Next JS when I start learn Next JS",
		},
		"Siak TI": {
			href: "https://github.com/BADs9745/siak-ti.git",
			detail:
				"This project using the laravel instead for my Collegue project in the past Semester",
		},
	};
	return (
		<>
			<h1 className="text-3xl font-semibold">My Projects</h1>
			<ul className="my-10 space-y-5">
				{Object.entries(projectList).map(([title, { href, detail }]) => (
					<li key={href} className="rounded-2xl p-5 border-slate-200 border">
						<Link
							href={href}
							className="font-bold text-3xl flex justify-around items-center"
						>
							<div className="w-full">
								<div>{title}</div>
								<p className="text-sm font-normal mt-2">{detail}</p>
							</div>
							<div>
								<ArrowForwardIcon />
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
