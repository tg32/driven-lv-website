export default function AccessibilityStatement() {
  return (
    <div className="container-max section-padding">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-section-title text-gray-900 mb-8">
          Accessibility Statement
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            DRIVEN LV is committed to ensuring digital accessibility for people with disabilities. 
            We are continually improving the user experience for everyone and applying the relevant 
            accessibility standards.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            Accessibility Standards
          </h2>
          <p>
            This website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.0 
            level AA standards. These guidelines explain how to make web content more accessible 
            to people with disabilities.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            Accessibility Features
          </h2>
          <ul className="space-y-3">
            <li>• Semantic HTML structure with proper heading hierarchy</li>
            <li>• Alternative text for all images and graphics</li>
            <li>• Color contrast ratios that meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)</li>
            <li>• Keyboard navigation support for all interactive elements</li>
            <li>• Clear focus indicators for keyboard users</li>
            <li>• Screen reader compatibility with proper ARIA labels and roles</li>
            <li>• Skip links for efficient navigation</li>
            <li>• Accessible form labels and error messages</li>
            <li>• Respect for user motion preferences (prefers-reduced-motion)</li>
            <li>• Text that can be resized up to 200% without horizontal scrolling</li>
            <li>• High contrast mode support</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            Known Issues
          </h2>
          <p>
            We are continuously working to improve accessibility. Currently, we are working on:
          </p>
          <ul className="space-y-2">
            <li>• Enhanced voice control compatibility</li>
            <li>• Additional language support options</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            Feedback and Contact
          </h2>
          <p>
            We welcome your feedback on the accessibility of this website. If you encounter 
            accessibility barriers or have suggestions for improvement, please contact us:
          </p>
          <div className="mt-6 space-y-2">
            <p><strong>Email:</strong> <a href="mailto:accessibility@drivenlv.com" className="text-primary-600 hover:text-primary-700">accessibility@drivenlv.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+17025551234" className="text-primary-600 hover:text-primary-700">(702) 555-1234</a></p>
            <p><strong>Address:</strong> 123 Accessible Way, Las Vegas, NV 89123</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">
            Technical Specifications
          </h2>
          <p>
            This website has been built using semantic HTML5, CSS3, and JavaScript with accessibility 
            in mind. It has been tested with:
          </p>
          <ul className="space-y-2">
            <li>• NVDA screen reader</li>
            <li>• JAWS screen reader</li>
            <li>• VoiceOver (macOS and iOS)</li>
            <li>• Keyboard-only navigation</li>
            <li>• Various zoom levels up to 200%</li>
          </ul>

          <p className="mt-8 text-sm text-gray-600">
            This statement was last updated on {new Date().toLocaleDateString()}.
          </p>
        </div>
      </div>
    </div>
  )
} 