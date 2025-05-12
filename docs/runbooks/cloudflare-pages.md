# Cloudflare Pages

## Deploying landing page

- [deploy-landing.yml](../../.github/workflows/deploy-landing.yml)

### Get Cloudflare Account ID

```bash
npm install -g wrangler
```

```bash
wrangler login

# Retrieve ID: 
wrangler whoami
```

Github > Settings > Secrets and variables > Actions > New repository secret:

```bash
CLOUDFLARE_ACCOUNT_ID
```

### Create a CLOUDFLARE_API_TOKEN for GitHub Actions

1. Click “Create Custom Token” > Get started
2. Token name: github-actions-pages-deploy
3. Under Permissions, add: `Account → Cloudflare Pages → Edit`
4. Under Account Resources → `Select: Include → Specific accounts`
5. Click Continue to summary, then Create Token
6. Copy the token and store it securely in your GitHub repo as: `CLOUDFLARE_API_TOKEN`
