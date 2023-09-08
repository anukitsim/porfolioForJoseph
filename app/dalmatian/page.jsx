import Image from "next/image";

const Dalmatian = () => {
  return (
    <div className="flex flex-col gap-32">
      <div className="flex flex-row gap-20 max-[1000px]:flex-col">
        <div className="w-6/12 max-[1000px]:w-full">
          <p className="text-white font-didact">
            <span className="text-6xl font-bold"><a href="dalmatianofficial.com" target='_blank'>DALMATIAN</a></span>
            <span className="text-3xl font-bold">
              is a space for expression. Created by Joseph McCain and Owen
              Mahoney, this page is meant to showcase the creations of two
              friends and their friends. Through music, visuals, and everything
              in between, DALMATIAN is an idea for everyone and everything.
              <br />
              <br />
              <span className="text-3xl font-bold">
                Since starting in 2021, we have booked numerous sold out shows,
                released a couple interviews, and founded a 
                <a href="https://on.soundcloud.com/c7WzNRkZMg9tiRtAA" target='_blank'> DJ radio.</a>
              </span>
            </span>
          </p>
        </div>
        <Image src="/images/dalmatian.jpg" width={400} height={400} priority/>
      </div>
      <div className="flex flex-row items-cente max-[1000px]:flex-col">
        <div className="w-6/12 max-[1000px]:w-full">
          <Image src="/images/dalmatian-poster.jpg" width={400} height={400} priority/>
        </div>
        <div className="w-6/12 max-[1000px]:w-full">
          <p className="text-white font-didact text-center">
            <span className="text-2xl">1C show and Photoshoot</span>
            <br />
            <span className="text-xl">
              Owen and I designed shirts to promote a show in August of 2023
              headlined by Xaviersobased and his “1C” music collective. I did a
              photoshoot with some friends of the group to help with promotion
              for the show and shirts.
            </span>
          </p>
        </div>
        
      </div>
      <div className="w-full grid grid-cols-3 grid-rows-2 max-[1000px]:flex-col">
      <Image src="/images/left.jpg" width={400} height={400} className='col-start-1 row-start-2' priority/>
      <Image src="/images/middle.jpg" width={400} height={400} className='col-start-2 row-start-1' priority/>
      <Image src="/images/right.jpg" width={400} height={400} className='col-start-3 row-start-2' priority/>

      </div>
    </div>
  );
};

export default Dalmatian;
