
import { ChatBubbleLeftRightIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  return (
  
    <div>
      <section className="max-w-6xl mx-auto px-6 py-20">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 relative flex justify-center">
        <img 
          src="/images/frontend/hive-1.png" 
          alt="Collaboration" 
          className="w-full h-50 object-contain dark:brightness-90"
        />
      </div>
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
          Sync Your Team&apos;s 
          <span className="text-indigo-600 dark:text-indigo-400"> Productivity</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-100">
              HiveSync brings your team together in a modern workspace designed for seamless communication, file sharing, and project management.
        </p>
        <Link href="/sign-up">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors active:scale-95 transform transition-transform duration-150">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  </section>

  <section className="py-20 px-6 dark:bg-gray-900">
    <div className="max-w-6xl mx-auto space-y-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
        Why Choose HiveSync?
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
      {[
              { icon: ChatBubbleLeftRightIcon, title: "Real-time Chat", text: "Instant messaging with markdown support and file sharing" },
              { icon: UserGroupIcon, title: "Team Spaces", text: "Organized channels for different projects and topics" },
              { icon: ClockIcon, title: "Synchronized Work", text: "Collaborate in real-time with shared documents and tasks" },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-indigo-50 transition-colors">
                <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
      </div>

      <div className="bg-indigo-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center space-y-6">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Secure & Scalable Infrastructure
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Built with enterprise-grade security and reliability, HiveSync ensures your data stays protected while scaling with your team&apos;s needs.
        </p>
      </div>
    </div>
  </section>
      
    </div>
  );
}
