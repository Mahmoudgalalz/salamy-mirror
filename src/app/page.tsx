import { Button, Image, Input } from "@nextui-org/react";
import NextImage from 'next/image'

const cardInfo = [
  {
    image:'/card-1.png',
    header:'معلومات ونصائح نفسية يمكنك الوثوق بها',
    bio:'استكشف مقالاتنا القيمة ذات المعلومات الدقيقة والتي تم مراجعتها من خبراط و يمكنك استخدامها لتحسين صحتك النفسية'
  },
  {
    image:'/card-2.png',
    header:'دعم نفسي يمكنك الاعتماد عليه في حياتك',
    bio:'نزودك بأبرز المؤسسات والمنظمات المتخصصة في الصحة النفسية الموجوده في مصر والوطن العربي'
  },
  {
    image:'/card-3.png',
    header:'استراتيجيات علاجية متكاملة مبنية على أسس علمية',
    bio:'نحن هنا لنساعدك للوصول إلى السلام النفسي وإلى أفضل نسخة من نفسك من خلال استراتيجيات علاجية متكاملة مبنية على أسس علمية'
  },
]

export default function Home() {
  return (
    <>
    <main className=" relative flex justify-between mt-10 items-center bg-[#FFE0D0]">
        <Image as={NextImage} src="/main-page.png"  radius="none" width={2000} height={1400} alt="Main Image" />
        <section className="flex mx-[16rem] mr-36 flex-col text-[#333D42] gap-12 py-24 justify-center">
            <h3 className="text-3xl ">منصة سلامي للصحة النفسية</h3>
            <h1 className="text-6xl w-[54rem] leading-relaxed font-semibold">منصة سلامي دليلك المتكامل نحو صحة نفسية أفضل</h1>
            <p className="text-3xl w-[54rem] font-light">
            رحلتك نحو السلام النفسي تبدأ من هنا. 
احصل على الدعم النفسي الذي تحتاجه الآن علي منصة سلامي للصحة النفسية، تصفح جميع المقالات واعرف اكثر عن كيفية تنظيم حياتك وعلاقات مع الاشخاص المحيطة بشكل علمي، نحن هنا من اجل صحة نفسية افضل.
            </p>
            <Button className="w-[20rem] py-12 text-2xl bg-[#FCD961]">اعرف اكتر عن منصة سلامي</Button>
        </section>
    </main>
    <div className="flex flex-col items-center gap-10 pt-36 justify-center bg-white">
        <h2 className="text-3xl justify-center font-light text-[#F05B5B]">مهمتنا</h2>
        <h2 className="text-5xl text-center w-[62rem] leading-relaxed font-semibold">نساعدك بالمعرفة والخبرة لتعزيز صحتك النفسية والوصول إلى السلام النفسي</h2>
      </div>
    <section className="flex justify-center py-48 bg-white">
     
        {
          cardInfo.map((card)=>{
            return Card(card)
          })
        }
      </section>
      <div className="flex flex-col items-center gap-10 py-36 bg-[#FFEEDD] justify-center">
        <h1 className="text-5xl font-bold text-[##333D42] text-center w-[56rem] leading-relaxed">نساعدك في علاج مشكلتك النفسية والوصول إلى السلام النفسي</h1>
        <p className="text-3xl font-light">اختر موضوعاً ترغب في استكشافه</p>
        {/* TODO list fetched from the API */}
      </div>
      <div className="flex flex-col items-center gap-10 py-36 bg-[#F05B5B] justify-center">
        <h1 className="text-5xl font-bold text-white text-center w-[56rem] leading-relaxed">اشترك في نشرتنا البريدية</h1>
        <p className="text-3xl font-light text-white">انضم إلى قائمتنا البريدية وكن على إطلاع على احدث المقالات وأهم النصائح اليومية في الصحة النفسية.</p>
        <div className="relative w-[44rem] my-10" id="newsletter" >
          <Input classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "text-2xl",
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: 
              [
                "bg-transparent",
              ],
              inputWrapper: [
                "bg-[#FFEEDD] p-10",
                "!cursor-text",
              ],
            }} size="lg" radius="md" placeholder="البريد الالكتروني"/>
          <Button className=" absolute top-0 left-0 p-10 w-44 bg-[#fcd961] text-[#656667]" radius="sm">اشترك</Button>
        </div>
        {/* TODO list fetched from the API */}
      </div>
    </>
  )
}

function Card({image,header,bio}:{image:string,header:string,bio:string}){
  return(
    <div className="flex flex-col gap-6 justify-center items-center mx-20 w-[32rem]">
      <Image width={400} radius="lg" height={400} src={image}/>
      <h1 className="font-medium text-3xl w-[28rem] text-center">{header}</h1>
      <p className="text-center text-3xl font-light">{bio}</p>
    </div>
  )
}