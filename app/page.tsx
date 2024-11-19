import Link from "next/link";

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">
				My Portfolio Uwaw
			</h1>
			<div className="space-x-1 space-y-1">
				<Link href={"/about"}>
					<div className="border-slate-200 border p-5 rounded-xl">
						<h2 className="font-bold text-xl">About Myself</h2>
						<p>
							I am a dedicated and highly motivated Informatics Technology
							Student from Politeknik Negeri Padang with a strong passion for
							full-stack development......
						</p>
					</div>
				</Link>
				<Link href={"/project"}>
					<div className="border-slate-200 border p-5 rounded-xl">
						<h2 className="font-bold text-xl">About My Project</h2>
						<p>The few project that I created</p>
					</div>
				</Link>
			</div>
		</section>
	);
}
