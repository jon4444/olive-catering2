import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br /> is better served with&nbsp;
          <span className="text-primary">love.</span>
        </h1>
        <p className="my-4 text-gray-500 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary uppercase flex items-center gap-2 text-white px-8 py-2 rounded-full text-sm">
            Catering
            <Right />
          </button>

          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Order
            <Right />
          </button>
        </div>
      </div>
      <div className="relative px-16 py-12">
        <img
          src={"/dish.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"dish"}
        />
      </div>
    </section>
  );
}
