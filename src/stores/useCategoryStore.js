import { defineStore } from "pinia";
import designImg from "@/assets/img/1-2.jpg";
import drupalImg from "@/assets/img/2-1.jpg";
import jsImg from "@/assets/img/14-1.jpg";
import joomlaImg from "@/assets/img/13.jpg";
import magentoImg from "@/assets/img/16.jpg";
import wpImg from "@/assets/img/6-1.jpg";

export const useCategoryStore = defineStore("categoryStore", {
  state: () => ({
    categories: [
      { title: "Design", image: designImg, link: "/category/design" },
      { title: "Drupal", image: drupalImg, link: "/category/drupal" },
      { title: "Javascript", image: jsImg, link: "/category/javascript" },
      { title: "Joomla", image: joomlaImg, link: "/category/joomla" },
      { title: "Magento", image: magentoImg, link: "/category/magento" },
      { title: "WordPress", image: wpImg, link: "/category/wordpress" },
    ],
  }),
  actions: {
    getCategories() {
      return this.categories;
    },
  },
});
