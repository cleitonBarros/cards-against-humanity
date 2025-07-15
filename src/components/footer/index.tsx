import Link from "next/link"

export default function Footer() {
 
  const menuItems = [
    { label: "Tutorial", value: "tutorial", link: "/tutorial" },
    { label: "Sobre", value: "sobre", link: "/about" },
    { label: "FAQ", value: "faq", link: "/home#faq" },
  ];
  return (
    <footer className="border-border border-t bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav aria-label="Footer" className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" >
          {menuItems.map((item) => (
            <div className="pb-6" key={item.value}>
              <Link
                className="text-muted-foreground text-sm leading-6 hover:text-foreground"
                href={item.link}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-muted-foreground text-sm leading-5">
          Developed with ❤️   
        </p>
      </div>
    </footer>
  )
}
