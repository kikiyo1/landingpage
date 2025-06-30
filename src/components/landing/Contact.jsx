
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: <Phone className="w-8 h-8 text-white" />,
    title: "Telepon",
    lines: ["+62 812-3456-7890", "+62 821-9876-5432"]
  },
  {
    icon: <Mail className="w-8 h-8 text-white" />,
    title: "Email",
    lines: ["info@metarakhadesolution.com", "sales@metarakhadesolution.com"]
  },
  {
    icon: <MapPin className="w-8 h-8 text-white" />,
    title: "Alamat",
    lines: ["Jl. Industri Raya No. 123", "Jakarta Timur, 13920"]
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Hubungi Kami</h2>
          <p className="text-xl text-green-200 max-w-2xl mx-auto">
            Siap membantu Anda menemukan solusi rak minimarket yang tepat
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              {item.lines.map((line, i) => (
                <p key={i} className="text-green-200">{line}</p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
