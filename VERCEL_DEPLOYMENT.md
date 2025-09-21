# Vercel Deployment Guide for Crystal Mine Guard

This guide provides step-by-step instructions for deploying the Crystal Mine Guard application to Vercel.

## Prerequisites

- Vercel account (sign up at https://vercel.com)
- GitHub account with access to the repository
- Node.js 18+ installed locally (for testing)

## Step-by-Step Deployment Process

### 1. Prepare the Repository

Ensure your code is pushed to GitHub:
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Connect to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository: `OscarLopez369/crystal-mine-guard`
4. Click "Import"

### 3. Configure Project Settings

#### Build Settings
- **Framework Preset**: Vite
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### Environment Variables
Add the following environment variables in Vercel dashboard:

```
VITE_CHAIN_ID=11155111
VITE_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_API_KEY
VITE_WALLET_CONNECT_PROJECT_ID=YOUR_WALLET_CONNECT_PROJECT_ID
VITE_INFURA_API_KEY=YOUR_INFURA_API_KEY
```

**Important**: Replace `YOUR_INFURA_API_KEY` and `YOUR_WALLET_CONNECT_PROJECT_ID` with your actual values.

### 4. Deploy the Application

1. Click "Deploy" button
2. Wait for the build process to complete (usually 2-3 minutes)
3. Your application will be available at the provided Vercel URL

### 5. Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your project settings in Vercel
2. Navigate to "Domains" tab
3. Add your custom domain
4. Follow the DNS configuration instructions

## Post-Deployment Configuration

### 1. Verify Environment Variables

Ensure all environment variables are properly set in Vercel dashboard:
- Check that all `VITE_` prefixed variables are configured
- Verify the values match your requirements

### 2. Test the Application

1. Open your deployed application URL
2. Test wallet connection functionality
3. Verify all pages load correctly
4. Check that the favicon displays properly

### 3. Monitor Performance

- Use Vercel Analytics to monitor performance
- Check build logs for any issues
- Monitor function execution if using serverless functions

## Troubleshooting

### Common Issues

#### Build Failures
- Check that all dependencies are in `package.json`
- Ensure TypeScript compilation passes locally
- Verify environment variables are set correctly

#### Wallet Connection Issues
- Verify `VITE_WALLET_CONNECT_PROJECT_ID` is correct
- Check that the RPC URL is accessible
- Ensure the chain ID matches your configuration

#### Environment Variables Not Loading
- Make sure variables are prefixed with `VITE_`
- Redeploy after adding new environment variables
- Check that variables are set in the correct environment (Production/Preview)

### Debugging Steps

1. **Check Build Logs**: Go to Vercel dashboard → Project → Functions tab
2. **Local Testing**: Run `npm run build` locally to test build process
3. **Environment Check**: Use browser dev tools to verify environment variables

## Production Optimization

### 1. Performance Optimization
- Enable Vercel's Edge Network
- Configure caching headers
- Optimize images and assets

### 2. Security
- Use environment variables for sensitive data
- Enable HTTPS (automatic with Vercel)
- Configure proper CORS settings

### 3. Monitoring
- Set up Vercel Analytics
- Configure error tracking
- Monitor build performance

## Deployment Commands

### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Environment-Specific Deployments
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Maintenance

### Regular Updates
1. Push changes to GitHub
2. Vercel automatically redeploys
3. Monitor for any issues

### Updates
- Keep dependencies updated
- Monitor for security vulnerabilities
- Test thoroughly before deploying

## Support

For issues with:
- **Vercel Platform**: Check Vercel documentation
- **Application Code**: Review GitHub repository
- **Build Issues**: Check build logs in Vercel dashboard

## Success Indicators

Your deployment is successful when:
- ✅ Application loads without errors
- ✅ Wallet connection works
- ✅ All pages are accessible
- ✅ Environment variables are loaded
- ✅ Build completes successfully
- ✅ Custom domain works (if configured)

## Next Steps

After successful deployment:
1. Test all functionality thoroughly
2. Set up monitoring and analytics
3. Configure custom domain if needed
4. Set up automated deployments
5. Document any custom configurations

---

**Note**: This deployment guide assumes you have the necessary permissions and access to both GitHub and Vercel accounts. Make sure to follow security best practices when handling environment variables and API keys.