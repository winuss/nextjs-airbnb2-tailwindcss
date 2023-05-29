import Banner from "./components/Banner";
import Header from "./components/Header";
import SmallCard from "./components/SmallCard";
import { Card, Explore, SectionData } from "./models/home.model";
import MidiumCard from "./components/MidiumCard";

async function getData() {
  // const res = await fetch("https://links.papareact.com/pyp");
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G");

  // const res = await fetch("https://links.papareact.com/zp1");
  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT");

  if (!exploreData.ok) {
    throw new Error("Failed to ferch data");
  }

  if (!cardData.ok) {
    throw new Error("Failed to ferch data2");
  }

  return {
    exploreData: exploreData.json(),
    cardData: cardData.json(),
  };
}

export default async function Home() {
  const { exploreData, cardData } = await getData();

  const explores: Explore[] = await exploreData;
  const cards: Card[] = await cardData;

  return (
    <div>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {explores?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>

          <section>
            <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          </section>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cards?.map(({ img, title }) => (
              <MidiumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
