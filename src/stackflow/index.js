import "@stackflow/plugin-basic-ui/index.css";
import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import MainActivity from "../activity/MainActivity";
import ArticleActivity from "../activity/ArticleActivity";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 300,
  activities: {},
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  activities: {
    MainActivity,
    ArticleActivity,
  },
  initialActivity: () => "MainActivity",
});
