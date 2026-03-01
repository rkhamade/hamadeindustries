import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

export const SchedulePage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    notes: '',
  });
  const [scheduled, setScheduled] = useState(false);

  const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setScheduled(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (scheduled) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-6">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-500" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Call Scheduled!</h1>
          <p className="text-xl text-zinc-400 mb-8">
            We've sent a confirmation email to {formData.email} with the meeting details.
          </p>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 inline-block">
            <p className="text-sm text-zinc-500 mb-2">Your Discovery Call</p>
            <p className="font-semibold text-lg">{selectedDate}</p>
            <p className="text-zinc-400">{selectedTime}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Calendar className="text-white" size={28} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Schedule a Call</h1>
          <p className="text-xl text-zinc-400">
            Book a 30-minute discovery call to discuss your infrastructure needs
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3 flex items-center gap-2">
                  <Calendar size={16} />
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 flex items-center gap-2">
                  <Clock size={16} />
                  Select Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-3 rounded-lg font-medium transition-all ${
                        selectedTime === time
                          ? 'bg-white text-black'
                          : 'bg-zinc-800 border border-zinc-700 hover:border-zinc-600'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-800 pt-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
                      placeholder="Company Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium mb-2">
                      Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className="w-full px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
