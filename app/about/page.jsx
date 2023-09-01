import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-row max-[1000px]:flex-col">
      <div className="w-6/12 max-[1000px]:w-full">
        <Image
          src="/images/jozeph.jpg"
          alt="profile-picture"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="w-6/12 flex flex-col items-start gap-y-10  text-center font-bold justify-center max-[1000px]:w-full max-[1000px]:text-left">
        <h1 className="font-custom text-9xl">Joseph McCain</h1>
        <p className="font-didact font-bold text-2xl">
          I am a 20 year old fourth-year NYU student from Wilmington, Delaware
          currently pusruing a dual-degree in Creative Production and Politics.
          However, school is just one small part of my life. I have two
          different creative projects-- Laelia and Dalmatian that I have been
          releasing work under for the past couple years. Some of my skills
          include CAD for fashion, Photography, and writing
        </p>
      </div>
    </div>
  );
};

export default About;
