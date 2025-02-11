import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"

import { Navigation } from "../Header"

interface MobileMenuProps {
  isOpenMobileMenu?: boolean
  setIsOpenMobileMenu: (value: boolean) => void
  navigation: Navigation[]
}

export default function MobileMenu({
  isOpenMobileMenu,
  setIsOpenMobileMenu,
  navigation
}: MobileMenuProps) {
  return (
    <Dialog
      open={isOpenMobileMenu}
      onClose={setIsOpenMobileMenu}
      className='relative z-40 lg:hidden'
    >
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0'
      />

      <div className='fixed inset-0 z-40 flex'>
        <DialogPanel
          transition
          className='relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full'
        >
          <div className='flex px-4 pb-4 pt-6'>
            <button
              type='button'
              onClick={() => setIsOpenMobileMenu(false)}
              className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon aria-hidden='true' className='size-6' />
            </button>
          </div>

          <div className='flex flex-col gap-4 border-t border-gray-200 p-4'>
            {navigation.map(({ id, title, href }) => (
              <a key={id} href={href} className='font-medium text-gray-900'>
                {title}
              </a>
            ))}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
