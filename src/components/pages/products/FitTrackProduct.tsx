import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FitTrackProduct: React.FC = () => {
  const [activeWorkout, setActiveWorkout] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    users: 0,
    workouts: 0,
    calories: 0,
  });

  // Animate stats on mount
  useEffect(() => {
    const targets = { users: 25000, workouts: 150000, calories: 2500000 };
    const duration = 2000;
    const steps = 60;
    const increment = {
      users: targets.users / steps,
      workouts: targets.workouts / steps,
      calories: targets.calories / steps,
    };

    const current = { users: 0, workouts: 0, calories: 0 };
    const timer = setInterval(() => {
      current.users = Math.min(current.users + increment.users, targets.users);
      current.workouts = Math.min(
        current.workouts + increment.workouts,
        targets.workouts
      );
      current.calories = Math.min(
        current.calories + increment.calories,
        targets.calories
      );

      setAnimatedStats({
        users: Math.floor(current.users),
        workouts: Math.floor(current.workouts),
        calories: Math.floor(current.calories),
      });

      if (current.users >= targets.users) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const workoutTypes = [
    {
      icon: '🏃',
      name: 'Cardio',
      color: 'from-red-500 to-pink-600',
      active: true,
    },
    {
      icon: '💪',
      name: 'Strength',
      color: 'from-blue-500 to-indigo-600',
      active: false,
    },
    {
      icon: '🧘',
      name: 'Yoga',
      color: 'from-purple-500 to-violet-600',
      active: false,
    },
    {
      icon: '🚴',
      name: 'Cycling',
      color: 'from-green-500 to-emerald-600',
      active: false,
    },
  ];

  const metrics = [
    {
      label: 'Heart Rate',
      value: '142 BPM',
      trend: '+5%',
      color: 'text-red-500',
    },
    {
      label: 'Calories Burned',
      value: '387 kcal',
      trend: '+12%',
      color: 'text-orange-500',
    },
    {
      label: 'Distance',
      value: '5.2 km',
      trend: '+8%',
      color: 'text-blue-500',
    },
    {
      label: 'Duration',
      value: '42 min',
      trend: '+3%',
      color: 'text-green-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating fitness icons */}
          <div className="absolute top-20 left-20 text-white/10 animate-bounce">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/4 text-white/10 animate-pulse">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          {/* Animated pulse rings */}
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border-4 border-white/10 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 border-4 border-green-400/20 rounded-full animate-pulse"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 backdrop-blur-sm">
                <svg
                  className="w-5 h-5 mr-2 text-green-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-white">
                  Smart Fitness Companion
                </span>
              </div>

              <h1 className="text-6xl font-extrabold tracking-tight mb-8">
                <span className="block">FitTrack</span>
                <span className="block text-green-300">Your AI Trainer</span>
              </h1>

              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Transform your fitness journey with AI-powered workout planning,
                nutrition tracking, and a supportive community. Achieve your
                health goals faster with personalized insights and expert
                guidance.
              </p>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {animatedStats.users.toLocaleString()}+
                  </div>
                  <div className="text-sm text-green-200">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {animatedStats.workouts.toLocaleString()}+
                  </div>
                  <div className="text-sm text-green-200">
                    Workouts Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    {(animatedStats.calories / 1000000).toFixed(1)}M+
                  </div>
                  <div className="text-sm text-green-200">Calories Burned</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative overflow-hidden bg-white text-green-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-2xl">
                  <span className="relative z-10 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Start Your Journey
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </button>
                <button className="group border-2 border-white/30 bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Try Free for 7 Days
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Fitness Dashboard */}
            <div className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-3xl blur-3xl"></div>

                {/* Main Dashboard */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Today's Workout
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Live</span>
                    </div>
                  </div>

                  {/* Workout Types */}
                  <div className="grid grid-cols-4 gap-3 mb-8">
                    {workoutTypes.map((workout, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveWorkout(index)}
                        className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                          activeWorkout === index
                            ? `bg-gradient-to-br ${workout.color} text-white shadow-lg scale-105`
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <div className="text-2xl mb-2">{workout.icon}</div>
                        <div className="text-xs font-medium">
                          {workout.name}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {metrics.map((metric, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">
                            {metric.label}
                          </span>
                          <span
                            className={`text-xs font-medium ${metric.color}`}
                          >
                            {metric.trend}
                          </span>
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Achievement */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-xl animate-bounce">
                  <div className="flex items-center space-x-3 text-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div>
                      <div className="text-sm font-bold">Goal Achieved!</div>
                      <div className="text-xs opacity-90">5K Run Complete</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Fitness Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the future of fitness with our advanced AI algorithms
              that learn from your behavior and adapt to your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* AI Workout Planning */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl mr-6 shadow-lg">
                  🤖
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Smart Workout Planning
                  </h3>
                  <p className="text-lg text-green-600 font-medium">
                    Personalized by AI, Perfected for You
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Our AI analyzes your fitness level, preferences, available
                equipment, and goals to create dynamic workout plans that evolve
                with your progress. No two workouts are the same.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Adaptive difficulty based on performance
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Real-time form correction and guidance
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Injury prevention through smart progression
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Equipment-based workout customization
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Performance Metrics:
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">96%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      10K+
                    </div>
                    <div className="text-sm text-gray-600">Workouts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      22K+
                    </div>
                    <div className="text-sm text-gray-600">Users</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-gray-900">
                    AI Workout Recommendation
                  </h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Live AI</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">
                        Today's Focus: Upper Body
                      </span>
                      <span className="text-sm text-green-600 font-medium">
                        Optimized
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Based on your recovery data and previous workouts
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                          1
                        </div>
                        <span className="font-medium">Push-ups</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        3 sets × 12 reps
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                          2
                        </div>
                        <span className="font-medium">Dumbbell Rows</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        3 sets × 10 reps
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                          3
                        </div>
                        <span className="font-medium">Shoulder Press</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        3 sets × 8 reps
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating AI Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-3 shadow-xl animate-bounce">
                <div className="flex items-center space-x-2 text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-bold">AI Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Tracking Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-gray-900">
                    Nutrition Dashboard
                  </h4>
                  <div className="text-sm text-gray-500">Today</div>
                </div>

                {/* Calorie Progress */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Daily Calories
                    </span>
                    <span className="text-sm text-gray-600">1,847 / 2,200</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full"
                      style={{ width: '84%' }}
                    ></div>
                  </div>
                </div>

                {/* Macro Breakdown */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-lg font-bold text-red-600">45%</div>
                    <div className="text-xs text-gray-600">Carbs</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">30%</div>
                    <div className="text-xs text-gray-600">Protein</div>
                  </div>
                  <div className="text-center p-3 bg-yellow-50 rounded-lg">
                    <div className="text-lg font-bold text-yellow-600">25%</div>
                    <div className="text-xs text-gray-600">Fat</div>
                  </div>
                </div>

                {/* Recent Meals */}
                <div className="space-y-3">
                  <h5 className="font-medium text-gray-900">Recent Meals</h5>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                        🥗
                      </div>
                      <span className="font-medium">Greek Salad</span>
                    </div>
                    <span className="text-sm text-gray-600">320 cal</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        🐟
                      </div>
                      <span className="font-medium">Grilled Salmon</span>
                    </div>
                    <span className="text-sm text-gray-600">450 cal</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-2xl mr-6 shadow-lg">
                  🍎
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Smart Nutrition Tracking
                  </h3>
                  <p className="text-lg text-orange-600 font-medium">
                    2M+ Foods Database
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Track your nutrition effortlessly with our comprehensive food
                database, barcode scanning, and AI-powered meal suggestions. Get
                personalized recommendations based on your fitness goals and
                dietary preferences.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      📱
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Barcode Scanner
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Instantly log foods by scanning barcodes with 98% accuracy
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      🎯
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Macro Tracking
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Precise macro and micronutrient tracking for optimal
                    performance
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      🤖
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      AI Meal Plans
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Personalized meal suggestions based on your goals and
                    preferences
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                      📊
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      Progress Analytics
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Detailed insights into your nutrition patterns and trends
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Social Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Join the FitTrack Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with 25,000+ fitness enthusiasts, share your progress, and
              stay motivated with challenges and achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Community Challenges */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
                🏆
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Community Challenges
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join monthly challenges, compete with friends, and earn badges
                for achieving milestones.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium">30-Day Plank Challenge</span>
                  <span className="text-sm text-purple-600 font-medium">
                    2,847 joined
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span className="font-medium">10K Steps Daily</span>
                  <span className="text-sm text-purple-600 font-medium">
                    5,234 joined
                  </span>
                </div>
              </div>
            </div>

            {/* Achievement System */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border border-yellow-100">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
                🎖️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Achievement Badges
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Unlock 50+ achievement badges as you reach fitness milestones
                and complete challenges.
              </p>
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🔥</div>
                  <div className="text-xs text-gray-600">Streak</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">💪</div>
                  <div className="text-xs text-gray-600">Strong</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="text-xs text-gray-600">Fast</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">🎯</div>
                  <div className="text-xs text-gray-600">Goal</div>
                </div>
              </div>
            </div>

            {/* Social Features */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
                👥
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Social Workouts
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Work out with friends, share progress, and get support from the
                community.
              </p>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="User"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium">
                      Sarah completed 5K run
                    </div>
                    <div className="text-xs text-gray-500">2 hours ago</div>
                  </div>
                  <div className="text-lg">🎉</div>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg">
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="User"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Mike hit new PR!</div>
                    <div className="text-xs text-gray-500">4 hours ago</div>
                  </div>
                  <div className="text-lg">💪</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">
              Ready to Transform Your Fitness Journey?
            </h2>
            <p className="text-xl text-green-100 mb-12 leading-relaxed">
              Join 25,000+ users who have achieved their fitness goals with
              FitTrack's AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white text-green-900 px-12 py-5 text-lg font-bold hover:bg-green-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Start Your Fitness Journey
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/20 bg-white/10 px-12 py-5 text-lg font-bold text-white hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                Explore All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FitTrackProduct;
