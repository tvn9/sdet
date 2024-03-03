exports.HomePage = class HomePage {
   constructor(page) {
      this.page = page
      this.homePageUrl = page.goto("/home")
   }

   async navigateToHomePage() {
      await this.homePageUrl
   }
}