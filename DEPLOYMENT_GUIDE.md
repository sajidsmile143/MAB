# GitHub Repository Setup Instructions

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Log in with: **sajidsmile143@gmail.com**
3. Fill in the details:
   - **Repository name**: `mab-judiciary`
   - **Description**: MAB Judiciary Platform - Legal Resources & Case Law Database
   - **Visibility**: ✅ **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/mab-judiciary.git

# Push the code
git push -u origin main
```

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Verify Upload

1. Go to https://github.com/YOUR_USERNAME/mab-judiciary
2. Verify all files are uploaded
3. Check that `.env` files are NOT visible (they should be ignored)

---

## Next: Deploy to Vercel

Once the code is on GitHub, we'll deploy to Vercel.

### Frontend Deployment (Vercel)

1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import `mab-judiciary` repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add Environment Variable:
   - `VITE_API_URL`: (Backend URL - we'll add this after backend deployment)
7. Click "Deploy"

### Backend Deployment (Render)

1. Go to https://render.com
2. Sign up/Login with GitHub
3. Click "New +" → "Web Service"
4. Connect `mab-judiciary` repository
5. Configure:
   - **Name**: `mab-judiciary-api`
   - **Root Directory**: `server`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add Environment Variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Your JWT secret
   - `PORT`: 5000
   - `YOUTUBE_API_KEY`: Your YouTube API key
   - `YOUTUBE_CHANNEL_ID`: Your channel ID
7. Click "Create Web Service"

---

## Important Notes

- ⚠️ **MongoDB**: Make sure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- ⚠️ **File Uploads**: Local uploads won't work on Vercel/Render. You'll need Cloudinary for production.
- ⚠️ **CORS**: Update backend CORS to allow your Vercel domain

---

## I'll help you with each step!

Let me know when you've created the GitHub repository, and I'll help you push the code and deploy to Vercel.
