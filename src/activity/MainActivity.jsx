import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useActivity, useFlow, useStack } from "@stackflow/react/future";
import { useEffect } from "react";

const MainActivity = () => {
  const stack = useStack();
  const activity = useActivity();
  const { push, replace } = useFlow();

  const onClickInfo = () => {
    console.log(activity);
  };

  const onClickPush = () => {
    push("ArticleActivity", { title: "아티클 화면 입니까?" });
  };

  const onReplace = () => {
    replace("ArticleActivity", { title: "Main에서 이동한 replace" });
  };

  useEffect(() => {
    console.log("Stacked Activities:", stack.activities);
    console.log("Current Transition State:", stack.globalTransitionState);
    console.log(
      "Initial Transition Duration Options",
      stack.transitionDuration
    );
    console.log("============================");
  }, [stack]);

  return (
    <AppScreen appBar={{ title: "메인 화면 타이틀" }}>
      <div>메인 화면 입니다.</div>
      <button onClick={onClickInfo}>Activity 정보 확인</button>
      <button onClick={onClickPush}>Article 페이지로 이동</button>
      <button onClick={onReplace}>Article 페이지로 Replace</button>
    </AppScreen>
  );
};

export default MainActivity;
