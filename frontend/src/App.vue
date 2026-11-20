<script setup lang="ts">
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  ClipboardDocumentListIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from '@heroicons/vue/24/outline'
import { ShoppingCartIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="app-shell">
    <header
      class="sticky top-0 z-20 border-b border-zinc-200 bg-white/85 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/85"
    >
      <div class="section-px flex h-16 items-center justify-between">
        <a class="font-display text-2xl font-bold tracking-tight uppercase" href="#"
          >Sneaker<span class="text-brand">snee</span>
        </a>
        <nav class="flex items-center gap-1 sm:gap-2">
          <!-- TODO: <a href="#">User</a> -->
          <a href="#" class="nav-link">
            <ClipboardDocumentListIcon class="size-5" />
            <span class="hidden sm:inline">Orders</span>
          </a>
          <a href="#" class="nav-link">
            <HeartIcon class="size-5" />
            <span class="hidden sm:inline">Favorites</span>
          </a>
          <a href="#" class="nav-link">
            <ShoppingBagIcon class="size-5" />
            <span class="hidden sm:inline">Cart</span>
            <span
              class="bg-brand ml-0.5 rounded-full px-1.5 py-0.5 text-[0.6875rem] leading-none font-bold text-white"
              >2</span
            >
          </a>
        </nav>
      </div>
      <div
        class="section-px flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 py-3 dark:border-zinc-900"
      >
        <div class="flex items-center gap-2">
          <button type="button" class="btn-secondary">
            <AdjustmentsHorizontalIcon class="size-5 text-zinc-500" />
            <span>Categories</span>
          </button>
          <button type="button" class="btn-secondary">
            <span>Order by</span>
            <ChevronDownIcon class="size-4 text-zinc-500" />
          </button>
        </div>

        <div class="relative w-full sm:w-64 md:w-80">
          <MagnifyingGlassIcon
            class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-zinc-400"
          />
          <input
            type="search"
            placeholder="Search kicks or blades..."
            class="focus:border-brand focus:ring-brand/20 w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2 pr-3 pl-9 text-sm transition outline-none focus:bg-white focus:ring-2 dark:border-zinc-800 dark:bg-zinc-900 dark:focus:bg-zinc-950"
          />
        </div>
      </div>
    </header>

    <main class="section-px flex-1 py-8">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="n in 8" :key="n" class="card-base group flex flex-col justify-between p-4">
          <div>
            <div
              class="mb-4 flex aspect-square items-center justify-center rounded-xl bg-zinc-200/60 text-sm text-zinc-400 dark:bg-zinc-800"
            >
              Prod image
            </div>
            <span class="text-brand text-xs font-semibold tracking-wider uppercase">Category</span>
            <h2 class="mt-1 font-semibold">Prod name</h2>
            <p class="mt-1 line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
              Description. Ideal for something. This is better than everything else. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Illum, itaque.
            </p>
          </div>
          <div
            class="mt-4 flex items-center justify-between border-t border-zinc-200/70 pt-3 dark:border-zinc-800"
          >
            <span class="text-lg font-bold">$159</span>
            <button type="button" class="btn-primary px-3.5 py-2 text-xs">
              <ShoppingCartIcon class="size-4 shrink-0" />
              <span>Add to cart</span>
            </button>
          </div>
        </article>
      </div>
    </main>

    <footer
      class="section-px mt-auto border-t border-zinc-200 py-8 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400"
    >
      <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <span class="font-display font-bold text-zinc-900 uppercase dark:text-zinc-100"
          >Sneaker<span class="text-brand">snee</span> © 2026</span
        >
        <div class="flex flex-wrap justify-center gap-6">
          <a href="#" class="hover:text-zinc-900 dark:hover:text-zinc-100">About</a>
          <a href="#" class="hover:text-zinc-900 dark:hover:text-zinc-100">Contacts</a>
          <a href="#" class="hover:text-zinc-900 dark:hover:text-zinc-100">Delivery</a>
          <a href="#" class="hover:text-zinc-900 dark:hover:text-zinc-100">Return policy</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
