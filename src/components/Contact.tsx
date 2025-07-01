
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // Simulate API call
      console.log('Form submitted:', data);
      
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success toast
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Get In <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to start your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="glass p-3 rounded-2xl group-hover:glow transition-all duration-300">
                  <Mail className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <div className="text-white/70 text-sm">Email</div>
                  <div className="text-white font-medium">hello@glazedflow.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="glass p-3 rounded-2xl group-hover:glow-blue transition-all duration-300">
                  <Phone className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <div className="text-white/70 text-sm">Phone</div>
                  <div className="text-white font-medium">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="glass p-3 rounded-2xl group-hover:glow-pink transition-all duration-300">
                  <MapPin className="w-6 h-6 text-pink-300" />
                </div>
                <div>
                  <div className="text-white/70 text-sm">Location</div>
                  <div className="text-white font-medium">San Francisco, CA</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
                  <button
                    key={social}
                    className="glass p-3 rounded-2xl hover:scale-110 transition-all duration-300 text-white/70 hover:text-white hover:glow"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/70">First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John"
                            {...field}
                            className="glass-strong rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 border-0"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/70">Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Doe"
                            {...field}
                            className="glass-strong rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 border-0"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                          className="glass-strong rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 border-0"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Project Inquiry"
                          {...field}
                          className="glass-strong rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 border-0"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white/70">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Tell us about your project..."
                          {...field}
                          className="glass-strong rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 resize-none border-0"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full glass-strong rounded-xl px-6 py-4 text-white font-semibold hover:scale-105 transition-all duration-300 glow flex items-center justify-center gap-2 group border-0 bg-transparent"
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
