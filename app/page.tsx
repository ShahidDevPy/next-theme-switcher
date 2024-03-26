import Image from 'next/image'

import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import ProductSize from './component/ProductSize'

import shoe from '@/public/images/shoe.webp'

export default function Home() {
    return (
        <section className='py-36'>
            <div className=" h-16 w-full">
                This is a styled div with custom background color and text color.
            </div>
            <div className="bg-baseThree h-16 w-full my-30">
                This is a styled div with custom background color and text color with tailwind.
            </div>
            <div className='container flex items-center justify-center bg-baseFour'>
                <Card className='py-4 lg:w-3/4 xl:w-1/2'>
                    <CardBody className='overflow-visible py-2'>
                        <div className='flex gap-6 bg-baseThree'>
                            <Image alt='Shoe' className='flex-1 object-cover' src={shoe}/>
                            <div className='flex-1'>
                                <h2 className='text-lg font-bold uppercase'>
                                    Nike Adapt BB 2.0
                                </h2>
                                <p className='text-sm text-default-500'>
                                    Consistent, customized fit, game-changing.
                                </p>

                                <div className='mb-6 mt-2 flex gap-3 bg-bg'>dss
                                    <span className='font-bold'>$279.79</span>
                                    <span className='text-default-600 line-through'>$350</span>
                                    <span className='primary-color'>20% off</span>
                                </div>

                                <ProductSize/>

                                <div className='mt-6 flex gap-6'>
                                    <Button color='primary'>Buy now</Button>
                                    <Button color='primary' variant='bordered' radius='full'>
                                        Add to bag
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </section>
    )
}
