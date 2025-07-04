import React from 'react';
import { motion } from 'framer-motion';
import { PageTitle } from './PageTitle';
import TeamCard from './TeamCard';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";

const TeamSection = () => {
    const teamData = [
        {
            img: "assets/team2.jpeg",
            name: "Hafiz Waseem Riaz",
            designation: "Founder",
            position: "Advocate High Court",
            expertise: "Tax Law Specialist",
            socials: [
                {
                    color: "text-blue-600 hover:text-blue-800",
                    name: "facebook",
                    Icon: FaFacebook,
                    url: "#"
                },
                {
                    color: "text-blue-700 hover:text-blue-900",
                    name: "linkedin",
                    Icon: FaLinkedin,
                    url: "#"
                },
                {
                    color: "text-pink-600 hover:text-pink-800",
                    name: "instagram",
                    Icon: FaInstagram,
                    url: "#"
                },
            ],
        },
        {
            img: "assets/team1.jpeg",
            name: "Mian Sami Ullah",
            designation: "Co-Founder",
            position: "Advocate High Court",
            expertise: "Corporate Law Expert",
            socials: [
                {
                    color: "text-blue-600 hover:text-blue-800",
                    name: "facebook",
                    Icon: FaFacebook,
                    url: "#"
                },
                {
                    color: "text-blue-700 hover:text-blue-900",
                    name: "linkedin",
                    Icon: FaLinkedin,
                    url: "#"
                },
                {
                    color: "text-pink-600 hover:text-pink-800",
                    name: "instagram",
                    Icon: FaInstagram,
                    url: "#"
                },
            ],
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50" id='team'>
            <div className="container mx-auto px-4">
                <PageTitle
                    section="LEADERSHIP"
                    heading="Our Founding Partners"
                    className="text-center mb-16"
                >
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        The visionary leaders who established our firm and continue to drive excellence 
                        in tax law and legal services.
                    </p>
                </PageTitle>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-12 md:flex-row md:justify-center"
                >
                    {teamData.map((member, index) => (
                        <motion.div 
                            key={index}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="w-full max-w-sm"
                        >
                            <TeamCard
                                img={member.img}
                                name={member.name}
                                designation={member.designation}
                                position={member.position}
                                expertise={member.expertise}
                                socials={
                                    <div className="flex justify-center space-x-5 mt-6">
                                        {member.socials.map((social, i) => (
                                            <motion.a
                                                key={i}
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                                href={social.url}
                                                className={`${social.color} transition-colors duration-300`}
                                                aria-label={social.name}
                                                target='_blank'
                                                rel="noopener noreferrer"
                                            >
                                                <social.Icon className="w-6 h-6" />
                                            </motion.a>
                                        ))}
                                    </div>
                                }
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* <div className="mt-16 text-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Meet Our Full Team
                    </motion.a>
                </div> */}
            </div>
        </section>
    );
};

export default TeamSection;