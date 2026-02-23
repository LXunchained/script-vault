export const products = [
    {
        id: "kdp-automation-suite",
        title: "KDP Automation Suite",
        shortDescription: "The ultimate toolkit for Kindle Direct Publishing.",
        description: "Stop manually uploading books one by one. The KDP Automation Suite is a battle-tested Python solution that handles the entire publishing workflow for you. From batch uploading metadata to tracking your portfolio's status, this suite gives you back hours of your life every single day.",
        price: 49.99,
        features: [
            "Batch Upload Unlimited Books via CSV",
            "Real-time Dashboard & Status Checker",
            "Automatic Keyword & Category Optimization",
            "Headless Browser Tech for Background Processing",
            "Detailed Error Logging & Reporting"
        ],
        specs: {
            language: "Python 3.10+",
            os: "Windows 10/11, macOS, Linux",
            requirements: "Chrome Browser, Google Account"
        },
        faq: [
            { q: "Is this safe for my KDP account?", a: "Yes. The script mimics human behavior with randomized delays to stay within Amazon's rate limits." },
            { q: "Do I need to know Python?", a: "Basic knowledge helps, but we include a full setup guide and 'run.bat' files for one-click execution." }
        ],
        badge: "Best Seller",
        icon: "BookOpen"
    },
    {
        id: "social-media-bot",
        title: "Viral Social Bot",
        shortDescription: "Dominate productivity with automated content distribution.",
        description: "Consistency is key to viral growth, but posting manually to TikTok, Shorts, and Reels is a full-time job. This bot automates the entire distribution pipeline. Just drop your video files in a folder, configure your captions, and watch your channels grow on autopilot.",
        price: 39.99,
        features: [
            "Multi-platform Uploading (TikTok, YT Shorts, Reels)",
            "Schedule & Queue Management",
            "Auto-Tag Generation based on Content",
            "Anti-Detection Browser Fingerprinting",
            "Engagement Analytics Dashboard"
        ],
        specs: {
            language: "Python 3.10+",
            os: "Windows 10/11",
            requirements: "FFmpeg, Selenium WebDriver"
        },
        faq: [
            { q: "Can I schedule posts?", a: "Absolutely. You can set specific times or intervals for uploads." },
            { q: "Does it handle cookies?", a: "Yes, it saves your login sessions so you don't need to sign in every time." }
        ],
        badge: "New",
        icon: "Share2"
    },
    {
        id: "google-ecosystem-manager",
        title: "Google Ecosystem Manager",
        shortDescription: "Take control of your Google Play Books and Tasks.",
        description: "Managing a large library on Google Play Books can be messy. Ghost entries, sync errors, and metadata mismatches are common. This tool cleans your Partner Center, syncs your publishing roadmap with Google Tasks, and ensures your catalog is pristine.",
        price: 29.99,
        features: [
            "Ghost Entry Cleanup & Database Repair",
            "Bi-directional Sync with Google Tasks",
            "Partner Center API Integration",
            "Automated Maintenance Schedules",
            "Detailed Audit Logs"
        ],
        specs: {
            language: "Python 3.10+",
            os: "Windows 10/11, macOS",
            requirements: "Google Cloud Console Project Credentials"
        },
        faq: [
            { q: "How do I get API keys?", a: "We provide a step-by-step PDF guide to setting up your Google Cloud project." },
            { q: "Does it delete my live books?", a: "Never. It only targets 'draft' or 'error' status entries that match your cleanup criteria." }
        ],
        badge: "Essential",
        icon: "Command"
    }
];
