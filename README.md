# Trellis site

Marketing landing page for [Trellis](https://mobile.dclexplorer.com/open?realm=trellis.dcl.eth), a Decentraland World: a walled allotment garden that its visitors plant together.

Built on the Aceternity "Notus" template, recoloured to the Trellis palette. Layout, motion and component choices are the template's; only colour tokens, copy and imagery changed.

## Run

```bash
cp .env.sample .env   # fill in the values
npm install
npm run dev
```

## Images

Every render on the page is declared in `constants/images.ts` and lives under `public/images/`. Replace the file, keep the name, and clear the `pending` flag. `og.png` (1200×630) is the share card and `logo.png` (480×480) is the submission logo.

## Adding registry components

`components.json` points the shadcn CLI at the Aceternity registry and reads the key from `ACETERNITY_UI_API_KEY` in the environment:

```bash
npx shadcn@latest add @aceternity/<component>
```
