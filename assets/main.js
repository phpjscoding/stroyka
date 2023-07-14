document.addEventListener("alpine:init", () => {
  Alpine.data("productFn", () => ({
    title: "mytitle",

    variantFn(e) {
      console.log("variant");
    },
    handleAddToCart() {
      this.miniCartOpen = !this.miniCartOpen;
    },
    miniCartOpen: false,

    handleVariantsImages(el) {
      console.log(el.dataset.id);
      let myUrl = `${location.protocol}//${location.host}${location.pathname}`;

      const url = new URL(myUrl);
      url.searchParams.set("variant", el.dataset.id);
      window.history.pushState({ path: url.href }, "", url.href);
      let main_img = document.querySelector(".product_main-img > img");
      let this_img = el.querySelector("img");

      console.log(this_img.src);
      main_img.src = this_img.src;
      console.log(this.$refs.main_product_image);
    },
  }));
});
