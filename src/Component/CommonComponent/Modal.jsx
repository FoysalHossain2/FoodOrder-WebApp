
'use client'
import { Check } from 'phosphor-react'
import {
  Button,
  Modal,
  ModalAction,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from 'keep-react'

export const ModalComponent = () => {
  return (
    <Modal>
      <ModalAction asChild>
      <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
            Get started
          </button>
      </ModalAction>
      <ModalContent className="max-w-[20rem] lg:max-w-[20rem]">
        <ModalHeader className="mb-6 flex flex-col items-center justify-center space-y-3">
          {/* <div className="flex h-20 w-20 items-center justify-center rounded-full border border-metal-100 bg-metal-50 text-metal-600 dark:border-metal-800 dark:bg-metal-800 dark:text-white">
            <Check size={60} />
          </div> */}
          <div className="space-y-1 text-center">
            <ModalTitle className='text-orange-500'>What kind of food do you like</ModalTitle>
            <ModalDescription>
              <div  className='flex items-center justify-center gap-9 mt-4'>
                <button className=''>Fast Food</button>
                <button>Healthy Food</button>
              </div>
            </ModalDescription>
          </div>
        </ModalHeader>
        <ModalFooter className="justify-center">
          <Button>Confirm</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
