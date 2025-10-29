'use client';

import React, { useState } from 'react';
import Container from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Code, Layers } from 'lucide-react';
import { pricingConfig, pricingTiers } from '@/config/Pricing';

export default function PricingFlipCards() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const handleCardFlip = (cardId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const handleContact = (tierName: string) => {
    const message = `Hi! I'm interested in your ${tierName} development services. Could we discuss the project details?`;

    if (pricingConfig.contactMethod === 'whatsapp') {
      const whatsappUrl = `https://wa.me/${pricingConfig.contactInfo}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else if (pricingConfig.contactMethod === 'email') {
      const emailUrl = `mailto:${pricingConfig.contactInfo}?subject=${encodeURIComponent(`Interest in ${tierName} Services`)}&body=${encodeURIComponent(message)}`;
      window.open(emailUrl, '_blank');
    }
  };

  const iconMap = {
    Code,
    Layers
  };

  return (
    <Container id="services" className="mt-20">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700">
              <Zap className="w-6 h-6 text-slate-700 dark:text-slate-300" />
            </div>
            <h2 className="text-4xl font-light text-slate-900 dark:text-slate-50 tracking-tight">
              Frontend Development Services
            </h2>
          </div>

          {/* Minimal Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 px-6 py-2 text-sm font-medium text-slate-600 dark:text-slate-400">
              These are landing page services
            </div>
          </div>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Choose from the most popular frontend frameworks or get a custom solution.
            Click on any card to flip and see detailed information.
          </p>
        </div>

        {/* 2x2 Flip Cards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {pricingTiers.map((tier) => {
              const isFlipped = flippedCards.has(tier.id);
              const IconComponent = iconMap[tier.icon as keyof typeof iconMap];

              return (
                <div
                  key={tier.id}
                  className="group perspective-1000"
                  onClick={() => handleCardFlip(tier.id)}
                >
                  <div className={`relative w-full h-[500px] transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}>
                    {/* Front of Card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden">
                      <div className="relative h-full">
                        {/* Background Glow Effect */}
                        <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${tier.color} opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-700`} />

                        {/* Main Card */}
                        <div className={`relative p-8 rounded-3xl glass-premium shadow-2xl hover:shadow-3xl card-premium-hover transition-all duration-700 h-full flex flex-col overflow-hidden`}>

                          {/* Header Section */}
                          <div className="text-center space-y-4 mb-6">
                            {/* Icon with Animated Ring */}
                            <div className="relative mx-auto w-20 h-20">
                              <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tier.color} opacity-20 animate-spin-slow`} />
                              <div className={`relative w-full h-full rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center text-white shadow-2xl`}>
                                <IconComponent className="w-10 h-10" />
                              </div>
                            </div>

                            {/* Title and Description */}
                            <div className="space-y-2">
                              <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                                {tier.name}
                              </h3>
                              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                                {tier.description}
                              </p>
                            </div>
                          </div>

                          {/* Pricing Section */}
                          <div className="text-center mb-6">
                            <div className="inline-flex items-baseline gap-2 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 shadow-inner border border-slate-200/50 dark:border-slate-600/50">
                              <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                                {tier.price === 'Custom Pricing' ? tier.price : `${pricingConfig.currency}${tier.price}`}
                              </span>
                              <span className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                                {tier.period}
                              </span>
                            </div>
                          </div>

                          {/* Flip Hint */}
                          <div className="text-center mt-auto">
                            <div className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                              <span>Click to know more</span>
                              <div className="w-4 h-4 border-2 border-slate-400 rounded-full animate-bounce">
                                <div className="w-2 h-2 bg-slate-400 rounded-full m-0.5"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                      <div className="relative h-full">
                        {/* Background Glow Effect */}
                        <div className={`absolute -inset-2 rounded-3xl bg-gradient-to-r ${tier.color} opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-700`} />

                        {/* Main Card */}
                        <div className={`relative p-12 rounded-3xl glass-premium shadow-2xl hover:shadow-3xl card-premium-hover transition-all duration-700 h-full overflow-hidden`}>
                          {/* Header */}
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-4">
                              {tier.name}
                            </h3>
                            <div className="inline-flex items-baseline gap-2 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 shadow-inner border border-slate-200/50 dark:border-slate-600/50">
                              <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                                {tier.price === 'Custom Pricing' ? tier.price : `${pricingConfig.currency}${tier.price}`}
                              </span>
                              <span className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                                {tier.period}
                              </span>
                            </div>
                          </div>

                          {/* Features List */}
                          <div className="space-y-3 mb-8">
                            {tier.features.map((feature, index) => (
                              <div key={index} className="flex items-start gap-3 group/feature">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mt-0.5 shadow-lg">
                                  <Check className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed group-hover/feature:text-slate-900 dark:group-hover/feature:text-slate-100 transition-colors">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <div className="mt-auto">
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleContact(tier.name);
                              }}
                              className={`w-full btn-premium hover:shadow-xl text-white font-bold px-6 py-4 rounded-xl transition-all duration-500 hover:scale-105 relative overflow-hidden group/btn text-base focus-premium`}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                              <span className="relative z-10">Get Started</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-12 max-w-6xl mx-auto">
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 animate-spin-slow" />
                <div className="relative w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-xl">
                  <Zap className="w-8 h-8" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Fast Delivery</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Quick turnaround times without compromising quality. Get your project delivered on time, every time.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animate-spin-slow" />
                <div className="relative w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-xl">
                  <Star className="w-8 h-8" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Quality Assurance</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Thorough testing and code review for bug-free delivery. Your project will be production-ready.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 animate-spin-slow" />
                <div className="relative w-full h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-xl">
                  <Code className="w-8 h-8" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">Modern Tech</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Latest technologies and best practices implementation. Stay ahead with cutting-edge solutions.
              </p>
            </div>
          </div>

          {/* Custom Project CTA */}
          <div className="relative p-12 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-xl shadow-2xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Need Something Different?
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Have a unique frontend requirement? Let&apos;s discuss your specific needs and create a tailored solution with your preferred technology stack.
              </p>
              <Button
                onClick={() => handleContact('Custom Development')}
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-2xl text-white font-bold px-12 py-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl relative overflow-hidden group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">Discuss Custom Project</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
