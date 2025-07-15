import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-border border-t bg-background">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav aria-label="Footer" className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" >
          {["About", "Work", "Services", "Contact", "Privacy", "Terms"].map((item) => (
            <div className="pb-6" key={item}>
              <Link
                className="text-muted-foreground text-sm leading-6 hover:text-foreground"
                href="https://www.flowersandsaints.com.au"
                rel="noopener noreferrer"
                target="_blank"
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-muted-foreground text-sm leading-5">
          Developed with ❤️ by Eli .  
        </p>
      </div>
    </footer>
  )
}
