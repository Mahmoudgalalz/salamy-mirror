import Link from "next/link";
import Image from "next/image";

const MiniFeaturedArticle = ({
  image,
  category,
  title,
  description,
  articleGroupSlug,
  articleSlug,
  size = "default",
}: {
  image?: Cover;
  category?: string;
  title?: string;
  description?: string;
  articleGroupSlug?: string;
  articleSlug?: string;
  size?: "default" | "small";
}) => {
  return (
    <Link href={`/articleGroup/${articleGroupSlug}/article/${articleSlug}`}>
      <div className="flex gap-5  h-full py-5" role="مقالة مميزة">
        {image && (
          <Image
            src={`http://128.199.48.214:1337${image.data.attributes.formats.thumbnail.url}`}
            alt="article"
            className="w-1/4 h-full bg-contain"
            width={600}
            height={300}
          />
        )}
        <div className="flex flex-col gap-3 py-2" role="محتوي المقالة">
          <span className="flex flex-col gap-2" role="تصنيف و عنوان المقالة">
            <h5 className="text-content1 text-xs">{category}</h5>
            <h3
              className={`${
                size === "small" ? "text-base" : "text-2xl"
              } text-[#232426] font-normal`}
            >
              {title}
            </h3>
          </span>
          <p
            className={`text-[#656667] leading-loose ${
              size === "small" ? "text-xs" : "text-sm"
            } text-ellipsis line-clamp-1`}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MiniFeaturedArticle;
