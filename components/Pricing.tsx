import { PricingTable } from "@clerk/nextjs";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const Pricing = () => {
  return (
    <article className="container mx-auto ">
      <div className="text-center mb-16">
        <Badge
          variant="outline"
          className="text-white border-orange-700/30 px-4 py-1 bg-orange-400 text-sm font-medium mb-4"
        >
          Real-time Learning
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          AI-Powered Plans
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose the ideal learning package tailored to your academic or
          skill-building goals.
        </p>
      </div>
      <div className="mx-auto">
        {/* Clerk Pricing Table */}
        <Card className="border-orange-900/30 shadow-lg bg-gradient-to-b bg-orange-400/90">
          <CardContent className="p-6 md:p-8">
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
          </CardContent>
        </Card>
      </div>
    </article>
  );
};

export default Pricing;
