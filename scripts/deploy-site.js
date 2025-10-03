#!/usr/bin/env node

/**
 * Script to deploy a site to production
 * Usage: npm run deploy:site -- --id=my-site --env=production
 */

const { execSync } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

async function parseArgs() {
  const args = process.argv.slice(2);
  const config = {};

  for (const arg of args) {
    const [key, value] = arg.replace('--', '').split('=');
    config[key] = value;
  }

  return config;
}

async function loadSiteConfig(siteId) {
  const configPath = path.join(process.cwd(), 'configs', 'sites', `${siteId}.json`);
  
  try {
    const content = await fs.readFile(configPath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`❌ Failed to load configuration for site: ${siteId}`);
    console.error(error.message);
    process.exit(1);
  }
}

async function deploySite(config) {
  const { id, env = 'production' } = config;

  if (!id) {
    console.error('❌ Missing required argument: --id');
    console.log('Usage: npm run deploy:site -- --id=my-site --env=production');
    process.exit(1);
  }

  console.log(`🚀 Deploying site: ${id} to ${env}`);
  console.log('');

  // Load site configuration
  const siteConfig = await loadSiteConfig(id);
  console.log(`📋 Site: ${siteConfig.siteName}`);
  console.log(`🌐 Domain: ${siteConfig.domain}`);
  console.log('');

  // Set environment variables
  const envVars = {
    SITE_ID: id,
    NEXT_PUBLIC_SITE_ID: id,
    NODE_ENV: env,
  };

  const envString = Object.entries(envVars)
    .map(([key, value]) => `${key}=${value}`)
    .join(' ');

  try {
    // Build the application
    console.log('📦 Building application...');
    execSync(`${envString} pnpm build --filter=@platform/app`, {
      stdio: 'inherit',
      cwd: process.cwd(),
    });

    console.log('✅ Build completed successfully');
    console.log('');

    // Deploy based on environment
    if (env === 'production') {
      console.log('🌍 Deploying to production...');
      
      // Example deployment commands (adjust based on your hosting provider)
      // Vercel: execSync(`vercel --prod --env SITE_ID=${id}`, { stdio: 'inherit' });
      // AWS: execSync(`aws s3 sync .next/static s3://your-bucket/${id}/`, { stdio: 'inherit' });
      // Docker: execSync(`docker build -t ${id}:latest --build-arg SITE_ID=${id} .`, { stdio: 'inherit' });
      
      console.log('ℹ️  Configure your deployment command in scripts/deploy-site.js');
    } else {
      console.log(`🔧 Deploying to ${env}...`);
      console.log('ℹ️  Configure staging deployment in scripts/deploy-site.js');
    }

    console.log('');
    console.log('✅ Deployment completed!');
    console.log(`🔗 Site URL: https://${siteConfig.domain}`);
    
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    process.exit(1);
  }
}

parseArgs().then(deploySite).catch(console.error);
