import GitHubIcon from "app/icons/github";
import LinkedIn from "app/icons/linkedin";
import EmailIcon from "app/icons/mail";
import type { ReactNode } from "react";

type links = {
	[href: string]: {
		name: string;
		icon: ReactNode;
	};
};
export default function Footer() {
	const links: links = {
		"https://github.com/BADs9745/BADs9745": {
			name: "BADs9745",
			icon: <GitHubIcon />,
		},
		"https://linkedin.com/in/baihaqi-alfarizi-7457532b2": {
			name: "Baihaqi Alfarizi Darnas",
			icon: <LinkedIn />,
		},
		"https://baihaqi9745@gmail.com": {
			name: "baihaqi9745@gmail.com",
			icon: <EmailIcon />,
		},
	};
	return (
		<ul className="flex space-x-5">
			{Object.entries(links).map(([href, { name, icon }]) => (
				<li key={href}>
					<a href={href} className="flex gap-2">
						{icon} {name}
					</a>
				</li>
			))}
		</ul>
	);
}
