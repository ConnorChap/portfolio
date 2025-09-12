import { ReviewOnScroll } from "../ReviewOnScroll"

export const About = () => {

    const frontEndSkills = ["html", "css", "JavaScript/TypeScript", "React"]
    const backEndSkills = ["Java", "Python", "C++", "C", "C#"]
    const devSkills = ["Git", "GitHub", "PostMan", "Maven", "Gradle", "Make", "Firebase"]




    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <ReviewOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 translate-all">
                    <p className="text-gray-300 mb-6">
                        Currently I'm pursuing a Bachelor's in Computer Science at Colorado State University and hold an Associate's degree. 
                        With a proven ability to collaborate, problem-solve, and deliver results, demonstrated through academic projects, supplemental instruction experience, and customer service roles, 
                        I'm eager to apply my skills and passion for software development to innovative projects.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 translate-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontEndSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 translate-all">
                            <h3 className="text-xl font-bold mb-4"> Backend </h3>
                            <div className="flex flex-wrap gap-2">
                                {backEndSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 translate-all">
                            <h3 className="text-xl font-bold mb-4"> Development Skills </h3>
                            <div className="flex flex-wrap gap-2">
                                {devSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Education </h3>
                                <ul className="list-disc list-inside text-gray space-y-2">
                                    <li>
                                        <strong> Associate of Science </strong> - Front Range Community College (2022 - 2024)
                                    </li>
                                    <li>
                                        <strong> B.S in Computer Science </strong> - Colorado State University (2024 - current)
                                    </li>
                                </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold">Supplemental Instruction Leader (SI): (2023 - current)</h4>
                                        <p>
                                            Facilitated group study sessions to help students reinforce course material, providing peer support and boosting academic performance.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold"> Guest Service Advocate: (2022 - current)</h4>
                                        <p>
                                            Provided excellent customer service by assisting guests, handling transactions efficiently, and promoting Target's offerings to enhance the shopping experience.
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </ReviewOnScroll>
        </section>
    )
}