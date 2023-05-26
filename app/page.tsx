import Banner from "./components/Banner";
import Header from "./components/Header";
import SmallCard from "./components/SmallCard";
import { Explore } from "./models/home.model";

async function getData() {
  // const res = await fetch("https://links.papareact.com/pyp");
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");

  if (!res.ok) {
    throw new Error("Failed to ferch data");
  }

  return res.json();
}

export default async function Home() {
  const exploreData: Explore[] = await getData();

  return (
    <div>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {exploreData?.map((item) => (
            <SmallCard
              key={item.img}
              img={item.img}
              distance={item.distance}
              location={item.location}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
