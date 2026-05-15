# Marquee Section Integration Prompt

Copy and paste the following prompt into your AI assistant after copying the `marquee-bundle` folder into your new project:

---

**PROMPT:**

"I've added a `marquee-bundle` folder containing a `MarqueeSection.tsx` component and an `assets` folder with GIFs. Please help me integrate this marquee section into my portfolio:

1.  **Assets**: Move the GIF files from `marquee-bundle/assets/` to the `public/` directory of this project.
2.  **Component**: Move `MarqueeSection.tsx` to my `src/sections/` (or equivalent) directory.
3.  **Imports**: Ensure it has the correct imports for React hooks (`useEffect`, `useRef`, `useState`).
4.  **Integration**: Add the `<MarqueeSection />` component to my main `App.tsx` or `index.tsx` page, typically below the Hero section.
5.  **Styling**: The component uses Tailwind CSS. Ensure the project is configured for Tailwind and check if any custom colors (like `bg-dark`) need to be adjusted to match my project's theme."

---

## Instructions for Manual Setup:
1.  **Install Framer Motion**: This component relies on it for animations.
    `npm install framer-motion`
2.  **Assets**: Ensure the `.gif` files are in your `public/` folder so the paths like `src: "/mindloop.gif"` work correctly.
3.  **Check Paths**: If you move the GIFs to a subfolder like `public/assets/`, update the `src` paths in `MarqueeSection.tsx` to `"/assets/mindloop.gif"`.
