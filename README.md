# Creatorverse

## About the app

Creatorverse is a simple web app where you can keep track of your favorite content creators. You know how everyone has that one YouTuber they can't stop watching? Or that TikTok creator that always makes you laugh? This app lets you save all of them in one place, with their descriptions and links.

You can add creators, edit their info if something changes, delete them if they're no longer your vibe, and basically manage a whole list of people you want to keep up with. It's pretty straightforward.

## Tech Stack

- **React** - for building the UI
- **Vite** - for fast development and builds
- **React Router** - for navigation between pages
- **Supabase** - for the database (storing creator data)
- **CSS** - for styling (nothing fancy, just clean and readable)

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿 [INSERT YOUR VIDEO/GIF HERE - Use a tool like ScreenToGif or Kap to record your demo]

GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows


## How to Get Started

### 1. Install Dependencies

First, you need to install all the packages the app depends on:

```bash
npm install
```

### 2. Start the Dev Server

Run this command to start the app locally:

```bash
npm run dev
```

After running this, your terminal will show you a localhost URL (usually `http://localhost:5173`). Open that in your browser and you're good to go.

### 3. Check if it Works

Once the app opens, you should see the Creatorverse homepage. Try clicking "Add Creator" and adding a few creators. If you can add them and see them appear on the homepage, everything's working.

## What Can You Do?

- **Add Creators** - Fill out a quick form with the creator's name, URL to their channel, a short description, and optionally an image
- **View All Creators** - See all your creators displayed nicely as cards on the homepage
- **Click on a Creator** - View more details about a specific creator
- **Edit Creator Info** - If you made a typo or something changed, you can update their info
- **Delete a Creator** - Remove someone from your list if you're no longer following them
- **Visit Their Channel** - Click the link on each creator card to go straight to their page

## Project Structure

Here's how the files are organized:

```
src/
├── App.jsx              (handles all the routing)
├── main.jsx             (starts the app)
├── client.js            (connects to Supabase)
├── index.css            (main styling)
├── App.css              (additional app styling)
├── components/
│   └── Card.jsx         (displays each creator as a card)
└── pages/
    ├── ShowCreators.jsx (homepage with all creators)
    ├── ViewCreator.jsx  (see details of one creator)
    ├── AddCreator.jsx   (form to add a new creator)
    └── EditCreator.jsx  (form to edit creator info)
```

## How Data Flows

1. When you open the app, **ShowCreators** fetches all creators from the database
2. Each creator gets displayed as a **Card** component
3. Clicking a card takes you to **ViewCreator** where you see all the details
4. From there, you can edit (goes to **EditCreator**) or delete the creator
5. If you click "Add Creator" from the homepage, you go to **AddCreator** to add a new one
6. After adding/editing/deleting, you get sent back to the homepage

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Database Setup

The app uses Supabase for the database. You need a `creators` table with these columns:

- `id` (auto-incremented primary key)
- `name` (text)
- `url` (text)
- `description` (text)
- `imageURL` (text, optional)

If you're setting this up for the first time, create the table in your Supabase dashboard and Supabase will handle the `id` automatically.

## Credentials (Important!)

The app already has Supabase credentials configured in `src/client.js`. These are set up for the development environment. If you want to use your own Supabase project, update the `URL` and `API_KEY` in that file with your own project's credentials.

## Troubleshooting

**App won't start?**
- Make sure you've run `npm install` first
- Check that you have Node.js installed on your computer

**Database connection issues?**
- Double-check the Supabase URL and API key in `src/client.js`
- Make sure your Supabase project has a `creators` table with the right columns
- Check that you have internet connection

**Styling looks weird?**
- Try refreshing the browser page
- Clear your browser cache (Ctrl+Shift+Del on Windows, Cmd+Shift+Del on Mac)

**Can't navigate between pages?**
- Make sure you're using the buttons/links in the app, not the browser's back button
- React Router handles navigation, so stick with the in-app buttons

## What's Next?

After you get this working, you could:

- Add a search feature to find creators quickly
- Sort creators by name or date added
- Add categories or tags to organize creators
- Style it with something like Tailwind or Picocss
- Deploy it to make it live on the internet

## Notes

- This is a frontend app, so all your data is stored in Supabase (in the cloud)
- You can have multiple users if you set up authentication
- The app is designed to be simple and easy to understand, not feature-heavy

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [ ] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [x] Content creators can have optional image URLs that display on cards and detail pages
* [x] Real-time database integration with Supabase for persistent data storage
* [x] React Router for seamless navigation between pages

That's basically it! Just run `npm install` and `npm run dev` and you're ready to start tracking your favorite creators. 🚀

## License

Copyright [2024] [HarshikaAgr]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.