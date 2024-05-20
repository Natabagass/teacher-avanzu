import Text from "@components/text";
import { useState } from "react";

const ModalCheckboxInput = ({
    show,
    onClose,
    checkedItems,
    setCheckedItems
}: {
    show: boolean,
    onClose: any,
    checkedItems: any,
    setCheckedItems: any
}) => {
    const handleCheckboxChange = (categoryName: string) => {
        setCheckedItems((prevCheckedItems: any) => ({
            ...prevCheckedItems,
            [categoryName]: !prevCheckedItems[categoryName]
        }));    };

    return (
        <>
            {
                show &&
                <div className="absolute bg-purple-100 overflow-auto max-h-[400px] mt-4 top-10 border border-stroke-primary rounded-3xl z-50 py-2 px-4 w-full">
                    <div className="flex flex-col w-full gap-2">
                        {categorie.map((item, index) => (
                            <div key={index} className="flex flex-row w-full items-center justify-between">
                                <div className="flex flex-row w-full items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id={item}
                                        name={item}
                                        className="check-cart"
                                        value={item}
                                        checked={checkedItems[item] || false}
                                        onChange={() => handleCheckboxChange(item)}
                                    />
                                    <label htmlFor={item}>
                                        <Text weight="font-medium" size="p2">{item}</Text>
                                    </label>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    );
};

export default ModalCheckboxInput;

export const categorie = [
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "C#",
    "Ruby",
    "Go",
    "Swift",
    "PHP",
    "Front-End Development",
    "Back-End Development",
    "Full Stack Development",
    "HTML & CSS",
    "React.js",
    "Angular",
    "Vue.js",
    "Node.js",
    "ASP.NET",
    "Android Development",
    "iOS Development",
    "React Native",
    "Flutter",
    "Data Analysis",
    "Data Visualization",
    "Machine Learning",
    "Artificial Intelligence",
    "Deep Learning",
    "Big Data",
    "SQL",
    "R Programming",
    "AWS (Amazon Web Services)",
    "Microsoft Azure",
    "Google Cloud Platform",
    "Cloud Architecture",
    "Cloud Security",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Ansible",
    "Terraform",
    "CI/CD Pipelines",
    "Ethical Hacking",
    "Network Security",
    "Information Security",
    "Cryptography",
    "Security Testing",
    "Incident Response",
    "Software Engineering",
    "Software Testing",
    "Agile Development",
    "Version Control (Git)",
    "Design Patterns",
    "SQL Databases (MySQL, PostgreSQL)",
    "NoSQL Databases (MongoDB, Cassandra)",
    "Database Design",
    "Data Warehousing",
    "Robotics Process Automation (RPA)",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Reinforcement Learning",
    "Network Fundamentals",
    "Cisco Networking (CCNA, CCNP)",
    "Wireless Networking",
    "Network Troubleshooting",
    "System Administration",
    "Linux Administration",
    "Windows Server",
    "Virtualization (VMware, Hyper-V)",
    "User Interface Design",
    "User Experience Design",
    "Prototyping",
    "Wireframing",
    "Design Thinking",
    "Adobe XD",
    "Figma",
    "Sketch",
    "Unity",
    "Unreal Engine",
    "Game Design Principles",
    "3D Modeling",
    "Effective Communication",
    "Technical Writing",
    "Public Speaking",
    "Presentation Skills",
    "Agile Project Management",
    "Scrum",
    "Kanban",
    "Project Planning",
    "Risk Management",
    "Team Leadership",
    "Strategic Planning",
    "Conflict Resolution",
    "Decision Making",
    "Productivity Techniques",
    "Prioritization",
    "Goal Setting",
    "Work-Life Balance",
    "Critical Thinking",
    "Analytical Skills",
    "Creative Problem Solving",
    "Decision-Making Strategies",
    "Teamwork",
    "Remote Collaboration",
    "Interpersonal Skills",
    "Networking",
    "Coping with Change",
    "Resilience",
    "Flexibility",
    "Client Management",
    "Customer Support",
    "Handling Feedback",
    "Job Interview Skills",
    "Resume Writing",
    "Career Planning",
    "Personal Branding",
    "Entrepreneurship",
    "Business Strategy",
    "Financial Literacy",
    "Negotiation Skills"
]