import Link from "next/link";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-8">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />

        <div className="text-gray-500 max-w-2xl max-auto mt-4 flex flex-col gap-4">
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            odit ad mollitia quas adipisci tempora vero, beatae delectus nobis
            qui rem suscipit, rerum possimus fugiat, aut fugit nam cum
            repudiandae.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            porro! Eum quam atque natus ea libero ratione dolorum voluptas
            quidem rerum, animi asperiores sequi, blanditiis, non neque. Dolor,
            fugiat molestiae.
          </p>
        </div>
      </section>
      <section className="text-center">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact Us"}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:">
            +44-777-999-000
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All rights reserved
      </footer>
    </>
  );
}
