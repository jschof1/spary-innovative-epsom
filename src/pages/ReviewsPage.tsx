import { Helmet } from "react-helmet-async";
import { Star, CheckCircle, Quote, MapPin, Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { reviewsData, reviewsStats } from "@/data/reviews";
import { siteSettings } from "@/data/siteSettings";
import { Button } from "@/components/ui/button";

export const ReviewsPage = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteSettings.businessName,
    "image": "https://sprayinnovative.co.uk/logo.png", // Replace with actual logo URL
    "@id": "https://sprayinnovative.co.uk",
    "url": "https://sprayinnovative.co.uk",
    "telephone": siteSettings.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "151 Ewell By-Pass",
      "addressLocality": "Epsom",
      "addressRegion": "Surrey",
      "postalCode": "KT17 2PX",
      "addressCountry": "GB"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviewsStats.averageRating,
      "reviewCount": reviewsStats.totalReviews,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviewsData.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.date,
      "reviewBody": review.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Customer Reviews & Testimonials | {siteSettings.businessName}</title>
        <meta name="description" content={`Read real customer reviews for ${siteSettings.businessName}. With a ${reviewsStats.averageRating}/5 rating from customers across Epsom and Surrey.`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-navy-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-header text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  What Our <span className="text-orange-500">Customers</span> Say
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  We take pride in delivering exceptional spray painting services across Surrey. 
                  Read why local homeowners trust us with their property transformations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-none font-bold">
                    Leave a Review
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-black hover:bg-orange-500 hover:text-white font-bold">
                    View Google Reviews
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Summary Section */}
        <section className="py-12 -mt-10 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="text-5xl font-bold text-navy-900 mb-2">{reviewsStats.averageRating}</div>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 font-medium">Average Rating</p>
                <p className="text-sm text-gray-400">Based on {reviewsStats.totalReviews} reviews</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <h3 className="text-lg font-bold text-navy-900 mb-4 text-center md:text-left">Rating Breakdown</h3>
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((rating) => {
                    const count = reviewsStats.breakdown[rating as keyof typeof reviewsStats.breakdown];
                    const percentage = (count / reviewsStats.totalReviews) * 100;
                    return (
                      <div key={rating} className="flex items-center gap-3">
                        <span className="text-sm font-bold w-4">{rating}</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <div className="flex-grow h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-orange-500 rounded-full" 
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400 w-8">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center"
              >
                <div className="flex gap-4 mb-6">
                  {reviewsStats.platforms.map((platform) => (
                    <div key={platform.name} className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-2">
                        {platform.name === 'Google' && (
                          <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                        )}
                        {platform.name === 'Trustpilot' && (
                          <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        )}
                      </div>
                      <span className="text-xs font-bold text-gray-700">{platform.rating}/5</span>
                      <span className="text-[10px] text-gray-400">{platform.count} reviews</span>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-100 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-bold text-green-800 uppercase tracking-wider">Verified Reviews</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reviews List Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                <h2 className="text-3xl font-bold text-navy-900">Recent Feedback</h2>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Showing the latest verified reviews</span>
                </div>
              </div>

              <div className="space-y-6">
                {reviewsData.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                      <Quote size={80} className="text-navy-900" />
                    </div>

                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-navy-800 to-navy-900 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                          {review.initial}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-navy-900">{review.author}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                            <span className="flex items-center gap-1"><MapPin size={14} className="text-orange-500" /> {review.location}</span>
                            <span className="flex items-center gap-1"><Calendar size={14} className="text-orange-500" /> {new Date(review.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex text-yellow-400 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-200'}`} />
                          ))}
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-600 uppercase tracking-tighter">
                          {review.platform} Review
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-bold mb-3">
                        {review.service}
                      </span>
                      <p className="text-gray-700 leading-relaxed italic text-lg">
                        "{review.text}"
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button size="lg" variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white font-bold h-14 px-10">
                  Show More Reviews
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-navy-900 rounded-3xl p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500 skew-x-12 translate-x-1/2 opacity-10" />
              
              <div className="max-w-3xl relative z-10 text-center mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">We're on all major platforms</h2>
                <p className="text-gray-300 text-lg mb-10">
                  Check out our profiles and read even more reviews from our customers in your area.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  <a href="#" className="bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 transition-colors flex flex-col items-center">
                    <svg className="w-8 h-8 text-blue-400 mb-3" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                    <span className="text-white font-bold">Google Maps</span>
                    <span className="text-xs text-gray-400 mt-1 flex items-center gap-1">View Profile <ExternalLink size={10} /></span>
                  </a>
                  <a href="#" className="bg-white/5 hover:bg-white/10 p-6 rounded-xl border border-white/10 transition-colors flex flex-col items-center">
                    <Star className="w-8 h-8 text-green-400 mb-3 fill-current" />
                    <span className="text-white font-bold">Trustpilot</span>
                    <span className="text-xs text-gray-400 mt-1 flex items-center gap-1">View Profile <ExternalLink size={10} /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
