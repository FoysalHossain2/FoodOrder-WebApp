import React from 'react'

const Feature = () => {
  return (
    <div>
        <div class="grid md:grid-cols-3 gap-6 min-h-[164px] py-8 p-16 bg-gradient-to-r from-blue-700 to-blue-400 font-sans overflow-hidden">
            <div class="md:col-span-2">
                <h1 class="text-3xl font-bold text-white">Welcome to ReadymadeUI!</h1>
                <p class="text-base text-gray-200 mt-4">Best tailwind css readymade UI plateform</p>

                <button type="button"
                class="py-3 px-6 text-sm font-semibold bg-white text-blue-600 hover:bg-slate-100 rounded-md mt-8">Get
                Started</button>
            </div>

            <div class="relative max-md:hidden">
                <img src="https://readymadeui.com/readymadeui_banner2.webp" alt="Banner Image"
                class="w-full right-4 top-[-13px] md:absolute skew-x-[-16deg] rotate-2 object-cover" />
            </div>
        </div>
    </div>
  )
}

export default Feature