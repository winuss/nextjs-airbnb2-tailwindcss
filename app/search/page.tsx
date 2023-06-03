import InfoCard from "../components/info-card";
import { IFCard } from "../models/home.model";
import SearchMain from "./search-main";

async function getData() {
  // const res = await fetch("https://links.papareact.com/isz");
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS");

  if (!searchResults.ok) {
    throw new Error("Failed to ferch data");
  }

  return {
    searchResults: searchResults.json(),
  };
}

export default async function Search() {
  const { searchResults } = await getData();
  const searchData: IFCard[] = await searchResults;

  return (
    <div>
      <SearchMain />
      <div className="">
        {searchData.map(
          ({ img, location, title, description, star, price, total }) => (
            <InfoCard
              key={img}
              img={img}
              location={location}
              title={title}
              description={description}
              star={star}
              price={price}
              total={total}
            />
          )
        )}
      </div>
    </div>
  );
}
