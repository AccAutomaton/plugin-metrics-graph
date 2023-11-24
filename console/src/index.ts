import { definePlugin } from "@halo-dev/console-shared";
import IndexView from "./views/Index.vue";
import { IconPlug } from "@halo-dev/components";
import { markRaw } from "vue";

export default definePlugin({
  components: {},
  routes: [
    {
      parentName: "Root",
      route: {
        path: "/example",
        name: "Example",
        component: IndexView,
        meta: {
          title: "示例页面",
          searchable: true,
          menu: {
            name: "示例页面",
            group: "示例分组",
            icon: markRaw(IconPlug),
            priority: 0,
          },
        },
      },
    },
  ],
  extensionPoints: {},
});
