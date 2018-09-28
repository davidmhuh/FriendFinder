# FriendFinder
![from home html](https://user-images.githubusercontent.com/18372977/46209280-52105680-c2e2-11e8-9742-050b48d92cbf.png)

![to survey html](https://user-images.githubusercontent.com/18372977/46209283-53da1a00-c2e2-11e8-952c-871c76ead756.png)

![survey1](https://user-images.githubusercontent.com/18372977/46209126-ceef0080-c2e1-11e8-8810-f73463bcaa86.png)

![survey2](https://user-images.githubusercontent.com/18372977/46209152-df06e000-c2e1-11e8-881f-0310c0fc2e6e.png)

![survey3](https://user-images.githubusercontent.com/18372977/46209162-e6c68480-c2e1-11e8-9c9f-796580c06666.png)

![survey4](https://user-images.githubusercontent.com/18372977/46209188-f6de6400-c2e1-11e8-8692-d1f9914e6b18.png)



1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. Your `server.js` file should require the basic npm packages we've used in class: `express`, `body-parser` and `path`.

3. Your `htmlRoutes.js` file should include two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 

4. Your `apiRoutes.js` file should contain two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```

6. Determine the user's most compatible friend using the following as a guide:

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
   * The closest match will be the user with the least amount of difference.

7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
   * The modal should display both the name and picture of the closest match.
