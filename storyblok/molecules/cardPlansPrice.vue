<template>
  <div
    class="flex flex-col p-4 lg:p-6 max-w-lg text-center text-white bg-dark border border-white shadow-sm xl:p-8"
  >
    <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
    <div class="flex justify-center items-baseline my-8">
      <span class="mr-2 text-5xl font-extrabold">$29</span>
      <span class="text-gray-500">/month</span>
    </div>
    <p class="text-gray-500 text-light sm:text-lg">
      $19 USD per month, paid annually
    </p>
    <div class="flex items-center justify-center space-x-2 cursor-pointer">
      <p class="text-blue-500 text-light sm:text-lg">Go to annual plan</p>
      <font-awesome-icon
        :icon="['fas', 'arrow-right']"
        style="color: #3482f6"
        class="mt-1"
      />
    </div>
    <button
      class="bg-gradient-to-r from-[#8A2387] to-[#F26021] inline-flex items-center justify-center mt-6"
    >
      <a href="#" class="py-3 text-sm font-medium text-center text-white">
        Get started
      </a>
    </button>
    <!-- List -->
    <ul role="list" class="mb-8 space-y-4 text-left mt-10">
      <li class="flex items-center space-x-3">
        <!-- Icon -->
        <svg
          class="flex-shrink-0 w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>Individual configuration</span>
      </li>
      <li class="flex items-center space-x-3">
        <!-- Icon -->
        <svg
          class="flex-shrink-0 w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>No setup, monthly, or hidden fees</span>
      </li>
      <li class="flex items-center space-x-3">
        <!-- Icon -->
        <svg
          class="flex-shrink-0 w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>Team size: <span class="font-semibold">1 developer</span></span>
      </li>
      <li class="flex items-center space-x-3">
        <!-- Icon -->
        <svg
          class="flex-shrink-0 w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span
          >Premium support: <span class="font-semibold">6 months</span></span
        >
      </li>
      <li class="flex items-center space-x-3">
        <!-- Icon -->
        <svg
          class="flex-shrink-0 w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="line-through text-white/50"
          >Free updates: <span class="font-semibold">6 months</span></span
        >
      </li>
      <li class="flex items-center space-x-3">
        <!-- Icon -->
        <svg
          class="flex-shrink-0 w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="line-through text-white/50"
          >Free updates: <span class="font-semibold">6 months</span></span
        >
      </li>
      <li class="flex items-center space-x-3">
        <!-- Icon -->
        <svg
          class="flex-shrink-0 w-5 h-5 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="line-through text-white/50"
          >Free updates: <span class="font-semibold">6 months</span></span
        >
      </li>
    </ul>
  </div>
</template>
