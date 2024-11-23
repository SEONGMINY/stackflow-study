import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "@stackflow/react/future";

const MainActivity = () => {
  const { push } = useFlow();

  const onClickPush = () => {
    push("ArticleActivity", { title: "아티클 화면 입니까?" });
  };

  return (
    <AppScreen appBar={{ title: "메인 화면 타이틀" }}>
      <div>메인 화면 입니다.</div>
      <button onClick={onClickPush}>Article 페이지로 이동</button>
    </AppScreen>
  );
};

export default MainActivity;
