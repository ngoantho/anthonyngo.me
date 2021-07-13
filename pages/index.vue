<template>
  <div>
    <NotionRenderer :blockMap="blockMap" fullPage />
    <div class="container">
      <h2 class="notion-h2">
        <span>
          <span>My Articles</span>
        </span>
      </h2>
      <hr class="notion-hr"/>
      <div class="card" v-for="article in articles" :key="article.slug">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{article.title}}</p>
            </div>
          </div>

          <div class="content">
            <p>{{article.brief}}</p>
          </div>
        </div>
        <footer class="card-footer">
          <a :href="'https://blog.anthonyngo.me/'+article.slug" class="card-footer-item">Read more...</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="js">
const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "ngoantho") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                }
            }
        }
    }
`;

export default {
  data() {
    return {
      blockMap: null 
    }
  },
  async asyncData({ $notion, store }) { 
    // use Notion module to get Notion blocks from the API via a Notion pageId
    const blockMap = await $notion.getPageBlocks(
      "f7fc5e16d0fe45c9b8e3bf182a8f186f"
    );

    const {data: { user: { publication: posts }}} = await store.dispatch("gql", {
        query: GET_USER_ARTICLES,
        variables: {
            page: 0
          }
      })
    let articles = posts.posts

    return { blockMap, articles };
  },
}
</script>

<style>
@import "vue-notion/src/styles.css";

.container {
    max-width: 708px;
  }
</style>
