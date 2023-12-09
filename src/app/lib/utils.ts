export function suggestArticleGroups(data: showCase) {
  const articleGroups = data.data.map((articleGroup) => {
    return {
      id: articleGroup.id,
      name: articleGroup.attributes.Name,
    };
  });

  return articleGroups.slice(0, 10);
}
