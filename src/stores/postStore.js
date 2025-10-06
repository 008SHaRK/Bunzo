import { defineStore } from "pinia";
import img1 from "@/assets/img/1-2.jpg";
import img2 from "@/assets/img/2-1.jpg";
import img3 from "@/assets/img/6-1.jpg";
import img4 from "@/assets/img/9.jpg";
import img5 from "@/assets/img/13.jpg";
import img6 from "@/assets/img/14-1.jpg";

export const usePostStore = defineStore("postStore", {
  state: () => ({
    posts: [
      {
        id: 1,
        title: "title1",
        tag: "design",
        image: img1,
        author: "authors",
        date: "apr12",
        readTime: 3,
      },
      {
        id: 2,
        title: "title2",
        tag: "drupal",
        image: img2,
        author: "authors",
        date: "apr13",
        readTime: 5,
      },
      {
        id: 3,
        title: "title3",
        tag: "javascript",
        image: img3,
        author: "authors",
        date: "apr13",
        readTime: 5,
      },
      {
        id: 4,
        title: "title4",
        tag: "joomla",
        image: img4,
        author: "authors",
        date: "apr13",
        readTime: 5,
      },
      {
        id: 5,
        title: "title5",
        tag: "magento",
        image: img5,
        author: "authors",
        date: "apr13",
        readTime: 5,
      },
      {
        id: 6,
        title: "title6",
        tag: "wordpress",
        image: img6,
        author: "authors",
        date: "apr13",
        readTime: 5,
      },
    ],
  }),
  actions: {
    getPosts() {
      return this.posts;
    },
    getPost(id) {
      try {
        const found = this.posts.find((p) => p.id === id);
        if (!found) throw new Error("Post tapılmadı");
        return found;
      } catch (error) {
        console.error(error.message);
        return null;
      }
    },
    addPost(post) {
      try {
        this.posts.push(post);
      } catch (error) {
        console.error(error.message);
      }
    },
    updatePost(id, data) {
      try {
        const index = this.posts.findIndex((p) => p.id === id);
        if (index !== -1) this.posts[index] = { ...this.posts[index], ...data };
      } catch (error) {
        console.error(error.message);
      }
    },
    deletePost(id) {
      try {
        this.posts = this.posts.filter((p) => p.id !== id);
      } catch (error) {
        console.error(error.message);
      }
    },
  },
});
