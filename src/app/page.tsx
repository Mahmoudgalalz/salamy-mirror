import { Button, Image } from "@nextui-org/react";
import NextImage from 'next/image'
export default function Home() {
  return (
    <main className=" relative flex justify-between items-center my-16 bg-[#FFE0D0]">
        <Image as={NextImage} src="/main-page.png" width={1400} radius="none" height={1900} alt="Main Image" />
        <section className="flex mx-[16rem] mr-20 flex-col text-[#333D42] gap-12 py-20 justify-center">
            <h3 className="text-xl">منصة سلامي للصحة النفسية</h3>
            <h1 className="text-4xl leading-relaxed w-[32rem] font-semibold">منصة سلامي دليلك المتكامل نحو صحة نفسية أفضل</h1>
            <p className="">
            رحلتك نحو السلام النفسي تبدأ من هنا. 
احصل على الدعم النفسي الذي تحتاجه الآن علي منصة سلامي للصحة النفسية، تصفح جميع المقالات واعرف اكثر عن كيفية تنظيم حياتك وعلاقات مع الاشخاص المحيطة بشكل علمي، نحن هنا من اجل صحة نفسية افضل.
            </p>
            <Button className="w-[12rem] bg-[#FCD961]">اعرف اكتر عن منصة سلامي</Button>
        </section>
    </main>
  )
}
