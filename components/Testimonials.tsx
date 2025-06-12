import { testimonials } from "@/lib/data";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const Testimonials = () => {
  return (
    <article className="container mx-auto px-4">
      <div className="text-center mb-16">
        <Badge
          variant="outline"
          className="text-white border-orange-700/30 px-4 py-1 bg-orange-400 text-sm font-medium mb-4"
        >
          Success Stories
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          What Our Learners Say
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Hear from students and educators who’ve transformed their learning
          with our platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="bg-[#262626]  border-orange-900/20 hover:border-orange-800/40 transition-all"
          >
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-900/20 flex items-center justify-center mr-4">
                  <span className="text-orange-400 font-bold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground">
                &quot;{testimonial.quote}&quot;
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </article>
  );
};

export default Testimonials;
