import React from 'react'
import { PageTitle } from './PageTitle'
import TeamCard from './TeamCard'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";


const TeamSection = () => {

    const teamData = [
        {
          img: "assets/team-1.jpg",
          name: "Hafiz Waseem Riaz",
          position: "Advocate - LLB",
          socials: [
            {
              color: "light-blue",
              name: "facebook",
              Icon: FaFacebook,
            },
            {
              color: "blue",
              name: "linkedin",
              Icon: FaLinkedin,
            },
            {
              color: "pink",
              name: "instagram",
              Icon:  FaInstagram,
            },
          ],
        },
        {
          img: "assets/team-2.jpg",
          name: "Romina Hadid",
          position: "Marketing Specialist",
          socials: [
            {
              color: "light-blue",
              name: "facebook",
              Icon: FaFacebook,
            },
            {
              color: "blue",
              name: "linkedin",
              Icon: FaLinkedin,
            },
            {
              color: "pink",
              name: "instagram",
              Icon:  FaInstagram,
            },
          ],
        },
        {
          img: "assets/team-3.jpg",
          name: "Alexa Smith",
          position: "UI/UX Designer",
          socials: [
            {
              color: "light-blue",
              name: "facebook",
              Icon: FaFacebook,
            },
            {
              color: "blue",
              name: "linkedin",
              Icon: FaLinkedin,
            },
            {
              color: "pink",
              name: "instagram",
              Icon:  FaInstagram,
            },
          ],
        },
        {
          img: "assets/team-4.png",
          name: "Jenna Kardi",
          position: "Founder and CEO",
          socials: [
            {
              color: "light-blue",
              name: "facebook",
              Icon: FaFacebook,
            },
            {
              color: "blue",
              name: "linkedin",
              Icon: FaLinkedin,
            },
            {
              color: "pink",
              name: "instagram",
              Icon:  FaInstagram,
            },
          ],
        },
      ];

  return (
    <section className="px-4 pb-15" id='team'>
      <div className="container mx-auto">
        <PageTitle
          section="Our Team"
          heading="Meet Our Experts"
        >
          Our team of experienced legal professionals is dedicated to providing top-notch legal support and advocacy. With a wealth of expertise in various areas of law, we are committed to delivering insightful and effective solutions to meet your legal needs. Whether you require guidance on complex legal matters or strategic advice, our attorneys bring a deep understanding of the law and a client-focused approach to ensure your success.
        </PageTitle>
        <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
          {teamData.map(({ img, name, position, socials }) => (
            <TeamCard
              key={name}
              img={img}
              name={name}
              position={position}
              socials={
                <div className="flex items-center justify-center gap-2">
                  {socials.map(({ color, name,Icon }) => (
                    <a key={name} href="#"
                    className={`text-${color} text-xl`}
                    aria-label={name} target='_blank'>
                      <Icon/>
                    </a>
                  ))}
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
