const MiniFeaturedArticle = ({
  image,
  category,
  title,
  description,
}: {
  image?: string;
  category?: string;
  title?: string;
  description?: string;
}) => {
  return (
    <div className="flex gap-5 mb-10">
      {image && <img src={image} alt="article" className="w-1/4" />}
      <div className="flex flex-col gap-3 py-2">
        <span className="flex flex-col gap-2">
          <h5 className="text-content1 text-xs">التصنيف</h5>
          <h3 className="text-2xl text-[#232426] font-normal">
            هنا يتم استدعاء اسم المقالة
          </h3>
        </span>
        <p className="text-[#656667] leading-loose text-sm">
          هنا يتم استدعاء مختصر عن المقالة او المحتوي الاول للمقالة هنا يتم
          استدعاء مختصر عن المقالة او المحتوي الاول للمقالة....
        </p>
      </div>
    </div>
  );
};

export default MiniFeaturedArticle;
