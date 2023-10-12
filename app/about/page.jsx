import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-row max-[1000px]:flex-col gap-10">
      <div className="w-6/12 max-[1000px]:w-full mt-10">
        <Image
          src="/images/jozeph.jpg"
          alt="profile-picture"
          width={500}
          height={500}
          className='w-10/12 h-auto'
          sizes="(min-width: 1300px) 500px, (min-width: 1020px) calc(28.85vw + 131px), (min-width: 640px) 500px, calc(78.13vw + 16px)"
          priority
        />
      </div>
      <div className="w-6/12 flex flex-col items-center gap-y-10  text-center font-bold justify-center max-[1000px]:w-full">
        <h1 className="font-custom text-6xl max-[1000px]:lg max-[1000px]:ml-5 max-[1000px]:mr-5">Joseph McCain</h1>
        <p className="font-didact font-bold text-4xl max-[1000px]:text-left max-[1000px]:ml-0">
          I am a 20 year old fourth-year NYU student from Wilmington, Delaware
          currently pusruing a dual-degree in Creative Production and Politics.
          I have two
          different creative projects-- Laelia and Dalmatian that I have been
          releasing work under for the past couple years. Some of my skills
          include CAD for fashion, Photography, and writing.
        </p>
      </div>
    </div>
  );
};

export default About;
