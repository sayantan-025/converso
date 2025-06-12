import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";

import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(5);

  return (
    <>
      <main>
        <h1>Popular Companions</h1>

        <section className="home-section">
          {companions.map((companion) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))}
        </section>

        <section className="home-section">
          <CompanionsList
            title="Recently completed sessions"
            companions={recentSessionsCompanions}
            classNames="w-2/3 max-lg:w-full"
          />
          <CTA />
        </section>
        <section className="home-section py-20">
          <Features />
        </section>
        <section className="home-section py-10">
          <Pricing />
        </section>
        <section className="home-section py-10">
          <Testimonials />
        </section>
      </main>
    </>
  );
};

export default Page;
