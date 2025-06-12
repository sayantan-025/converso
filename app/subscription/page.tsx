import { PricingTable } from "@clerk/nextjs";

const Subscription = () => {
  return (
    <main>
      <PricingTable
        checkoutProps={{
          appearance: {
            elements: {
              drawerRoot: {
                zIndex: 2000,
              },
            },
          },
        }}
      />
    </main>
  );
};
export default Subscription;
