
import { useState } from 'react';
import { Calendar, Lock, Users, Camera, Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const events = [
    {
      id: 1,
      title: "Sarah & John's Wedding",
      date: "2024-06-15",
      location: "Grand Palace Hotel",
      photoCount: 250,
      isPrivate: true,
      category: "Wedding",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "TechCorp Annual Gala",
      date: "2024-06-20",
      location: "Downtown Convention Center",
      photoCount: 180,
      isPrivate: false,
      category: "Corporate",
      thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Emma's Sweet 16",
      date: "2024-06-25",
      location: "Private Venue",
      photoCount: 120,
      isPrivate: true,
      category: "Birthday",
      thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Johnson Family Reunion",
      date: "2024-07-01",
      location: "Central Park",
      photoCount: 95,
      isPrivate: false,
      category: "Family",
      thumbnail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Corporate Team Building",
      date: "2024-07-05",
      location: "Riverside Resort",
      photoCount: 140,
      isPrivate: true,
      category: "Corporate",
      thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Music Festival 2024",
      date: "2024-07-10",
      location: "City Stadium",
      photoCount: 320,
      isPrivate: false,
      category: "Concert",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    }
  ];

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Event Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Browse through our captured moments and find your special memories
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-full border-2 border-pink-200 focus:border-pink-500"
              />
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={event.thumbnail} 
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      {event.isPrivate ? (
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                          <Lock className="h-3 w-3 mr-1" />
                          Private
                        </div>
                      ) : (
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                          Public
                        </div>
                      )}
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {event.category}
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-800">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Camera className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.photoCount} photos</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white">
                      Enter Event
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-16">
                <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
                <p className="text-gray-500">Try adjusting your search terms</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
