import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface HeroContent {
  badge_text: string | null;
  title: string;
  subtitle: string | null;
  cta_text: string | null;
  cta_link: string | null;
  secondary_cta_text: string | null;
  secondary_cta_link: string | null;
}

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface Feature {
  id: string;
  title: string;
  description: string;
}

interface TeamMember {
  id: string;
  name: string;
  designation: string;
  location: string;
  image_url: string | null;
  initials: string | null;
  href: string | null;
}

export const useLandingData = () => {
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all data in parallel
        const [heroRes, accordionRes, featuresRes, teamRes] = await Promise.all([
          supabase.from("hero_content").select("*").limit(1).maybeSingle(),
          supabase.from("accordion_items").select("*").order("sort_order"),
          supabase.from("features").select("*").order("sort_order"),
          supabase.from("team_members").select("*").order("sort_order"),
        ]);

        if (heroRes.data) setHeroContent(heroRes.data);
        if (accordionRes.data) setAccordionItems(accordionRes.data);
        if (featuresRes.data) setFeatures(featuresRes.data);
        if (teamRes.data) setTeamMembers(teamRes.data);
      } catch (error) {
        console.error("Error fetching landing data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { heroContent, accordionItems, features, teamMembers, loading };
};
