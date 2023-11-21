import { Button, Image } from "@nextui-org/react";
import NextImage from 'next/image'

const cardInfo = [
  {
    image:'/card-1.png',
    header:'معلومات ونصائح نفسية يمكنك الوثوق بها',
    bio:'استكشف مقالاتنا القيمة ذات المعلومات الدقيقة والتي يمكنك استخدامها لتحسين صحتك النفسية'
  },
  {
    image:'/card-2.png',
    header:'دعم نفسي يمكنك الاعتماد عليه في حياتك',
    bio:'نزودك بأبرز المؤسسات والمنظمات المتخصصة في الصحة النفسية في مصر والوطن العربي'
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
    <section className="flex justify-center">

        {
          cardInfo.map((card)=>{
            return Card(card)
          })
        }
        </section>
    </>
  )
}

function Card({image,header,bio}:{image:string,header:string,bio:string}){
  return(
    <div className="flex flex-col gap-6 justify-center items-center mx-20 w-[20rem]">
      <Image width={200} radius="none" height={200} src={image}/>
      <h1 className="font-medium w-64 text-center">{header}</h1>
      <p>{bio}</p>
    </div>
  )
}