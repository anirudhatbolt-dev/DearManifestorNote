'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase-client';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      setErrorMessage('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }
        ]);

      if (error) throw error;

      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-contact-email`;
        await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit your message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-900 mb-4">Contact Us</h1>
          <p className="text-2xl text-amber-800 mb-8">We're Here to Support Your Manifestation Journey</p>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Have questions? Need support? Want to share your manifestation success story? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900">
                <Mail className="w-5 h-5" />
                Email Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:mail@dearmanifestor.com"
                className="text-xl font-semibold text-amber-700 hover:text-amber-900 transition-colors"
              >
                mail@dearmanifestor.com
              </a>
              <p className="text-amber-600 mt-2">
                We typically respond within 24 hours (often much faster).
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-900">Quick Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700">
                Our dedicated support team reads every message personally. Your manifestation journey matters to us, and we're committed to providing you with timely, thoughtful responses.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg mb-12">
          <CardHeader>
            <CardTitle className="text-amber-900">Contact Form</CardTitle>
            <CardDescription className="text-amber-600">
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-amber-900">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="mt-1 border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-amber-900">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="mt-1 border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-amber-900">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What can we help you with?"
                  className="mt-1 border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-amber-900">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your question or concern..."
                  rows={6}
                  className="mt-1 border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                  required
                />
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-700 bg-green-50 p-4 rounded-lg border border-green-200">
                  <CheckCircle2 className="w-5 h-5" />
                  <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-700 bg-red-50 p-4 rounded-lg border border-red-200">
                  <AlertCircle className="w-5 h-5" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-6 text-lg"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg mb-12">
          <CardHeader>
            <CardTitle className="text-amber-900">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-amber-900 mb-2">When will I receive my first note?</h3>
              <p className="text-amber-700">Your first note will be delivered on February 20th, 2026 at 11:11 AM in your timezone.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-amber-900 mb-2">Can I change my delivery time?</h3>
              <p className="text-amber-700">Currently, all notes are delivered at 11:11 AM to harness the Universe's most powerful manifestation energy.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-amber-900 mb-2">What if I don't receive my note?</h3>
              <p className="text-amber-700">Contact us immediately at mail@dearmanifestor.com and we'll resolve the issue within 24 hours.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-amber-900 mb-2">How do I cancel my subscription?</h3>
              <p className="text-amber-700">You can cancel anytime from your account dashboard or by emailing mail@dearmanifestor.com.</p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-lg border border-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">Our Commitment to You</h2>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Every inquiry matters to us. We're a small team that personally reads and responds to every message.
            Your manifestation journey is important to us, and we're here to support you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
}