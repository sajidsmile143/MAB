# EmailJS Setup Instructions for MAB Judiciary

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Select "Gmail" 
4. Click "Connect Account" and login with **Mab709@gmail.com**
5. Allow EmailJS to access your Gmail
6. Note down the **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set Template Name: `Contact Form - MAB Judiciary`
4. Use this template content:

**Subject:**
```
New Contact Form Submission - MAB Judiciary
```

**Body:**
```
You have received a new message from MAB Judiciary website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from the MAB Judiciary contact form.
```

5. Click "Save"
6. Note down the **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxx`)
3. Copy this key

## Step 5: Update Contact.jsx
Open `client/src/pages/Contact.jsx` and replace these values on lines 16-18:

```javascript
const serviceId = 'YOUR_SERVICE_ID_HERE';     // From Step 2
const templateId = 'YOUR_TEMPLATE_ID_HERE';   // From Step 3
const publicKey = 'YOUR_PUBLIC_KEY_HERE';     // From Step 4
```

## Step 6: Test the Form
1. Go to http://localhost:5173/contact
2. Fill in the contact form
3. Click "Send Message"
4. Check **Mab709@gmail.com** inbox for the email

## Free Tier Limits
- 200 emails per month (free)
- Upgrade to paid plan if you need more

## Troubleshooting
- If emails don't arrive, check Gmail spam folder
- Verify all IDs are correct in Contact.jsx
- Check browser console for errors
- Make sure Gmail account is connected in EmailJS dashboard
