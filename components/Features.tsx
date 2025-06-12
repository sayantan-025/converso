import { features } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Features = () => {
  return (
    <article>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-time AI teaching, just a click away.
          </p>
        </div>

        <div className="companions-grid">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#262626]  border-orange-900/20 hover:border-orange-800/40 transition-all duration-300"
            >
              <CardHeader className="pb-2">
                <div className="bg-orange-900/20 p-3 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Features;
