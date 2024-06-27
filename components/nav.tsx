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
      name: "home",
    },
    {
      path: "/projects",
      name: "projects",
    },
    {
      path: "/contact",
      name: "contact",
    },
  ]
  const pathname = usePathname()
  const MotionLink = motion(Link)


  

  return (
    <nav className="p-8 flex justify-center">
      <ul className="flex gap-12">
        <AnimatePresence>
          {links.map((link) => {
           

           
          
          
            return (
              <motion.li
                onPointerMove={(event) => {
                  
                }}
                key={link.path}
               
              >
                <MotionLink
                  className={cn(
                    "font-medium relative rounded-md text-sm py-2 px-4 transition-all duration-500 ease-out hover:bg-blue-50",
                    pathname === link.path ? "" : ""
                  )}
                  href={link.path}
                >
                   <motion.span
                    
                    className="z-10 relative"
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
