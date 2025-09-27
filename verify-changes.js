// Verification script to check if changes are working
console.log('🔍 Verifying AdmirerX Website Changes...\n');

// Check if the new service cards are in the built files
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, 'build');
const staticDir = path.join(buildDir, 'static', 'js');

if (fs.existsSync(staticDir)) {
    const jsFiles = fs.readdirSync(staticDir).filter(file => file.endsWith('.js'));
    
    if (jsFiles.length > 0) {
        const mainJsFile = path.join(staticDir, jsFiles[0]);
        const content = fs.readFileSync(mainJsFile, 'utf8');
        
        console.log('✅ Build directory exists');
        console.log(`✅ Found ${jsFiles.length} JS file(s)`);
        
        // Check for new service cards
        const hasCustomWebsite = content.includes('Custom Website Development');
        const hasCustomBPO = content.includes('Custom BPO Solutions');
        const hasAnimations = content.includes('@keyframes float');
        const hasScrollToTop = content.includes('scrollToTop');
        
        console.log('\n📋 Change Verification:');
        console.log(`✅ Custom Website Development: ${hasCustomWebsite ? 'FOUND' : 'NOT FOUND'}`);
        console.log(`✅ Custom BPO Solutions: ${hasCustomBPO ? 'FOUND' : 'NOT FOUND'}`);
        console.log(`✅ Floating Animations: ${hasAnimations ? 'FOUND' : 'NOT FOUND'}`);
        console.log(`✅ Scroll to Top: ${hasScrollToTop ? 'FOUND' : 'NOT FOUND'}`);
        
        if (hasCustomWebsite && hasCustomBPO && hasAnimations && hasScrollToTop) {
            console.log('\n🎉 ALL CHANGES VERIFIED! The website should be working correctly.');
        } else {
            console.log('\n⚠️  Some changes are missing. Please check the build process.');
        }
    } else {
        console.log('❌ No JS files found in build directory');
    }
} else {
    console.log('❌ Build directory does not exist. Run "npm run build" first.');
}

console.log('\n🌐 Next Steps:');
console.log('1. Wait 2-3 minutes for Vercel to deploy the changes');
console.log('2. Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)');
console.log('3. Try opening the website in incognito/private mode');
console.log('4. Check your Vercel dashboard for deployment status');
console.log('5. Open test-changes.html in your browser to see the changes locally');
