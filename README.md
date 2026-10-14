# I.AM.AWRA Website

A responsive bilingual (English/Amharic) static website for the I.AM.AWRA YouTube channel. Built with plain HTML, CSS, and JavaScript for GitHub Pages.

## 1. Customize it first

Open `index.html` and replace:
- `https://www.youtube.com/` with your actual channel URL.
- `VIDEO_ID_1` with the ID of your featured YouTube video.
- Placeholder titles and descriptions with your real videos.
- `https://github.com/iamawra` if your actual GitHub username differs.

A YouTube video ID is the part after `v=` in a URL such as `https://www.youtube.com/watch?v=abc123XYZ`. In that example, the ID is `abc123XYZ`.

To add another embedded video, copy the `<article class="video-card">` block in `index.html`, update the iframe URL to `https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID`, and change the title and description.

## 2. Publish using GitHub Pages

1. Sign in to GitHub.
2. Create a **public** repository named exactly `iamawra.github.io` (this assumes your GitHub username is `iamawra`).
3. Upload the contents of this folder to the repository root. `index.html` must be at the root, not nested inside another folder.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch **main** and folder **/(root)**, then click **Save**.
7. Wait for the deployment, then visit `https://iamawra.github.io/`.

If your GitHub username is not `iamawra`, use `YOUR-USERNAME.github.io` as the repository name and `https://YOUR-USERNAME.github.io/` as the site URL. Repository names and usernames are not interchangeable.

GitHub Pages is static hosting; do not add private API keys or secrets to this public repository. A custom domain is optional and can be added later if you buy one.

## 3. Local preview

Open `index.html` in your browser. No build tools or package installation are required. An internet connection is needed for Google Fonts and embedded YouTube videos.

## 4. Language toggle

The language toggle switches elements marked with `data-en` and `data-am` between English and Amharic. Update both attributes when changing those strings. The page uses Amharic script directly in UTF-8.
