import React, { useState } from 'react';
import { FAQ_DATA } from '../config';
import { ChevronDown, Search, MessageSquare } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1, 2]); // Open first 2 by default
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (id: number) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFAQs = FAQ_DATA.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query)
    );
  });

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest block mb-1">
            Questions &amp; Answers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-500 leading-relaxed">
            Find everything you need to know about the APK download, subscription plans, and syllabus coverage.
          </p>

          {/* FAQ Search Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., APK safety, mentorship, PDF)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white shadow-xs transition-all"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <p className="text-slate-500 font-medium">No questions matched your search query "{searchQuery}".</p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-2 text-blue-700 text-sm font-semibold hover:underline"
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredFAQs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? 'bg-slate-50/70 border-slate-300 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                      {faq.id}. {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 border ${
                        isOpen ? 'bg-blue-900 border-blue-900 text-white rotate-180' : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                      <p className="pt-2">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support helper box */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-slate-900">Have a specific question not listed here?</h4>
            <p className="text-xs text-slate-500">Our student support desk is available to assist you directly.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-xs transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>Contact Support Desk</span>
          </a>
        </div>

      </div>
    </section>
  );
};
