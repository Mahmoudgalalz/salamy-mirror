import ActionBtn from "../ActionBtn";

export default function ArticleActions() {
  return (
    <div className="mr-16 flex gap-5 justify-between">
      <ActionBtn title="تحميل كملف PDF" icon="download" />
      <ActionBtn title="طباعة" icon="print" />
      <ActionBtn title="مشاركة" icon="share" />
      <ActionBtn title="نسخ الرابط" icon="copy" />
    </div>
  );
}
