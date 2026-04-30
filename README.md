# Pal-City Icons

A unified, shared SVG icon library built for the Pal-City ecosystem. This package serves as a single source of truth for all icons, exposing thin, compiled wrappers for both React (Web) and React Native (Expo).

## Architecture

This project uses `@svgr/cli` to automatically convert raw `.svg` files into functional React/React Native components.

- **`svgs/`**: The single source of truth. Drop raw standard `.svg` files here.
- **`src/web/`**: Auto-generated standard React components.
- **`src/native/`**: Auto-generated React Native (`react-native-svg`) components.

## How to Add a New Icon

1. **Obtain the SVG**  
   Export or download your icon as an `.svg` file (e.g., from Figma or an icon library).

2. **Add to Repository**  
   Place the `.svg` file directly into the `svgs/` folder in this repository. Give it a PascalCase name for consistency, like `UserAvatar.svg` or `HomeIcon.svg`.

3. **Build the Components**  
   Run the build script to auto-generate the wrappers.
   ```bash
   npm run build
   ```

4. **Verify**  
   Check the `src/` and `dist/` folders to verify that the TypeScript components and compiled JavaScript have been updated.

## How to Use in Projects

Once published, you can install the library in any Pal-City project:

```bash
npm install pal-city-icons
```

**For React (Next.js / Vite / Web):**
```tsx
import { HomeIcon } from 'pal-city-icons';

export default function MyComponent() {
  return <HomeIcon width={24} height={24} />;
}
```

**For React Native (Expo):**
```tsx
import { HomeIcon } from 'pal-city-icons';

export default function MyScreen() {
  return <HomeIcon width={24} height={24} />;
}
```

## How to Publish to npm

Whenever you add new icons or make changes, you need to publish a new version to npm.

1. **Update the Version:** Manually increment the `"version"` field in `package.json` (e.g., change `"1.0.0"` to `"1.0.1"`).
2. **Log into npm:** (If you haven't already on your machine)
   ```bash
   npm login
   ```
3. **Publish:**
   ```bash
   npm publish
   ```
*(Note: You do not need to run `npm run build` before publishing. The `package.json` contains a `prepublishOnly` script that will automatically trigger the build process for you before uploading.)*

## Available Scripts

- `npm run build`: Cleans old builds, generates new React/Native components from SVGs, and compiles them via TypeScript.
- `npm run generate`: Only generates the wrapper components in the `src/` folder.
- `npm run clean`: Deletes the auto-generated `src/` and `dist/` folders.
