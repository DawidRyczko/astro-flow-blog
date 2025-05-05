// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
const baseUrl = import.meta.env.BASE_URL;
// Site config
export const SITE_URL = "https://dawidryczko.github.io/astro-flow-blog-theme/"; // your https url
export const SITE_TITLE = "My Simple Blog"; // your base page title
export const SITE_DESCRIPTION = "Welcome to my website!"; // your base description
export const HEADER_TITLE = "Lorem Ipsum"; // your title used in header
export const LOGO_FILE_NAME = "logo.png"; // put your logo in 'public' folder
export const OPEN_GRAPH_IMAGE = "og-image.png"; // put the image in 'public' folder
export const LOCALE = "en-EN";

// Analytics
export const GOOGLE_ANALYTICS_ID = "";

// Home page
export const POST_ON_HOME_PAGE = 6; // amount off post on main page
export const POSTS_PER_PAGE = 4; // Pagination on 'Posts' page

// Social config
export const SHOW_SOCIAL_LINKS = true;
export const GITHUB = "https://github.com/DawidRyczko";
export const LINKEDIN = "https://www.linkedin.com/in/dawid-ryczko/";
export const X = "https://x.com";
export const FACEBOOK = "https://facebook.com";
export const INSTAGRAM = "https://instagram.com";
export const EMAIL = "mailto:example@example.com";
export const RSS = `${baseUrl}/rss.xml`;
