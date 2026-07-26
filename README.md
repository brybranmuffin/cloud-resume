# cloud-resume

Personal site for **bryant.bet**. React + Vite, deployed as static files to S3.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # writes ./build
npm run preview  # serve ./build locally
```

## Deployment

`.github/workflows/main.yml` runs on push to `master` and syncs `./build` to the S3
bucket with `--delete`.

Two consequences worth remembering:

- **`./build` is committed to the repo.** It is the deployed artifact, so it must not
  be added to `.gitignore`. Run `npm run build` and commit the result as part of any
  change you want live.
- **`--delete` means the bucket mirrors `./build` exactly.** Pushing to `master` with a
  missing or empty `build/` will wipe the live site.

`vite.config.js` sets `build.outDir` to `build` to match the workflow's `SOURCE_DIR`.
Renaming one requires renaming the other.

### Routing

Static hosting has no server-side rewrites, so deep links to client-side routes 404 on
refresh. The previous version of this site used `HashRouter` for that reason. If routing
is reintroduced, use `HashRouter` — or configure an S3/CloudFront error-document rewrite
to `index.html` before using `BrowserRouter`.

### Other

`CNAME` (`bryant.bet`) and the `origin/gh-pages` branch are left over from GitHub Pages
hosting. S3 is the active path.
