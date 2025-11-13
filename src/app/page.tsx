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
      <section id="about" className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          {/* Main About Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                Where Fitness Meets 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> Innovation</span>
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-6">
                Founded in 2018, NEXUS GYM has been transforming lives through cutting-edge fitness technology and personalized training experiences. We're not just a gym – we're a community of driven individuals pushing boundaries together.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our 25,000 sq ft facility combines state-of-the-art equipment with expert coaching to create an environment where every member can achieve their personal best. From beginners taking their first steps to elite athletes breaking records, we provide the tools and support for every fitness journey.
              </p>
              <div className="grid grid-cols-2 gap-6">
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
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-red-600 to-orange-500 p-6 rounded-xl text-white">
                <div className="text-2xl font-bold">Award Winning</div>
                <div className="text-sm opacity-90">Best Gym 2024</div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-black text-white mb-6">Our Mission & Values</h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                We believe fitness is a journey, not a destination. Our mission is to empower every individual with the tools, knowledge, and community support needed to achieve lasting transformation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "💪",
                  title: "Excellence",
                  description: "We maintain the highest standards in equipment, training, and member experience."
                },
                {
                  icon: "🤝",
                  title: "Community",
                  description: "Building supportive relationships that motivate and inspire continued growth."
                },
                {
                  icon: "🚀",
                  title: "Innovation",
                  description: "Constantly evolving with the latest fitness technology and training methodologies."
                },
                {
                  icon: "🎯",
                  title: "Results",
                  description: "Data-driven approaches that deliver measurable progress toward your goals."
                },
                {
                  icon: "❤️",
                  title: "Wellness",
                  description: "Holistic approach to health encompassing physical, mental, and emotional well-being."
                },
                {
                  icon: "🏆",
                  title: "Achievement",
                  description: "Celebrating every victory, from first workouts to personal records and beyond."
                }
              ].map((value, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:bg-gray-800/70 transition-all">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-black text-white mb-6">Meet Our Expert Team</h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our certified trainers and wellness experts are passionate about helping you succeed. Each brings years of experience and specialized knowledge to guide your fitness journey.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  name: "Marcus Williams",
                  role: "Head Trainer & Founder",
                  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                  credentials: "NASM-CPT, 15+ years"
                },
                {
                  name: "Sarah Chen",
                  role: "Yoga & Wellness Coach",
                  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                  credentials: "RYT-500, Nutrition Specialist"
                },
                {
                  name: "David Rodriguez",
                  role: "Strength & Conditioning",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                  credentials: "CSCS, Sports Performance"
                },
                {
                  name: "Emma Thompson",
                  role: "Group Fitness Director",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
                  credentials: "ACE-CPT, HIIT Specialist"
                }
              ].map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-red-400 text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-400 text-xs">{member.credentials}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Facilities & Equipment */}
          <div className="text-center">
            <h3 className="text-4xl font-black text-white mb-8">World-Class Facilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "25,000", unit: "sq ft", label: "Training Space" },
                { number: "200+", unit: "pieces", label: "Premium Equipment" },
                { number: "24/7", unit: "access", label: "Always Open" },
                { number: "5", unit: "specialized", label: "Training Zones" }
              ].map((stat, index) => (
                <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700">
                  <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
                  <div className="text-red-400 font-semibold text-sm mb-2">{stat.unit}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6">
              Our Training 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> Programs</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Discover expertly designed programs that cater to every fitness level and goal. From beginner-friendly classes to elite performance training, we have the perfect program to accelerate your transformation.
            </p>
          </div>

          {/* Featured Programs Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Strength & Powerlifting",
                subtitle: "Build Raw Power & Muscle",
                image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                duration: "12-16 weeks",
                level: "Intermediate to Advanced",
                description: "Systematic strength development using progressive overload principles. Master the big three lifts: squat, bench press, and deadlift while building overall muscle mass and functional strength.",
                features: ["Personalized rep schemes", "Competition prep available", "Form analysis & correction", "Nutrition guidance included"],
                schedule: "Mon/Wed/Fri - 6 AM, 12 PM, 6 PM",
                price: "Included in Premium & Elite"
              },
              {
                title: "HIIT & Metabolic Conditioning",
                subtitle: "Torch Fat & Boost Endurance",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                duration: "4-6 weeks cycles",
                level: "All levels welcome",
                description: "High-intensity interval training that maximizes calorie burn in minimal time. Combining cardio and strength movements for complete metabolic conditioning and fat loss.",
                features: ["30-45 minute sessions", "Scalable intensity levels", "Real-time heart rate monitoring", "Post-workout nutrition tips"],
                schedule: "Daily - 7 AM, 12 PM, 5 PM, 7 PM",
                price: "All membership levels"
              }
            ].map((program, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden bg-gray-800/50 border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">{program.level}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{program.title}</h3>
                    <p className="text-red-400 font-semibold">{program.subtitle}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">{program.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Duration</div>
                      <div className="text-white font-semibold">{program.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Schedule</div>
                      <div className="text-white font-semibold text-sm">{program.schedule}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-3">What's Included</div>
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Access</div>
                      <div className="text-red-400 font-semibold">{program.price}</div>
                    </div>
                    <button className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-red-500/30 transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Programs Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🧘‍♀️",
                title: "Yoga & Mindfulness",
                description: "Improve flexibility, balance, and mental clarity through various yoga styles from gentle Hatha to dynamic Vinyasa.",
                duration: "60-90 min classes",
                level: "All levels",
                highlight: "Mind-body connection"
              },
              {
                icon: "🏊‍♂️",
                title: "Aqua Fitness",
                description: "Low-impact, high-resistance water workouts perfect for recovery, injury prevention, and joint-friendly cardio.",
                duration: "45 min classes",
                level: "All levels",
                highlight: "Joint-friendly"
              },
              {
                icon: "🥊",
                title: "Boxing & Martial Arts",
                description: "Learn proper technique while getting an intense full-body workout. Includes heavy bag work, pad training, and conditioning.",
                duration: "60 min classes",
                level: "Beginner to Advanced",
                highlight: "Self-defense skills"
              },
              {
                icon: "🏃‍♂️",
                title: "Running Club",
                description: "Join our community of runners for group training sessions, technique improvement, and race preparation.",
                duration: "45-60 min sessions",
                level: "All paces welcome",
                highlight: "Community focused"
              },
              {
                icon: "🎯",
                title: "Functional Training",
                description: "Real-world movement patterns that improve daily activities and athletic performance through varied, dynamic exercises.",
                duration: "50 min classes",
                level: "Intermediate",
                highlight: "Life performance"
              },
              {
                icon: "👥",
                title: "Personal Training",
                description: "One-on-one coaching tailored to your specific goals, limitations, and preferences with our certified trainers.",
                duration: "30-60 min sessions",
                level: "Fully customized",
                highlight: "Individual attention"
              }
            ].map((program, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:bg-gray-800/70 hover:border-red-500/30 transition-all group">
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-red-600/20 text-red-400 text-xs rounded-full">{program.level}</span>
                  <span className="text-gray-500 text-xs">•</span>
                  <span className="text-gray-400 text-xs">{program.duration}</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{program.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-red-400 font-semibold">{program.highlight}</div>
                  <button className="text-white group-hover:text-red-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-4">Not Sure Which Program is Right for You?</h3>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Our fitness experts will assess your goals, fitness level, and preferences to recommend the perfect program combination for your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg hover:shadow-xl hover:shadow-red-500/40 transition-all">
                  Schedule Free Consultation
                </button>
                <button className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-bold rounded-lg hover:border-red-500 hover:text-white transition-all">
                  View Class Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-6">Membership Plans</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Choose the perfect plan to achieve your fitness goals with flexible options designed for every lifestyle.</p>
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
      <section id="gallery" className="py-32 bg-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-6">Gallery</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Take a virtual tour of our state-of-the-art facility and see what makes us different.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Cardio Zone",
                description: "State-of-the-art cardio equipment"
              },
              {
                src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Weight Training",
                description: "Professional strength equipment"
              },
              {
                src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Free Weights Area",
                description: "Complete dumbbell collection"
              },
              {
                src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Functional Training",
                description: "Versatile workout space"
              },
              {
                src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Group Classes",
                description: "Spacious studio for group workouts"
              },
              {
                src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                title: "Locker Rooms",
                description: "Premium facilities & amenities"
              }
            ].map((item, index) => (
              <div key={index} className="group relative aspect-square rounded-xl overflow-hidden bg-gray-800 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-6">What Our Members Say</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Real stories from real people who have transformed their lives with us.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jessica Martinez",
                role: "Marketing Manager",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
                content: "I joined 6 months ago and lost 25 pounds! The personal trainers here really know their stuff. Marcus helped me with a custom nutrition plan that actually worked. The early morning classes fit perfectly with my work schedule.",
                rating: 5,
                date: "3 weeks ago",
                verified: true
              },
              {
                name: "David Thompson",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
                content: "Best gym investment I've made. The equipment is always clean and well-maintained. Love the 24/7 access - I often work out at 2 AM! The mobile app for booking classes is super convenient too.",
                rating: 5,
                date: "1 month ago",
                verified: true
              },
              {
                name: "Amanda Foster",
                role: "Registered Nurse",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
                content: "As a healthcare worker with crazy shifts, I need a gym that's flexible. This place delivers! The yoga classes help me decompress after long shifts. Only wish the parking was a bit easier during peak hours.",
                rating: 4,
                date: "2 weeks ago",
                verified: true
              },
              {
                name: "Carlos Rodriguez",
                role: "Construction Foreman",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
                content: "Been lifting for 20 years, and this is hands down the best gym I've been to. The squat racks are never all taken, plates are organized, and the staff actually cares. My deadlift PR went from 405 to 485!",
                rating: 5,
                date: "5 days ago",
                verified: true
              },
              {
                name: "Rachel Kim",
                role: "College Student",
                image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
                content: "Student discount made this affordable for me! The group fitness classes are amazing - especially the HIIT sessions with Sarah. Made so many friends here. The only downside is it gets crowded around 6 PM.",
                rating: 4,
                date: "1 week ago",
                verified: true
              },
              {
                name: "Michael Johnson",
                role: "Retired Teacher",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
                content: "At 68, I thought my fitness days were over. The senior-friendly programs here proved me wrong! The pool classes are perfect for my arthritis, and the staff is incredibly patient and encouraging.",
                rating: 5,
                date: "4 days ago",
                verified: true
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all">
                <div className="flex items-start mb-4">
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white">{testimonial.name}</h3>
                      <span className="text-xs text-gray-500">{testimonial.date}</span>
                    </div>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}>★</span>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">({testimonial.rating}/5)</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">"{testimonial.content}"</p>
                <div className="mt-4 flex items-center text-xs text-gray-500">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified Member
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-t from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-black text-white mb-6">Contact Us</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">Have questions or want to start your transformation? Reach out below. Replace with an actual form integration soon.</p>
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