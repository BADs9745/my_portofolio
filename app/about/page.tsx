import DeveloperIcon from "app/icons/developer";
import SchoolIcon from "app/icons/scholl";

export default function AboutPage() {
	return (
		<>
			<h1 className="text-xl font-bold">About Me</h1>
			<h2 className="text-lg mt-2">Baihaqi Alfarizi Darnas</h2>
			<p className="mt-5">
				{`I am a dedicated and highly motivated Informatics Technology Student from Politeknik Negeri Padang with a strong passion for full-stack development. 
                    My experience includes hands-on projects with both front-end and back-end technologies, including JavaScript, 
                    React, Node.js, and databases like MySQL and MongoDB with the Prisma ORM. I thrive in problem-solving scenarios 
                    and enjoy building user-friendly, efficient applications that connect seamlessly from client-side to server-side. 
                    Beyond my technical skills, I am an eager learner who values teamwork, collaboration, and constant growth. 
                    I am excited about the opportunity to contribute to and learn from a professional development team, bringing my creativity, 
                    technical foundation, and enthusiasm for coding to real-world projects.`}
			</p>
			<div className="my-8 *:flex *:gap-x-2">
				<div>
					<SchoolIcon />
					Mahasiswa
				</div>
				<div>
					<DeveloperIcon />
					Teknologi Informasi
				</div>
				<div>
					<DeveloperIcon />
					Manajemen Informatika
				</div>
				<div>
					<SchoolIcon />
					Politeknik Negeri Padang
				</div>
			</div>
		</>
	);
}
