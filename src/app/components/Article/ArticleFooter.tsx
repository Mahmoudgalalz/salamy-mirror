import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import ArticleActions from "@/app/components/Article/ArticleActions";

export function ArticleFooter({
  references,
}: {
  references: string | undefined;
}) {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="روابط مفيدة"
          title={<h4 className="text-black text-xl"> روابط مفيدة</h4>}
        >
          <div
            className="w-11/12"
            dangerouslySetInnerHTML={{
              __html: references || defaultContent,
            }}
          ></div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="روابط مفيدة"
          title={<h4 className="text-black text-xl"> المراجع</h4>}
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
      <Divider className="h-[0.1em] mb-3 -mt-3" />
      <ArticleActions />
    </>
  );
}
