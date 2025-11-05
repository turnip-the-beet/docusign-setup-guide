import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Shield, Mail, Smartphone, Lock, CheckSquare } from 'lucide-react';

const SetupGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Start Your Free Trial",
      icon: Mail,
      description: "Begin by signing up for DocuSign",
      details: [
        "Visit the DocuSign signup page",
        "Enter your email address (e.g., mmiddleton@xiliotx.com)",
        "Click 'Get Started' to begin",
        "No credit card required for trial"
      ],
      color: "bg-blue-500",
      image: "/images/screenshots/step-01-signup.png"
    },
    {
      title: "Enter Basic Information",
      icon: CheckSquare,
      description: "Provide your personal details",
      details: [
        "Enter your First Name and Last Name",
        "Provide a Phone Number for verification",
        "Click 'Next' to continue",
        "This information will be used for your account profile"
      ],
      color: "bg-green-500",
      image: "/images/screenshots/step-02-basic-info.png"
    },
    {
      title: "Verify Your Email",
      icon: Mail,
      description: "Confirm your email address",
      details: [
        "Check your email for a 6-digit verification code",
        "Enter the code in the verification field",
        "If you don't receive it, click 'Send my code again'",
        "You can also choose to use a different email address"
      ],
      color: "bg-purple-500",
      image: "/images/screenshots/step-03-email-verify.png"
    },
    {
      title: "Secure Your Account (SMS)",
      icon: Smartphone,
      description: "Add phone verification for security",
      details: [
        "Enter your phone number for identity verification",
        "DocuSign will send a one-time 6-digit code via SMS",
        "Message and data rates may apply",
        "This is required for account security"
      ],
      color: "bg-indigo-500",
      image: "/images/screenshots/step-04-sms-security.png"
    },
    {
      title: "Set Your Password",
      icon: Lock,
      description: "Create a secure password",
      details: [
        "Your login will be your email address",
        "Password must be at least 6 characters long",
        "Cannot contain the characters <, >, or spaces",
        "Click 'Next' when done"
      ],
      color: "bg-red-500",
      image: "/images/screenshots/step-05-password.png"
    },
    {
      title: "Welcome to DocuSign!",
      icon: CheckSquare,
      description: "Your account is now active",
      details: [
        "You'll land on your DocuSign Home page",
        "Account will show 14 days left in trial",
        "Access your profile from the top-right menu",
        "You can now send documents for signature"
      ],
      color: "bg-green-600",
      image: "/images/screenshots/step-06-welcome.png"
    },
    {
      title: "Enable Two-Step Verification",
      icon: Shield,
      description: "Add an extra layer of security",
      details: [
        "Go to your profile menu (top-right)",
        "Select 'My Preferences' > 'Privacy & Security'",
        "Toggle on 'Two-Step Verification'",
        "This requires a code, security key, or biometrics when logging in"
      ],
      color: "bg-orange-500",
      image: "/images/screenshots/step-07-profile-menu.png"
    },
    {
      title: "Choose Verification Method",
      icon: Smartphone,
      description: "Select how to receive codes",
      details: [
        "After logging in, you'll be prompted to verify",
        "Choose between Text Message or Phone Call",
        "The code will be sent to your registered number",
        "Click 'Send Code' to proceed"
      ],
      color: "bg-blue-600",
      image: "/images/screenshots/step-09-verification-method.png"
    },
    {
      title: "Enter SMS Verification Code",
      icon: Smartphone,
      description: "Complete the SMS verification",
      details: [
        "Enter the verification code sent to your phone",
        "Optional: Check 'Remember this device' for trusted devices",
        "Click 'Verify' to continue",
        "If code doesn't arrive, click 'Resend code'"
      ],
      color: "bg-purple-600",
      image: "/images/screenshots/step-10-sms-code.png"
    },
    {
      title: "Set Up Authenticator App",
      icon: Shield,
      description: "Configure app-based authentication",
      details: [
        "In Login Security settings, find 'Authenticator App'",
        "Click 'SET UP APP'",
        "Download a recommended authenticator app (Google Authenticator, Microsoft Authenticator, etc.)",
        "This provides a more secure alternative to SMS"
      ],
      color: "bg-teal-500",
      image: "/images/screenshots/step-11-login-security.png"
    },
    {
      title: "Scan QR Code",
      icon: Smartphone,
      description: "Link your authenticator app",
      details: [
        "Open your authenticator app on your phone",
        "Scan the QR code displayed on screen",
        "Can't scan? Click 'Try entering the key into your app'",
        "Click 'Next' after scanning"
      ],
      color: "bg-cyan-500",
      image: "/images/screenshots/step-14-qr-code.png"
    },
    {
      title: "Verify Authenticator Setup",
      icon: CheckSquare,
      description: "Test your authenticator app",
      details: [
        "Enter the 6-digit code from your authenticator app",
        "Codes refresh every 30 seconds",
        "Click 'Verify' to complete setup",
        "If incorrect, wait for the next code to generate"
      ],
      color: "bg-green-500",
      image: "/images/screenshots/step-15-verify-app.png"
    },
    {
      title: "Authenticator Enabled!",
      icon: Shield,
      description: "Your account is now secured",
      details: [
        "Authenticator app is now configured",
        "Status shows 'On your mobile device'",
        "You can delete this method if needed",
        "Use the authenticator app for future logins"
      ],
      color: "bg-emerald-600",
      image: "/images/screenshots/step-16-authenticator-enabled.png"
    },
    {
      title: "Login with Authenticator",
      icon: Smartphone,
      description: "Access your account securely",
      details: [
        "Enter your email and password as normal",
        "You'll be prompted for an authenticator code",
        "Open your authenticator app for the current code",
        "Optional: Check 'Remember this device' for trusted computers"
      ],
      color: "bg-blue-700",
      image: "/images/screenshots/step-17-login-authenticator.png"
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const IconComponent = steps[currentStep].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Xilio Logo - Top Left Corner */}
        <div className="mb-8">
          <div className="bg-white p-3 rounded-lg shadow-md inline-block">
            <img 
              src="/images/logos/xilio-logo.png" 
              alt="Xilio Logo" 
              className="h-12 w-auto"
            />
          </div>
        </div>

        {/* Header with DocuSign + Kivo Logos */}
        <div className="text-center mb-8">
          {/* Logo Section - DocuSign + Kivo */}
          <div className="flex items-center justify-center gap-8 mb-6">
            {/* DocuSign Logo */}
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <img 
                src="/images/logos/docusign-logo.png" 
                alt="DocuSign Logo" 
                className="h-16 w-auto"
              />
            </div>
            
            {/* Plus symbol between logos */}
            <div className="text-gray-400 text-3xl font-bold">+</div>
            
            {/* Kivo Logo */}
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <img 
                src="/images/logos/kivo-logo.png" 
                alt="Kivo Logo" 
                className="h-16 w-auto"
              />
            </div>
          </div>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
            <Shield className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            DocuSign Account Setup & MFA Guide
          </h1>
          <p className="text-gray-600">Complete walkthrough for account creation and security setup</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-start mb-6">
            <div className={`${steps[currentStep].color} p-4 rounded-xl mr-6`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {steps[currentStep].title}
              </h2>
              <p className="text-lg text-gray-600">
                {steps[currentStep].description}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
              <CheckSquare className="w-5 h-5 mr-2 text-green-600" />
              What to do:
            </h3>
            <ul className="space-y-3">
              {steps[currentStep].details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Screenshot Image */}
          {steps[currentStep].image && (
            <div className="mt-6 border-4 border-gray-200 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={steps[currentStep].image} 
                alt={`Screenshot for ${steps[currentStep].title}`}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          <div className="flex gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentStep
                    ? 'bg-indigo-600 w-8'
                    : index < currentStep
                    ? 'bg-indigo-300'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              currentStep === steps.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg'
            }`}
          >
            Next
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Quick Tips */}
        {currentStep === 6 && (
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-semibold text-amber-900 mb-2 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Security Tip
            </h3>
            <p className="text-amber-800">
              Two-step verification adds an important layer of security to your account. We strongly recommend enabling it to protect your documents and sensitive information.
            </p>
          </div>
        )}

        {currentStep === 13 && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="font-semibold text-green-900 mb-2 flex items-center">
              <CheckSquare className="w-5 h-5 mr-2" />
              Setup Complete!
            </h3>
            <p className="text-green-800">
              Your DocuSign account is now fully secured with multi-factor authentication. You're ready to send and sign documents securely!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SetupGuide;
