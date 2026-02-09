import { GitContributors } from "D:/wwwroot/wanglei/ccnight_vuepress/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/wwwroot/wanglei/ccnight_vuepress/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
