export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-serif font-light mb-12">Privacy Policy</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>1. Data Collection & Use</h2>
        <p>By using Lawal&apos;s Corner, you consent to the collection of:</p>
        <ul>
          <li>Visit data (IP address, timestamp, pages visited) for analytics</li>
          <li>Contact form submissions for direct communication</li>
          <li>Comment data for moderation and conversation</li>
        </ul>

        <h2>2. Email Notifications</h2>
        <p>We track blog visits and send summary notifications to the site owner via Resend integration. This helps maintain the platform and understand reader interests.</p>

        <h2>3. Your Consent</h2>
        <p>By submitting any form or comment, you explicitly consent to:</p>
        <ul>
          <li>Data processing for platform screening and improvement</li>
          <li>Use of your data for Lawal&apos;s Corner analytics</li>
          <li>Direct communication from the site owner</li>
        </ul>

        <h2>4. Data Retention</h2>
        <p>Analytics data retained for 90 days. Contact data retained until purpose fulfilled or you request deletion.</p>

        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-6 rounded-xl mt-8">
          <p className="font-semibold text-amber-900 dark:text-amber-100">
            This Privacy Policy is legally binding. Continued use constitutes acceptance.
          </p>
        </div>

        <p className="mt-12 text-sm opacity-75">
          Last updated: January 17, 2026
        </p>
      </div>
    </main>
  )
    }
