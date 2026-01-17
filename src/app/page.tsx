"use client"

import Hero3DSection from "@/components/Hero3DSection"
import GymHeader from "@/components/GymHeader"
import FeaturesSection from "@/components/FeaturesSection"
import ClassesSection from "@/components/ClassesSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <GymHeader />
      <Hero3DSection />
      <FeaturesSection />
      <ClassesSection />
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6 leading-tight">
                Where Fitness Meets 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> Innovation</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Founded in 2018, NEXUS GYM transforms lives through cutting-edge fitness technology and personalized training. We're a community of driven individuals pushing boundaries together.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <div className="text-3xl font-bold text-red-400 mb-2">7</div>
                  <div className="text-gray-300 text-sm">Years of Excellence</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <div className="text-3xl font-bold text-red-400 mb-2">15K+</div>
                  <div className="text-gray-300 text-sm">Lives Transformed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Modern gym interior with premium equipment"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              Our Training 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> Programs</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Expertly designed programs for every fitness level and goal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "💪",
                title: "Strength Training",
                description: "Build muscle and power with progressive overload principles.",
                level: "All levels"
              },
              {
                icon: "🔥",
                title: "HIIT & Cardio",
                description: "High-intensity workouts for maximum calorie burn and endurance.",
                level: "All levels"
              },
              {
                icon: "🧘",
                title: "Yoga & Wellness",
                description: "Improve flexibility, balance, and mental clarity.",
                level: "All levels"
              }
            ].map((program, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:bg-gray-800/70 transition-all">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <span className="inline-block px-3 py-1 bg-red-600/20 text-red-400 text-xs rounded-full mb-3">{program.level}</span>
                <p className="text-gray-300 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Membership Plans</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Choose the perfect plan for your fitness goals.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Basic", 
                price: "₹2,400", 
                period: "/month",
                features: ["Gym Access", "Basic Equipment", "Locker Room", "Online Support"],
                popular: false
              },
              { 
                name: "Premium", 
                price: "₹4,900", 
                period: "/month",
                features: ["Everything in Basic", "Personal Training", "Group Classes", "Nutrition Guidance", "Premium Equipment"],
                popular: true
              },
              { 
                name: "Elite", 
                price: "₹8,200", 
                period: "/month",
                features: ["Everything in Premium", "24/7 Access", "Private Sessions", "Meal Planning", "Recovery Services"],
                popular: false
              }
            ].map((plan, index) => (
              <div key={plan.name} className={`relative p-8 rounded-2xl border transition-all hover:scale-105 ${
                plan.popular 
                  ? 'border-red-500 bg-gradient-to-b from-red-900/20 to-gray-800/50' 
                  : 'border-gray-700 bg-gray-800/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center justify-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-red-500 text-white hover:shadow-xl hover:shadow-red-500/40'
                      : 'border-2 border-gray-600 text-gray-300 hover:border-red-500 hover:text-white'
                  }`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">Gallery</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Our state-of-the-art facility.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Cardio Zone"
              },
              {
                src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Weight Training"
              },
              {
                src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Free Weights"
              },
              {
                src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Group Classes"
              }
            ].map((item, index) => (
              <div key={index} className="group relative aspect-square rounded-lg overflow-hidden bg-gray-800">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <h3 className="font-bold text-sm">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4">What Our Members Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Real transformations from real people.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Jessica Martinez",
                role: "Marketing Manager",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
                content: "Lost 25 pounds in 6 months! The trainers are amazing and the nutrition plan actually works.",
                rating: 5
              },
              {
                name: "David Thompson",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
                content: "Best gym investment I've made. Clean equipment, 24/7 access, and convenient app.",
                rating: 5
              },
              {
                name: "Amanda Foster",
                role: "Registered Nurse",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
                content: "Perfect for my crazy shifts. The yoga classes help me decompress after long days.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}>★</span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-black text-white mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">Ready to start your transformation? Get in touch.</p>
          <form className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="text-sm font-semibold text-gray-300">Name</label>
              <input className="border border-gray-600 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="text-sm font-semibold text-gray-300">Email</label>
              <input type="email" className="border border-gray-600 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="you@example.com" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-semibold text-gray-300">Message</label>
              <textarea rows={4} className="border border-gray-600 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" placeholder="Tell us more..." />
            </div>
            <div className="md:col-span-2">
              <button type="button" className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all">Send Message</button>
            </div>
          </form>
        </div>
      </section>
      <CTASection />
      <Footer />
    </div>
  )
}