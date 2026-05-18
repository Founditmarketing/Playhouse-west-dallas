import { Facebook, Youtube } from "lucide-react"

export function SocialSection() {
  return (
    <section className="bg-card py-14 md:py-14">
      <div className="max-w-[1160px] mx-auto px-6 lg:px-4">
        <h2 className="font-serif uppercase tracking-[4px] text-primary text-center text-3xl md:text-4xl lg:text-[42px] mb-10">
          Social Media Links
        </h2>
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.facebook.com/groups/1043178900277669"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Social Link"
            className="text-primary hover:text-accent transition-colors"
          >
            <Facebook className="w-10 h-10" />
          </a>
          <a
            href="https://x.com/PlayhouseWest/status/1762961145772519608"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
            className="text-primary hover:text-accent transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/channel/UC3yFuuTP3P9uaMRVIiUw21g/videos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Social Link"
            className="text-primary hover:text-accent transition-colors"
          >
            <Youtube className="w-10 h-10" />
          </a>
        </div>
      </div>
    </section>
  )
}
