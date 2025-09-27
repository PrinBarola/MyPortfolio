"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface LoginModalProps {
  onClose: () => void
  onLogin: () => void
}

export function LoginModal({ onClose, onLogin }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true)

  useEffect(() => {
    // Load jQuery and jQuery Validation
    const loadScripts = async () => {
      // Load jQuery
      const jqueryScript = document.createElement("script")
      jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js"
      jqueryScript.onload = () => {
        // Load jQuery Validation after jQuery is loaded
        const validationScript = document.createElement("script")
        validationScript.src = "https://cdn.jsdelivr.net/npm/jquery-validation@1.19.5/dist/jquery.validate.min.js"
        validationScript.onload = () => {
          initializeValidation()
        }
        document.head.appendChild(validationScript)
      }
      document.head.appendChild(jqueryScript)
    }

    loadScripts()
  }, [])

  const initializeValidation = () => {
    // Initialize jQuery Validation for Login Form
    ;(window as any)
      .$("#loginForm")
      .validate({
        rules: {
          loginEmail: {
            required: true,
            email: true,
          },
          loginPassword: {
            required: true,
            minlength: 6,
          },
        },
        messages: {
          loginEmail: {
            required: "Email is required",
            email: "Please enter a valid email address",
          },
          loginPassword: {
            required: "Password is required",
            minlength: "Password must be at least 6 characters long",
          },
        },
        submitHandler: (form) => {
          handleLogin()
          return false
        },
      })

    // Initialize jQuery Validation for Registration Form
    ;(window as any).$("#registerForm").validate({
      rules: {
        fullName: {
          required: true,
          minlength: 2,
        },
        registerEmail: {
          required: true,
          email: true,
        },
        registerPassword: {
          required: true,
          minlength: 6,
        },
        confirmPassword: {
          required: true,
          minlength: 6,
          equalTo: "#registerPassword",
        },
      },
      messages: {
        fullName: {
          required: "Full name is required",
          minlength: "Name must be at least 2 characters long",
        },
        registerEmail: {
          required: "Email is required",
          email: "Please enter a valid email address",
        },
        registerPassword: {
          required: "Password is required",
          minlength: "Password must be at least 6 characters long",
        },
        confirmPassword: {
          required: "Please confirm your password",
          minlength: "Password must be at least 6 characters long",
          equalTo: "Passwords do not match",
        },
      },
      submitHandler: (form) => {
        handleRegister()
        return false
      },
    })
  }

  const handleLogin = () => {
    // Static authentication - accept any valid email/password combination
    const email = (document.getElementById("loginEmail") as HTMLInputElement)?.value
    const password = (document.getElementById("loginPassword") as HTMLInputElement)?.value

    if (email && password && password.length >= 6) {
      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("userEmail", email)
      onLogin()
    }
  }

  const handleRegister = () => {
    // Static registration - just store user data and redirect to login
    const fullName = (document.getElementById("fullName") as HTMLInputElement)?.value
    const email = (document.getElementById("registerEmail") as HTMLInputElement)?.value
    const password = (document.getElementById("registerPassword") as HTMLInputElement)?.value

    if (fullName && email && password) {
      localStorage.setItem("registeredUser", JSON.stringify({ fullName, email }))
      alert("Registration successful! Please login with your credentials.")
      setIsLogin(true)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-md mx-4">
        <div className="bg-gray-900 rounded-xl shadow-2xl border border-primary/20 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-primary">Portfolio Access</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            {/* Toggle Buttons */}
            <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  isLogin ? "bg-primary text-black" : "text-gray-300 hover:text-white"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  !isLogin ? "bg-primary text-black" : "text-gray-300 hover:text-white"
                }`}
              >
                Register
              </button>
            </div>

            {/* Login Form */}
            {isLogin ? (
              <form id="loginForm" className="space-y-4">
                <div>
                  <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="loginEmail"
                    name="loginEmail"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-black py-2 px-4 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Access Portfolio
                </button>
              </form>
            ) : (
              /* Registration Form */
              <form id="registerForm" className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="registerEmail" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="registerEmail"
                    name="registerEmail"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="registerPassword" className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="registerPassword"
                    name="registerPassword"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Create a password"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Confirm your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-black py-2 px-4 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Create Account
                </button>
              </form>
            )}

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-gray-800 rounded-md">
              <p className="text-xs text-gray-400 text-center">
                Demo: Use any valid email and password (min 6 characters)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
