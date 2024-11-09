"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2A5A3B]/20 via-[#7DCFFF]/10 to-[#FF6B35]/10 -z-10" />
      
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-[5%] w-96 h-96 bg-[#7DCFFF]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-[5%] w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-[20%] w-72 h-72 bg-[#8B6B4A]/10 rounded-full blur-2xl" />
      </div>

      {/* Content container - adjusted padding */}
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Improved spacing */}
          <motion.div className="text-center lg:text-left space-y-8">
            <motion.div className="space-y-8">
              {/* Updated heading with gradient text */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Turn Every Adventure into a{" "}
                <span className="bg-gradient-to-r from-[#2A5A3B] to-[#FF6B35] text-transparent bg-clip-text">
                  Social Quest
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#2D3142]/80 max-w-xl mx-auto lg:mx-0">
                Join the first adventure platform where guides become influencers 
                and explorers earn real rewards. Available now on iOS and Android.
              </p>

              {/* Social proof section - adjusted spacing */}
              <div className="flex flex-col space-y-8">
                <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <Avatar key={i} className="border-2 border-white w-8 h-8">
                          <AvatarImage src={`/avatars/avatar${i}.png`} alt={`User ${i}`} />
                          <AvatarFallback>U{i}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-sm text-[#2D3142]/80">+10k Members</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#FFD700]">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-[#2D3142]/80">4.9/5 Rating</span>
                  </div>
                </div>

                {/* App store badges - adjusted spacing and alignment */}
                <div className="flex items-center gap-4 justify-center lg:justify-start mt-4 mb-6">
                  <Image
                    src="/badges/appstore.svg"
                    alt="Download on App Store"
                    width={140}
                    height={40}
                    className="h-[40px] w-auto"
                  />
                  <Image
                    src="/badges/googleplay.png"
                    alt="Get it on Google Play"
                    width={140}
                    height={40}
                    className="h-[40px] w-auto"
                  />
                </div>

                <motion.p className="text-sm text-[#2D3142]/70">
                  Join 10,000+ adventure seekers and guides already on the platform
                </motion.p>
              </div>

              {/* Buttons - enhanced styling */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#FF6B35] to-[#FF8B35] hover:opacity-90 text-white gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download App
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-[#2A5A3B] text-[#2A5A3B] hover:bg-[#2A5A3B] hover:text-white gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  Become a Guide
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Enhanced image container */}
          <motion.div className="relative">
            <Image
              src="/hero.jpg"
              alt="Guides Go App Interface"
              width={720}
              height={800}
              className="w-full h-auto object-contain rounded-2xl shadow-2xl"
              priority
            />

            {/* Floating elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 right-12 p-4 bg-white rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/avatars/sarahmiller.png" alt="Sarah Miller" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="font-medium text-sm text-[#2D3142]">Sarah Miller</p>
                  <p className="text-xs text-[#2D3142]/60">Mountain Guide</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -bottom-4 -left-4 p-4 bg-white rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/avatars/mikechen.png" alt="Mike Chen" />
                  <AvatarFallback>MC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="font-medium text-sm text-[#2D3142]">Mike Chen</p>
                  <p className="text-xs text-[#2D3142]/60">Adventure Seeker</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero; 