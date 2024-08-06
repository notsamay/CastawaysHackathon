import React from 'react';

const Paper = () => {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: '#fef9e7', // Light yellowish color
        backgroundImage: 'url(grain.jpg)', // Paper grain texture image
        backgroundSize: 'cover', // Ensures the image covers the entire area
        backgroundBlendMode: 'multiply', // Blend the background color with the texture
        color: 'rgba(0,0,0,0.75)', // Text color adjustment
        paddingLeft: '5vw',
        paddingRight: '5vw', // Responsive padding to the right
      }}
    >
      <div className="flex flex-col items-center p-10">
        {/* Header Section */}
        <div className="w-full max-w-none rounded-lg p-6">
          <div className="mb-8">
            <img src="Title.png" alt="Header" className="w-full rounded-md opacity-75" />
          </div>
          <div className="text-center">
            <h1
              className="font-black tracking-wider old_standard_tt"
              style={{
                fontSize: 'max(8.75vw, 1rem)', // Responsive font-size with a minimum of 24px
                margin: '0', // Remove top and bottom margin
                lineHeight: '1',
              }}
            >
              PIRATE ATTACK!
            </h1>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8 w-full">
          {/* Left Side Content */}
          <div className="lg:w-3/5 mb-8 lg:mb-0">
            <img
              src="map.png"
              alt="MapIMG"
              className="w-full border-2 mimg"
              style={{
                borderColor: 'rgba(0, 0, 0, 0.95)' // Black color with 0.95 opacity
              }}
            />
            <p className="mt-10 text-lg text-left drop-cap" style={{ fontFamily: 'Times New Roman, serif' }}>
              Castaways is an exciting high school hackathon event in the South, organized by a group of local high schoolers passionate about technology and creativity. In collaboration with Hack Club, the largest high school computer science non-profit, we're set to create a truly unique experience. Hack Club is dedicated to empowering students with resources, mentorship, and a supportive community to help them explore their love for tech.

              The hackathon takes place in the charming city of Charleston, known for its rich history and vibrant culture. With a fun pirate theme, participants will dive into a weekend full of challenges and creativity. Teams will earn "treasure" by completing tasks, which they can use to purchase hardware and other resources to enhance their projects. It's not just a competition; it's an opportunity to collaborate, innovate, and have a great time.

              Whether you're a coding beginner or a seasoned pro, Castaways offers something for everyone. The event is all about fostering a sense of community, encouraging collaboration, and celebrating the spirit of innovation. Participants will get the chance to showcase their skills, work with like-minded peers, and make lasting memories. Join us for a weekend adventure at Castaways, where tech and imagination set sail together. It's more than just a hackathon; it's a celebration of creativity, learning, and fun!
            </p>



            <h2 className="text-5xl font-bold text-left mt-20 mb-4 old_standard_tt">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <hr className="border-black mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div>
                <p className="text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
                  <span className="font-bold">Am I Eligible?</span> <br />
                  Our hackathon welcomes all high school students and anyone under the age of 18 who has not yet entered university. If you have a passion for technology and a desire to learn, you're encouraged to participate. For additional questions or specific eligibility concerns, please contact us at SamayUpadhya@gmail.com.
                </p>
              </div>
              <div>
                <p className="text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
                  <span className="font-bold">What Is A Hackathon?</span> <br />
                  A hackathon is a collaborative event where participants, often in teams, work intensively to develop software or hardware solutions. The event typically lasts between 24 to 48 hours, during which teams tackle specific challenges, innovate, and build projects that are presented at the end of the competition.
                </p>
              </div>
              <div>
                <p className="text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
                  <span className="font-bold">Are There Safety Procedures?</span> <br />
                  We prioritize the safety and security of all participants. Our event includes a range of safety measures such as on-site staff and volunteers trained to handle emergencies. We also have protocols to ensure a respectful and secure environment for everyone involved.
                </p>
              </div>
              <div>
                <p className="text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
                  <span className="font-bold">What Is The Hack Club Gas Fund?</span> <br />
                  The Hack Club Gas Fund assists with transportation costs for students attending our hackathons. If travel expenses are a concern, you can apply for support through this fund to help cover your transportation and ensure that financial constraints do not prevent you from participating.
                </p>
              </div>
              <div>
                <p className="text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
                  <span className="font-bold">Can I Bring a Team?</span> <br />
                  Absolutely! Teams are encouraged to participate in the hackathon. You can form a team with friends, classmates, or other participants. If you don’t have a team, you can also join one at the event or work as an individual. Collaboration is a key part of the hackathon experience.
                </p>
              </div>
              <div>
                <p className="text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
                  <span className="font-bold">Is Attendance Free?</span> <br />
                  Yes, attending our hackathon is entirely free. We aim to provide a valuable experience without any financial barriers, making it accessible to high school students everywhere. This includes participants from both local and international locations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="lg:w-2/5 lg:ml-8">
            <div className='Box p-5 pt-10'>
              <h2 className="text-6xl font-bold old_standard_tt">UNDER 18? COME</h2>
              <h2 className="text-9xl font-bold old_standard_tt">JOIN US!</h2>
             
            </div>
            <div className='pt-12 content-center justify-center align-center'>

            <h2 className="text-8xl font-bold old_standard_tt">IMPORTANT</h2>
            <h2 className="text-9xl font-bold old_standard_tt">DETAILS.</h2>
            <p className="text-lg pt-5" style={{ fontFamily: 'Times New Roman, serif' }}>
            Castaways is an exciting high school hackathon in <span className="font-bold">Charleston SC</span>, featuring a pirate-themed adventure where teams use "treasure" to purchase hardware and resources. The event will be held from <span className="font-bold">[TBD Start Date]</span> to <span className="font-bold">[TBD End Date]</span> at <span className="font-bold">[TBD Venue Address]</span>. This is an <span className="font-bold">overnight hackathon</span>. <span className="font-bold">All meals will be served with options for dietary restrictions</span>, and <span className="font-bold">all participants must sign a waiver</span>. Charleston, known for its rich history and vibrant culture, provides the perfect backdrop for this event. A <span className="font-bold">parent guide</span> is available for those who may have concerns about their child's participation. Join us for a weekend of innovation and fun. Stay tuned for more details and prepare to set sail with Castaways!
          </p>



            </div>
            <div className='Box p-5 pt-10 mt-10' >
              <h2 className="text-6xl font-bold old_standard_tt">UNDER 18? COME</h2>
              <h2 className="text-9xl font-bold old_standard_tt">JOIN US!</h2>
             
            </div>
            <div className='Box2 p-5 pt-10 mt-20 w-full ' >
              <h2 className="text-9xl font-bold old_standard_tt tracking-wide">SIGNUP</h2>
              <div className='Button my-10 mx-12 '>
                <h3 className='text-8xl py-8 tracking-wide '> CLICK HERE</h3>
              </div>
              
   
             
            </div>

          </div>
        </div>
        <hr className="border-t border-black mt-10" />
      </div>
    </div>
  );
};

export default Paper;