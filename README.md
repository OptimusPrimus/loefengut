# Löfengut Apartment Site

Static one-page website for an apartment listing. It is designed to work on GitHub Pages without a build step.

## Files

- `index.html`: page content
- `styles.css`: layout and styling
- `script.js`: language switching
- `images/`: apartment photos
- `CNAME`: custom domain for GitHub Pages, currently `loefengut.at`
- `.nojekyll`: tells GitHub Pages to serve the static files directly

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `loefengut`.
2. Push these files into the repository root.
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and the `/ (root)` folder.
6. Save.
7. Under `Custom domain`, enter `loefengut.at`.
8. Wait until GitHub shows the DNS check as successful, then enable `Enforce HTTPS`.

## Domain DNS

At your domain registrar or DNS provider, create these DNS records for the apex domain:

```text
Type   Name  Value
A      @     185.199.108.153
A      @     185.199.109.153
A      @     185.199.110.153
A      @     185.199.111.153
```

Optional, but recommended if you also want `www.loefengut.at` to work:

```text
Type   Name  Value
CNAME  www   <your-github-username>.github.io
```

Replace `<your-github-username>` with the GitHub account or organization that owns the repository.

DNS changes can take a few minutes, but sometimes take several hours to propagate.

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any static file server.
