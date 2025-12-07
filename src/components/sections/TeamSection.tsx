import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  href: string;
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

export const TeamSection = ({ title, members }: TeamSectionProps) => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <Link
              key={index}
              to={member.href}
              className="group text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {member.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/team"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            View all team members
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;