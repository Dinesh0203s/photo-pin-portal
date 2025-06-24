
import { useState } from 'react';
import { Camera, Search, Download, Upload, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FindMyFace = () => {
  const [isUsingCamera, setIsUsingCamera] = useState(false);
  const [passcode, setPasscode] = useState('');

  const steps = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Capture or Upload",
      description: "Take a selfie with your camera or upload a clear photo of yourself"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "AI Recognition",
      description: "Our advanced AI scans through all event photos to find your face"
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Download & Save",
      description: "View, download, or save your photos to your personal gallery"
    }
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Results in seconds with our optimized AI engine"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Privacy First",
      description: "Your photos are processed securely and deleted after use"
    },
    {
      icon: <Search className="h-6 w-6 text-blue-500" />,
      title: "High Accuracy",
      description: "Advanced facial recognition with 99%+ accuracy rate"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                FindMyFace
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionary AI-powered face recognition technology that instantly finds all your photos from any event
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto shadow-lg">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Interface */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white shadow-2xl border-0">
                <CardHeader className="text-center bg-gradient-to-r from-cyan-50 to-purple-50">
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Find Your Photos
                  </CardTitle>
                  <p className="text-gray-600">
                    Enter event passcode and take a selfie to get started
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Passcode Input */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Passcode
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter event passcode"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      className="text-center text-lg font-mono tracking-widest border-2 border-cyan-200 focus:border-cyan-500"
                    />
                  </div>

                  {/* Camera/Upload Section */}
                  <div className="bg-gradient-to-br from-gray-50 to-cyan-50 rounded-2xl p-8 mb-6">
                    <div className="text-center">
                      {!isUsingCamera ? (
                        <div>
                          <div className="w-40 h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                            <Camera className="h-16 w-16 text-gray-500" />
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button 
                              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3"
                              onClick={() => setIsUsingCamera(true)}
                            >
                              <Camera className="mr-2 h-5 w-5" />
                              Take Selfie
                            </Button>
                            <Button 
                              variant="outline" 
                              className="border-2 border-cyan-200 text-cyan-600 hover:bg-cyan-50 px-8 py-3"
                            >
                              <Upload className="mr-2 h-5 w-5" />
                              Upload Photo
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="w-40 h-40 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                            <span className="text-white text-sm">Camera Active</span>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3">
                              Capture Photo
                            </Button>
                            <Button 
                              variant="outline" 
                              onClick={() => setIsUsingCamera(false)}
                              className="border-2 border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-3"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Start Recognition Button */}
                  <div className="text-center">
                    <Button 
                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-12 py-4 text-lg rounded-full shadow-lg"
                      disabled={!passcode}
                    >
                      <Search className="mr-3 h-6 w-6" />
                      Find My Photos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Why Choose Our AI Technology?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FindMyFace;
