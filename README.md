
# Contact Management App with Charts and Maps

This is a contact management app built using ReactJS, TypeScript, TailwindCSS, React Router v6, React Query (TanstackQuery), and Redux. The app allows you to manage contacts, view COVID-19 data using interactive charts and maps.

## Features

- Add, edit, and delete contacts.
- View list of contacts with contact details.
- Interactive charts displaying COVID-19 cases fluctuations.
- React Leaflet map with markers indicating COVID-19 data for different countries.

## APIs Used

- World wide data of cases: `https://disease.sh/v3/covid-19/all`
- Country-specific data of cases: `https://disease.sh/v3/covid-19/countries`
- Graph data for cases with date: `https://disease.sh/v3/covid-19/historical/all?lastdays=all`

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/sweta134/Contact-Managemen-App.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app locally:
   ```bash
   npm start
   ```

## Deployment

### Deploying to Vercel

1. Install Vercel CLI (if not installed):
   ```bash
   npm install -g vercel
   ```

2. Build the app:
   ```bash
   npm run build
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```

### Deploying to GitHub Pages

1. Create a new GitHub repository for your app.

2. Update the `package.json` file with the following information:
   ```json
   "homepage": "https://github.com/sweta134/Contact-Managemen-App.git",
   ```

3. Install the GitHub Pages package:
   ```bash
   npm install gh-pages --save-dev
   ```

4. Add the following scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
   }
   ```

5. Deploy the app to GitHub Pages:
   ```bash
   npm run deploy
   ```

6. Go to your GitHub repository settings and set the GitHub Pages source to the `gh-pages` branch.

7. Your app will be accessible at `https://github.com/sweta134/Contact-Managemen-App.git`.

## Author

Sweta Upadhyay
