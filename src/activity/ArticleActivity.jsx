import { AppScreen } from "@stackflow/plugin-basic-ui";

const ArticleActivity = ({ params: { title } }) => {
  return (
    <AppScreen appBar={{ title: "Article" }}>
      <div>
        <h1>{title}</h1>
      </div>
    </AppScreen>
  );
};

export default ArticleActivity;
