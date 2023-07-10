export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Portal Administrasi",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Pelayanan",
      href: "/services",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/bayuarp26",
    docs: "https://ui.shadcn.com",
    main: "https://batuix.tanjungpinangkota.go.id/",
    profile: "services",
  },
}
