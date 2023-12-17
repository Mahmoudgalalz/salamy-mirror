import ArrowLink from "@/app/components/arrow-link";
import { Divider } from "@nextui-org/react";
import MiniFeaturedArticle from "../Article/MiniFeaturedArticle";
import Image from "next/image";

const FeaturedCategory = ({
  mainCategory,
}: {
  mainCategory: CategorizedArticles;
}) => {
  return (
    <div className="flex mt-14 min-h-full gap-3">
      <div className="flex flex-col ">
        <h3 className="text-3xl font-semibold">التصنيف الاساسي</h3>
        <Image
          src="category.png"
          alt="Category"
          className="w-full py-12"
          width={600}
          height={300}
        />
        <div className="flex flex-col gap-1 pb-4">
          {[1, 2, 3].map((item, index) => (
            <MiniFeaturedArticle key={index} />
          ))}
        </div>

        <ArrowLink name="تصفح الجميع" path="/" variant="category" />
      </div>
      <Divider orientation="vertical" className="h-11/12 w-0.5" />
    </div>
  );
};

export default FeaturedCategory;
