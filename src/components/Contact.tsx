import React from 'react';
import { MessageCircle, Phone, Mail, Youtube, ExternalLink, Clock } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_NUMBER, EMAIL_ADDRESS, YOUTUBE_URL } from '../config';

export const Contact: React.FC = () => {
  // Format WhatsApp Link
  const cleanPhone = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const whatsappUrl = WHATSAPP_NUMBER.includes('ADD_NUMBER')
    ? '#'
    : `https://wa.me/${cleanPhone}?text=Hello%20Vinodh%20Sir%20Maths%20Classes,%20I%20need%20information%20about%20the%20App%20and%20Premium%20Plans.`;

  const phoneUrl = PHONE_NUMBER.includes('ADD_NUMBER') ? '#' : `tel:${PHONE_NUMBER}`;
  const emailUrl = EMAIL_ADDRESS.includes('ADD_EMAIL')
    ? '#'
    : `mailto:${EMAIL_ADDRESS}?subject=Inquiry%20-%20Vinodh%20Sir%20Maths%20Classes`;
  const youtubeUrl = YOUTUBE_URL.includes('ADD_YOUTUBE_LINK') ? '#' : YOUTUBE_URL;

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-bold text-blue-700 uppercase tracking-widest block mb-1">
            Student Help &amp; Support Desk
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Need Help?
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-500 leading-relaxed">
            For subscription, login, payment, or app-related assistance, contact Vinodh Sir Maths Classes Support.
          </p>
        </div>

        {/* 4 Support Action Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          
          {/* 1. WhatsApp Support */}
          <a
            id="contact-whatsapp-btn"
            href={whatsappUrl}
            target={whatsappUrl.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="bg-white hover:bg-slate-100/70 border border-slate-200 p-6 rounded-2xl shadow-xs transition-all duration-200 flex flex-col justify-between text-left"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 text-blue-700 flex items-center justify-center shadow-xs mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">
                Instant Chat
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5 uppercase tracking-tight">
                WhatsApp Support
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Chat with our counselor for instant activation &amp; course details.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
              <span>{WHATSAPP_NUMBER}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </a>

          {/* 2. Call Support */}
          <a
            id="contact-call-btn"
            href={phoneUrl}
            className="bg-white hover:bg-slate-100/70 border border-slate-200 p-6 rounded-2xl shadow-xs transition-all duration-200 flex flex-col justify-between text-left"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 text-blue-700 flex items-center justify-center shadow-xs mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">
                Direct Line
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5 uppercase tracking-tight">
                Call Support
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Speak directly with our academic desk (10:00 AM – 7:00 PM).
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
              <span>{PHONE_NUMBER}</span>
              <Phone className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </a>

          {/* 3. Email Support */}
          <a
            id="contact-email-btn"
            href={emailUrl}
            className="bg-white hover:bg-slate-100/70 border border-slate-200 p-6 rounded-2xl shadow-xs transition-all duration-200 flex flex-col justify-between text-left"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 text-blue-700 flex items-center justify-center shadow-xs mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">
                Official Email
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5 uppercase tracking-tight">
                Email Support
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Send queries regarding payments, invoice receipts, or technical issues.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
              <span className="truncate max-w-[140px]">{EMAIL_ADDRESS}</span>
              <Mail className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </a>

          {/* 4. YouTube Channel */}
          <a
            id="contact-youtube-btn"
            href={youtubeUrl}
            target={youtubeUrl.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="bg-white hover:bg-slate-100/70 border border-slate-200 p-6 rounded-2xl shadow-xs transition-all duration-200 flex flex-col justify-between text-left"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 text-blue-700 flex items-center justify-center shadow-xs mb-4">
                <Youtube className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">
                Free Lectures
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-0.5 uppercase tracking-tight">
                YouTube Channel
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                Watch free demo lectures, syllabus analysis, and notification alerts.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Subscribe &amp; Watch</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </a>

        </div>

        {/* Operating hours disclaimer */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>Support Hours: Monday – Saturday (9:00 AM to 8:00 PM IST)</span>
        </div>

      </div>
    </section>
  );
};
