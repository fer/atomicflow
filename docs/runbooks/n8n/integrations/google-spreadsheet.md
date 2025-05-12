> Access **only one specific Google Sheet** from n8n, with minimal OAuth scope.
## 🔐 Step 1: Create OAuth Credentials in Google Cloud

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (or select an existing one).
3. Navigate to: **APIs & Services → Library**.
4. Search for and **enable** the following API:
	- ✅ Google Sheets API
5. Then go to: **APIs & Services → Credentials**.
	+ Create Credentials → OAuth client ID
	
> To create an OAuth client ID, you must first configure your consent screen

6. Configure the OAuth Client:
   - **Application type:** Web application
   - **Name:** `n8n - Sheets access`
   - **Authorized redirect URI:**  

```
https://n8n.atomicflow.net/rest/oauth2-credential/callback
```

7. Click **Create**, then save:
   - 🔑 `Client ID`
   - 🔑 `Client Secret`

  

---