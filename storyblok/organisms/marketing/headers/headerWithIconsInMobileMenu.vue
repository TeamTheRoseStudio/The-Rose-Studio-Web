<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-2"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Juventud Güímar</span>
          <img
            class="h-16 w-auto"
            :src="blok.logotipo.filename"
            :title="blok.logotipo.title"
            :alt="blok.logotipo.alt"
          />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <div v-for="option in blok.options" :key="option._uid">
          <Popover
            v-if="option.menu.length || option.callsToAction.length"
            class="relative"
          >
            <PopoverButton
              class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              <div v-html="renderRichText(option.title)"></div>
              <ChevronDownIcon
                class="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
              >
                <div class="p-4">
                  <div
                    v-for="item in option.menu"
                    :key="item._uid"
                    class="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div
                      class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <span>
                        <font-awesome-icon
                          :icon="[item.icon.type, item.icon.icon]"
                          class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div class="flex-auto">
                      <NuxtLink
                        v-if="item.link.cached_url"
                        :to="
                          item.link.cached_url == 'inicio'
                            ? '/'
                            : item.link.cached_url
                        "
                        class="block font-semibold text-gray-900"
                      >
                        <div v-html="renderRichText(item.title)"></div>
                        <span class="absolute inset-0" />
                      </NuxtLink>
                      <p
                        class="mt-1 text-gray-600"
                        v-html="renderRichText(item.description)"
                      ></p>
                    </div>
                  </div>
                </div>
                <div
                  class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-200"
                >
                  <div v-for="item in option.callsToAction">
                    <NuxtLink
                      v-if="item.link.cached_url"
                      :key="item._uid"
                      :to="
                        item.link.cached_url == 'inicio'
                          ? '/'
                          : item.link.cached_url
                      "
                      :target="item.link.target"
                      class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <span>
                        <font-awesome-icon
                          :icon="[item.icon.type, item.icon.icon]"
                          class="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                      <div v-html="renderRichText(item.title)"></div>
                    </NuxtLink>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <NuxtLink
            v-else-if="option.link.cached_url"
            :to="
              option.link.cached_url == 'inicio' ? '/' : option.link.cached_url
            "
            :target="option.link.target"
            class="text-sm font-semibold leading-6 text-gray-900"
            v-html="renderRichText(option.title)"
          ></NuxtLink>
        </div>
      </PopoverGroup>
      <div
        class="hidden lg:flex lg:flex-1 lg:justify-end"
        v-if="blok.buttons.length"
      >
        <StoryblokComponent
          v-for="blok_item in blok.buttons"
          class="m-1"
          :key="blok_item._uid"
          :blok="blok_item"
        />
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="p-6">
          <div class="flex items-center justify-between">
            <NuxtLink to="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Juventud Güímar</span>
              <img
                class="h-16 w-auto"
                :src="blok.logotipo.filename"
                :title="blok.logotipo.title"
                :alt="blok.logotipo.alt"
              />
            </NuxtLink>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <div v-for="option in blok.options">
                  <NuxtLink
                    v-if="!option.menu.length && option.link.cached_url"
                    :to="
                      option.link.cached_url == 'inicio'
                        ? '/'
                        : option.link.cached_url
                    "
                    :target="option.link.target"
                    class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    v-html="renderRichText(option.title)"
                  ></NuxtLink>
                </div>
              </div>
              <div class="space-y-2 py-6">
                <div v-for="option in blok.options">
                  <div
                    v-if="option.menu.length"
                    v-for="item in option.menu"
                    :key="item._uid"
                  >
                    <NuxtLink
                      :to="
                        item.link.cached_url == 'inicio'
                          ? '/'
                          : item.link.cached_url
                      "
                      :target="item.link.target"
                      class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      <div
                        class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                      >
                        <span>
                          <font-awesome-icon
                            :icon="[item.icon.type, item.icon.icon]"
                            class="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div v-html="renderRichText(item.title)"></div>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="option in blok.options"
          class="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-200 text-center"
        >
          <div v-for="item in option.callsToAction">
            <NuxtLink
              v-if="item.link.cached_url"
              :to="
                item.link.cached_url == 'inicio' ? '/' : item.link.cached_url
              "
              :target="item.link.target"
              class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
              ><span>
                <font-awesome-icon
                  :icon="[item.icon.type, item.icon.icon]"
                  class="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </span>
              <div v-html="renderRichText(item.title)"></div
            ></NuxtLink>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const props = defineProps({ blok: Object });

const mobileMenuOpen = ref(false);
</script>
