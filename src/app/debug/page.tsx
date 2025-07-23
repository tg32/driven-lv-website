export default function DebugPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Debug Page</h1>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Instagram Section Test</h2>
          <div className="border-2 border-dashed border-gray-300 p-4 rounded">
            <p className="text-gray-600">Instagram section should appear below:</p>
          </div>
        </div>
        
        {/* Instagram Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Follow Our Journey</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-300">
                <div className="aspect-[3/4] relative bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-600">Instagram Post 1</p>
                </div>
                <div className="p-4">
                  <div className="text-gray-700 text-sm mb-1">Sample caption text here...</div>
                  <p className="text-gray-500 text-xs">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 