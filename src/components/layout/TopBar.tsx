import { Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import { site } from "@/data/site";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function TopBar() {
  return (
    <div className="hidden bg-ink-950 text-[13px] text-ink-300 lg:block [&_*]:whitespace-nowrap">
      <div className="container-x flex h-10 items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white">
            <Phone className="size-3.5 text-accent-400" aria-hidden /> {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
            <Mail className="size-3.5 text-accent-400" aria-hidden /> {site.email}
          </a>
          <span className="hidden items-center gap-2 2xl:flex">
            <MapPin className="size-3.5 text-accent-400" aria-hidden /> Branches across Punjab &amp; Chandigarh Tricity
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="hidden items-center gap-2 xl:flex">
            <Clock className="size-3.5 text-accent-400" aria-hidden /> {site.hours}
          </span>
          <span className="flex items-center gap-1.5 text-white">
            <Star className="size-3.5 fill-accent-400 text-accent-400" aria-hidden />
            {site.rating.score} Google · {site.rating.reviews} reviews
          </span>
          <SocialIcons itemClass="size-7 text-ink-300 hover:bg-white/10 hover:text-white" className="gap-0.5" />
        </div>
      </div>
    </div>
  );
}
