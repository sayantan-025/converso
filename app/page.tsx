import CompanionCard from "@/components/companion-card";
import CompanionsList from "@/components/companions-list";
import Cta from "@/components/cta";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="sd"
          topic="dsmk"
          subject="string;"
          duration={5}
          color="#f0f0f0"
          bookmarked={true}
        />
        <CompanionCard
          id="2"
          name="sd"
          topic="dsmk"
          subject="string;"
          duration={5}
          color="#f0f0f0"
          bookmarked={true}
        />
        <CompanionCard
          id="3"
          name="sd"
          topic="dsmk"
          subject="string;"
          duration={5}
          color="#f0f0f0"
          bookmarked={true}
        />
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recent Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
