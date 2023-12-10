export default function Page({
  params,
}: {
  params: { slug: string; id: number };
}) {
  return <div>My Post: {params.slug}</div>;
}
