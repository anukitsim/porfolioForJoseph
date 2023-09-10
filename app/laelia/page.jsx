"use client";

import Image from "next/image";
import { useEffect } from "react";

const Laelia = () => {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  }, []);

  return (
    <main className="flex flex-col gap-5">
      <div className="flex flex-row mt-10">
        <div className="md:w-6/12 flex items-center">
          <p className="text-4xl">
            <span className="text-8xl">
              <a href="instagram.com/laeliagardin ">Laelia </a>
            </span>
            <span>
              is my personal artist name that I release all my creative work
              under. Orchids have always been my favorite flower and Laelia is
              my favorite genus of them.
            </span>
            <br />
            <br />
            <span>
              This usually includes fabric prints for fashion and guitar but has
              extended to other mediums such as photography.
            </span>
          </p>
        </div>
        <div className="md:w-6/12 relative max-[1000px]:flex-col">
          <Image
            src="/images/laelia-logo.jpg"
            alt="laelia-logo"
            width={500}
            height={500}
            sizes="(min-width: 1280px) 500px, (min-width: 1040px) calc(18.64vw + 265px), (min-width: 780px) 401px, (min-width: 540px) 500px, calc(90.91vw + 27px)"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
      <div className="w-full bg-[#87ca87] h-auto md:h-[300%] flex flex-col items-center relative max-[1000px]:flex-col">
        <h1 className="font-didact text-4xl font-extrabold mt-10 tracking-wider">
          Dragonfly Scarf
        </h1>
        <p className="font-didact text-2xl font-extrabold mt-10 tracking-tight md:ml-5 md:mr-5">
          While gardening with my mother in my backyard at home in Wilmington, I
          saw a dragonfly bigger and more beautiful than any that I had ever
          seen before. Upon further observation, I realized its wings were old
          and tattered-- further adding to its beauty. For some reason it
          decided to stop and take a rest on the fence around my garden for a
          couple minutes. I knew I had to immortalize that moment and that
          insect so I took pictures of all the plants in my garden, combined
          them into one image, and added some of my own design to the skin of
          the dragonfly. I then had the design printed on a scarf and sold out
          30 pieces in a week.
        </p>
        <Image
          src="/images/butterfly.jpg"
          alt="butterfly"
          width={400}
          height={400}
          className="mt-7 mb-7"
          sizes="(min-width: 440px) 400px, calc(83.33vw + 50px)"
        />
        <h2 className="w-6/12 ffont-didact text-2xl mt-10 tracking-tight mb-7">
          Dragonfly Scarf Shot in New York City by Dean Holmes. Modeled by
          Ashley Franklin, Annika Santhanam, and Dia Darko. Creative direction
          by me. (February 2022)
        </h2>
        <div
          className="flex flex-col md:flex-row gap-5 mb-7 max-[1000
          px]:flex-col"
        >
          <Image
            src="/images/scarf-left.jpg"
            alt="scarf"
            width={500}
            height={400}
            className="w-full h-auto"
            sizes="(min-width: 1320px) 500px, (min-width: 1020px) calc(30.36vw + 105px), (min-width: 780px) calc(40.91vw + 81px), (min-width: 540px) 500px, calc(90.91vw + 27px)"
          />
          <Image
            src="/images/scarf-right.jpg"
            alt="scarf"
            width={500}
            height={400}
            className="w-full h-auto"
            sizes="(min-width: 1320px) 500px, (min-width: 1020px) calc(30.36vw + 105px), (min-width: 780px) calc(40.91vw + 81px), (min-width: 540px) 500px, calc(90.91vw + 27px)"
          />
        </div>
      </div>
      <div className="w-full bg-[#555e67] h-screen flex flex-col items-center md:h-auto max-[1000px]:h-auto max-[100px]:flex-col max-[1000px]:w-full">
        <h2 className="font-didact text-4xl font-extrabold mt-5 tracking-wider">
          Keep your Promise
        </h2>
        <p className="font-didact text-2xl font-extrabold mt-10 tracking-tight md:ml-5 md:mr-5 w-5/12">
          2 song EP-- writing, vocals, and guitar by me. I also styled and shot
          the album cover in Berlin, Germany. Modeled by Blue Davidson
        </p>
        <Image
          src="/images/keep-your-promise.jpg"
          alt="keep your promise"
          width={500}
          height={500}
          className="w-6/12 h-auto mt-7 mb-7dd"
          sizes="(min-width: 540px) 500px, calc(90.91vw + 27px)"
        />
      </div>
      <div className="w-full bg-[#ff5300] h-screen md:h-auto flex flex-col max-[1000px]:flex-col max-[1000px]:h-auto">
        <div className="flex flex-col items-center">
          <h2 className="font-didact text-4xl font-extrabold mt-5 tracking-wider">
            Gila Monster Print
          </h2>
          <p className="font-didact text-2xl font-extrabold mt-2 tracking-tight md:ml-5 md:mr-5 w-7/12 text-center">
            I made a fabric print inspired by the desert of the western United
            States. I have done little to no intra-US travel but the desert is
            somewhere I have always wanted to go. I decided the gila monster is
            the my favorite animal in that ecosystem because of its cool skin
            and uniqueness as the only venemous lizard. I layered a bunch of
            photos of gila monster skins that I found around the internet and
            made a fabric print out of it. I then printed it onto jersey fabric
            and made it into a dress
          </p>
        </div>
        <div className="flex flex-row justify-start gap-2 max-[1000px]:flex-col">
          <Image
            src="/images/gila-monster-print-left.jpg"
            alt="gila monster"
            width={500}
            height={500}
            className="w-6/12 h-auto mt-16"
            sizes="(min-width: 1300px) 500px, (min-width: 1020px) calc(28.85vw + 131px), (min-width: 540px) 500px, calc(90.91vw + 27px)"
          />
          <Image
            src="/images/gila-monster-print-right.jpg"
            alt="gila monster"
            width={500}
            height={500}
            className="mt-24 mb-7 w-5/12 h-auto"
            sizes="(min-width: 1300px) 500px, (min-width: 1020px) calc(28.85vw + 131px), (min-width: 540px) 500px, calc(90.91vw + 27px)"
          />
        </div>
        <div className="w-full bg-white flex flex-row justify-center mt-10 max-[1000px]:flex-col">
          <Image
            src="/images/gila-monster-girl.jpg"
            alt="gila monster girl"
            width={500}
            height={500}
            className="w-full h-auto"
            sizes="(min-width: 1300px) 500px, (min-width: 1020px) calc(28.85vw + 131px), (min-width: 540px) 500px, calc(90.91vw + 27px)"
          />
          <Image
            src="/images/gila-monster-dress.jpg"
            alt="gila monster dress"
            width={500}
            height={500}
            className="w-full h-auto mt-7"
            sizes="(min-width: 1300px) 500px, (min-width: 1020px) calc(28.85vw + 131px), (min-width: 540px) 500px, calc(90.91vw + 27px)"
          />
        </div>
        <div className="flex flex-col items-center mt-7 max-[1000px]:flex-col">
          <h2 className="font-didact text-2xl font-bold mt-5 w-6/12 text-center">
            Shot and styled by me in Berlin, Germany. Modeled by Creams (May
            2023)
          </h2>
          <div className="flex flex-row gap-5 mt-7 max-[100px]:flex-col">
            <Image
              src="/images/creams-left.jpg"
              alt="creams"
              width={500}
              height={400}
              className='w-full h-auto mb-7'
              sizes="(min-width: 1320px) 500px, (min-width: 1020px) calc(30.36vw + 105px), (min-width: 880px) 50vw, (min-width: 460px) calc(5vw + 377px), calc(71.43vw + 86px)"
            />
            <Image
              src="/images/creams-right.jpg"
              alt="creams"
              width={500}
              height={400}
              className='w-full h-auto mb-7'
              sizes="(min-width: 1320px) 500px, (min-width: 1020px) calc(30.36vw + 105px), (min-width: 880px) 50vw, (min-width: 460px) calc(5vw + 377px), calc(71.43vw + 86px)"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#503c3c] h-screen md:h-auto flex flex-col items-center max-[1000px]:flex-col">
        <h2 className="font-didact text-4xl font-extrabold mt-5 tracking-wider">
          Tree Print
        </h2>
        <p className="font-didact text-2xl font-extrabold mt-10 tracking-tight md:ml-5 md:mr-5 w-7/12 text-center">
          In the summer of 2023 I spent a lot of time at home after getting back
          from a year in Berlin. I decide to make a moodboard every day using
          only pictures I took of my backyard. The serenity of the creek behind
          my house was very inspiring to me creatively. I fell in love with
          looking at trees and their textures. Each tree has its own unique bark
          and ridges. This fabric print comes from a photo I took of a very old
          tree that I found particularly striking.
        </p>
        <div className="flex flex-row gap-2 mt-7 max-[1000px]:flex-col">
          <Image
            src="/images/tree-print-left.jpg"
            alt="tree-print"
            width={500}
            height={500}
            className="w-full h-auto mt-16"
            sizes="(min-width: 540px) 500px, calc(90.91vw + 27px)"
          />
          <Image
            src="/images/tree-print-right.jpg"
            alt="tree-print"
            width={500}
            height={500}
            className="w-full h-auto mt-24 mb-7"
            sizes="300px"
          />
        </div>

        <div className="w-full bg-white flex flex-col items-center mt-10 max-[1000px]:flex-col">
          <h2 className="font-didact text-2xl font-extrabold mt-5 tracking-wider">
            Tree Print Skirt Idea
          </h2>
          <div className="flex flex-row justify-center max-[1000px]:flex-col">
            <Image
              src="/images/tree-girl.jpg"
              alt="tree girl"
              width={500}
              height={500}
              className="w-full h-auto"
              sizes="(min-width: 1300px) 500px, (min-width: 1020px) calc(28.85vw + 131px), (min-width: 540px) 500px, calc(90.91vw + 27px)"
            />
            <Image
              src="/images/tree-skirt.jpg"
              alt="tree skirt"
              width={500}
              height={500}
              className="w-full h-auto"
              sizes="(min-width: 1300px) 500px, (min-width: 1020px) calc(28.85vw + 131px), (min-width: 540px) 500px, calc(90.91vw + 27px)"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Laelia;
