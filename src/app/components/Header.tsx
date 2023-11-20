import { Facebook, Instagram, Twitter } from "lucide-react"
import {Button, Input} from "@nextui-org/react";

const social = [
  {
    icon:<Facebook color="#FCD961"/>,
    href:'/'
  },
  {
    icon:<Instagram color="#FCD961"/>,
    href:'/'
  },
  {
    icon:<Twitter color="#FCD961" />,
    href:'/'
  },
  {
    icon:<Facebook color="#FCD961"/>,
    href:'/'
  },
]

const upperData = [
  {
    name:'النشرة البريدية',
    href:'#newsletter'
  },
  {
    name:'اتصل بنا',
    href:'#newsletter'
  },
  {
    name:'طلب المساعدة',
    href:'#newsletter'
  },
  {
    name:'عن منصة سلامي',
    href:'#newsletter'
  },
  {
    name:'سياسة الخصوصية',
    href:'#newsletter'
  },
]

const dropdown = [
  {
    name:'الصحة النفسية',
    href:'#newsletter'
  },
  {
    name:'العلاقات',
    href:'#newsletter'
  },
  {
    name:'العلاجات والأدوية',
    href:'#newsletter'
  },
  {
    name:'الاضطرابات النفسية',
    href:'#newsletter'
  }
]


export default function Header() {
    return (
      <main className="w-full bg-[#F6F6F6] p-6">
        <div className="flex gap-2 justify-end ml-10 items-center"> 
        <div className="flex gap-10 text-[#656667]">
          {upperData.map(({href,name})=>{
            return <a className=" font-extralight text-sm" href={href}>{name}</a>
          })
        }
        </div>
        <div className="flex gap-4">
          {
            social.map(({icon,href})=>{
              return <a href={href}>{icon}</a>
            })
          }
          </div>
        </div>
        <div className="mt-6 flex items-end gap-10 justify-between">
          <img className="w-[10rem]" src="logo-black.png"/>
          <div className="flex w-full ml-28 relative">
            <Button radius="sm" className=" w-36 absolute left-0 p-7 z-10 bg-[#FCD961] text-[#656667]" color="warning" size="lg">البحث</Button>
            <Input
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: 
              [
                "bg-transparent",
              ],
              inputWrapper: [
                "bg-[#FFEEDD]",
                "!cursor-text",
              ],
            }}
            placeholder="كلمات البحث"/>
          </div>
        </div>
        <div className="flex gap-10 justify-start mt-6 mx-52">
            {
              dropdown.map(({name,href})=>{
                return <a href={href} className="text-lg font-light text-[#656667] ">{name}</a>
              })
            }
        </div>
      </main>
    )
}
  