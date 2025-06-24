
import { useState } from 'react';
import { Calendar, Clock, MapPin, Camera, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    location: '',
    duration: '',
    guestCount: '',
    message: ''
  });

  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Family Portrait',
    'Baby & Maternity',
    'Graduation',
    'Concert & Show',
    'Other'
  ];

  const packages = [
    {
      name: "Basic",
      price: "$299",
      duration: "2 hours",
      photos: "50+ edited photos",
      features: ["Professional photographer", "Online gallery", "Basic editing", "24/7 support"]
    },
    {
      name: "Standard",
      price: "$499",
      duration: "4 hours",
      photos: "100+ edited photos",
      features: ["Professional photographer", "Online gallery", "Advanced editing", "FindMyFace included", "24/7 support"],
      popular: true
    },
    {
      name: "Premium",
      price: "$799",
      duration: "8 hours",
      photos: "200+ edited photos",
      features: ["Professional photographer", "Online gallery", "Premium editing", "FindMyFace included", "Same-day preview", "USB delivery", "24/7 support"]
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Book Your Session
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's capture your special moments together. Choose your package and schedule your photography session
            </p>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Photography Packages
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative overflow-hidden ${pkg.popular ? 'ring-2 ring-pink-500 shadow-2xl scale-105' : 'shadow-lg'} hover:shadow-xl transition-all`}>
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className={`text-center ${pkg.popular ? 'pt-12' : 'pt-6'}`}>
                    <CardTitle className="text-2xl font-bold text-gray-800">{pkg.name}</CardTitle>
                    <div className="text-4xl font-bold text-pink-600 mb-2">{pkg.price}</div>
                    <p className="text-gray-600">{pkg.duration} • {pkg.photos}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
                      Select Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-2xl border-0">
                <CardHeader className="text-center bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardTitle className="text-3xl font-bold text-gray-800">
                    Book Your Photography Session
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="inline h-4 w-4 mr-1" />
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="inline h-4 w-4 mr-1" />
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="inline h-4 w-4 mr-1" />
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Camera className="inline h-4 w-4 mr-1" />
                          Event Type *
                        </label>
                        <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            {eventTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Calendar className="inline h-4 w-4 mr-1" />
                          Event Date *
                        </label>
                        <Input
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) => handleInputChange('eventDate', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Clock className="inline h-4 w-4 mr-1" />
                          Event Time *
                        </label>
                        <Input
                          type="time"
                          value={formData.eventTime}
                          onChange={(e) => handleInputChange('eventTime', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Duration
                        </label>
                        <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2-hours">2 hours</SelectItem>
                            <SelectItem value="4-hours">4 hours</SelectItem>
                            <SelectItem value="6-hours">6 hours</SelectItem>
                            <SelectItem value="8-hours">8+ hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <MapPin className="inline h-4 w-4 mr-1" />
                          Event Location *
                        </label>
                        <Input
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          placeholder="Event venue or address"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Guest Count (approx.)
                        </label>
                        <Select value={formData.guestCount} onValueChange={(value) => handleInputChange('guestCount', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Number of guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 people</SelectItem>
                            <SelectItem value="11-25">11-25 people</SelectItem>
                            <SelectItem value="26-50">26-50 people</SelectItem>
                            <SelectItem value="51-100">51-100 people</SelectItem>
                            <SelectItem value="100+">100+ people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MessageSquare className="inline h-4 w-4 mr-1" />
                        Additional Details
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us more about your event, special requests, or any questions you have..."
                        rows={4}
                      />
                    </div>

                    <div className="text-center pt-6">
                      <Button 
                        type="submit"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-4 text-lg rounded-full shadow-lg"
                      >
                        Submit Booking Request
                      </Button>
                      <p className="text-sm text-gray-500 mt-4">
                        We'll contact you within 24 hours to confirm your booking
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
