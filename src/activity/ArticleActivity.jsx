import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";

const ArticleActivity = ({ params: { title } }) => {
  const { replace, pop } = useFlow();

  const onClickPop = () => {
    pop();
  };

  const onClickReplace = () => {
    replace("ArticleActivity", { title: "Replace된 아티클" });
  };

  return (
    <AppScreen appBar={{ title: "Article" }}>
      <div>
        <h1>{title}</h1>
        <button onClick={onClickPop}>뒤로가기</button>
        <button onClick={onClickReplace}>Replace</button>
      </div>
    </AppScreen>
  );
};

export default ArticleActivity;
