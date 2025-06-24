
import { Calendar, Lock, Users, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EventsPreview = () => {
  // Sample event data
  const events = [
    {
      id: 1,
      title: "Sarah & John's Wedding",
      date: "2024-06-15",
      location: "Grand Palace Hotel",
      photoCount: 250,
      isPrivate: true,
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Corporate Annual Gala",
      date: "2024-06-20",
      location: "Downtown Convention Center",
      photoCount: 180,
      isPrivate: false,
      thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Birthday Celebration",
      date: "2024-06-25",
      location: "Private Venue",
      photoCount: 120,
      isPrivate: true,
      thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Recent Events
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse through our latest photography events and find your memorable moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={event.thumbnail} 
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  {event.isPrivate ? (
                    <div className="bg-red-500 text-white px-2 py-1 rounded-full text-sm flex items-center">
                      <Lock className="h-3 w-3 mr-1" />
                      Private
                    </div>
                  ) : (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                      Public
                    </div>
                  )}
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
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Camera className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.photoCount} photos</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white">
                  View Event
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-2 border-pink-200 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg rounded-full">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
