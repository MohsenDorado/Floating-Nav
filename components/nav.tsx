"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AnimatePresence,
  motion,
} from "framer-motion"

export default function Nav() {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/projects",
      name: "Projects",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ]
  const pathname = usePathname()
  const MotionLink = motion(Link)


  

  return (
    <nav className="p-8 flex justify-center">
      <ul className="flex gap-10 lg:gap-28 md:gap-16">
        <AnimatePresence>
          {links.map((link) => {
           

           
          
          
            return (
              <motion.li
                
                key={link.path}
               
              >
                <MotionLink
                  className={cn(
                    "font-medium relative rounded-xl text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-blue-50"
                  )}
                  href={link.path}
                >
                   <motion.span
                    
                    className="font-bold z-10 relative"
                  > 
                    {link.name}
                   </motion.span> 
                  {pathname === link.path ? (
                    <motion.div
                      transition={{ type: "spring" }}
                      layoutId="underline"
                      className="absolute z-0 w-full h-full rounded-md left-0 bottom-0 bg-blue-300"
                    ></motion.div>
                  ) : null}
                </MotionLink>
              </motion.li>
            )
          })}
        </AnimatePresence>
      </ul>
    </nav>
  )
}
