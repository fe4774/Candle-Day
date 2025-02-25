import React from "react";
import { MessageCircle, ChevronRight } from "lucide-react";

interface PlanProps {
  duration: string;
  price: string;
  features: string[];
}

const Plan: React.FC<PlanProps> = ({ duration, price, features }) => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="text-white mb-6">
        <h3 className="text-2xl font-bold mb-2">{duration}</h3>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold">${price}</span>
          <span className="ml-2 opacity-75">/month</span>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-blue-100">
            <ChevronRight className="w-4 h-4 mr-2" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <p className="text-blue-200 text-sm mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem
        sed ligula cursus fermentum. Donec vel ligula eu nisl consequat sodales.
      </p>

      <div className="mt-auto">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
          Select Plan
        </button>
      </div>
    </div>
  );
};

function Classic() {
  const plans = [
    {
      duration: "1 Month",
      price: "15.36",
      features: [
        "Basic Analytics",
        "Market Insights",
        "Daily Reports",
        "Email Support",
      ],
    },
    {
      duration: "3 Months",
      price: "16.96",
      features: [
        "Advanced Analytics",
        "Premium Insights",
        "Real-time Alerts",
        "Priority Support",
      ],
    },
    {
      duration: "3 Months Plus",
      price: "15.36",
      features: [
        "Expert Analytics",
        "Custom Reports",
        "API Access",
        "24/7 Support",
      ],
    },
    {
      duration: "3 Months Pro",
      price: "16.16",
      features: [
        "Professional Tools",
        "Advanced Charts",
        "Portfolio Tracking",
        "Dedicated Manager",
      ],
    },
    {
      duration: "6 Months",
      price: "15.36",
      features: [
        "Enterprise Solutions",
        "Custom Integration",
        "Strategy Planning",
        "VIP Support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      <main className="max-w-7xl mx-auto px-4 py-12 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Investment Portfolio
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Choose the perfect plan for your investment strategy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{
                animationDelay: `${index * 600}ms`,
                opacity: 0,
                animation: `slide-up ${index * 0.6}s ease forwards`,
                animationFillMode: "forwards",
              }}
            >
              <Plan {...plan} />
            </div>
          ))}
        </div>
      </main>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default Classic;
