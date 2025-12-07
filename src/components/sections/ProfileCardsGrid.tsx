import { Link } from "react-router-dom";

interface ProfileCard {
  id: string;
  name: string;
  designation: string;
  location: string;
  image?: string;
  initials?: string;
  href?: string;
}

interface ProfileCardsGridProps {
  title: string;
  profiles: ProfileCard[];
}

export const ProfileCardsGrid = ({ title, profiles }: ProfileCardsGridProps) => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-10">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <Link
              key={profile.id}
              to={profile.href || "#"}
              className="group bg-background border border-border p-8 text-center animate-fade-in transition-all duration-300 hover:shadow-medium hover:border-primary/30 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Avatar */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-muted transition-transform duration-300 group-hover:scale-105">
                {profile.image ? (
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-navy text-white text-2xl font-semibold">
                    {profile.initials}
                  </div>
                )}
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {profile.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {profile.designation} | {profile.location}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileCardsGrid;
