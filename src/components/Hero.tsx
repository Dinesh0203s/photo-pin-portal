
import { Camera, Search, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-yellow-400 to-cyan-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full opacity-15 animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Capture
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-cyan-500 bg-clip-text text-transparent">
              Every Moment
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional photography services with AI-powered face recognition. 
            Find yourself in any event instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              <Search className="mr-2 h-5 w-5" />
              Find My Photos
            </Button>
            <Button variant="outline" className="border-2 border-pink-200 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg rounded-full">
              <Calendar className="mr-2 h-5 w-5" />
              View Events
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Photography</h3>
              <p className="text-gray-600">High-quality event photography with professional equipment and expertise.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Face Recognition</h3>
              <p className="text-gray-600">Find yourself in thousands of photos using our advanced AI technology.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant Download</h3>
              <p className="text-gray-600">Download your favorite photos instantly in high resolution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
