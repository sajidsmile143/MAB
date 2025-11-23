# GitHub Authentication Setup for Private Repository

## Problem
Your repository is private, so you need to authenticate to push code.

## Solution: Create Personal Access Token (PAT)

### Step 1: Create Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Fill in:
   - **Note**: `MAB Judiciary Deployment`
   - **Expiration**: 90 days (or No expiration)
   - **Select scopes**: Check ✅ **repo** (all sub-options)
4. Click "Generate token"
5. **COPY THE TOKEN** - you won't see it again!

### Step 2: Push Code with Token

Run this command (replace `YOUR_TOKEN` with the token you copied):

```bash
git push https://YOUR_TOKEN@github.com/sajidsmile143/MAB.git main
```

**Example:**
```bash
git push https://ghp_xxxxxxxxxxxxxxxxxxxx@github.com/sajidsmile143/MAB.git main
```

---

## Alternative: Use GitHub Desktop (Easier!)

1. Download GitHub Desktop: https://desktop.github.com/
2. Install and login with sajidsmile143@gmail.com
3. File → Add Local Repository → Select `C:\Projects\personal\MAB`
4. Click "Publish repository"
5. Select "Keep this code private" ✅
6. Click "Publish Repository"

**This is the easiest method!** 🎯

---

## After Pushing

Once code is pushed, tell me "pushed" and I'll help you deploy to Vercel!
