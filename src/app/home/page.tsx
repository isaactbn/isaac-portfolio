import styles from './home.module.css';
import Image from "next/image";

export default function Home() {
  const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]

  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]

  const products = [
    {
      id: 1,
      name: 'SIMPAN by DPLK Indolife',
      href: '#',
      desc: 'As insurance company brand powered by DPLK Indolife, SIMPAN focusing on a retiring fund savings. Participant savings will get maximum growth through the fund placement, such as deposits at the largest Bank and debentures with AAA rating.',
      imageSrc: '/images/simpan4.png',
      imageAlt: '/images/paranje.png',
    },
    {
      id: 1,
      name: 'Paranje',
      href: '#',
      desc: 'Paranje focusing on chicken broiler partnership under the brand of Paranje5000 & Paranje500. Content Management System (CMS) is a web platform was built to manage all data partner on a national scale and record all partner activity.',
      imageSrc: '/images/paranje2.png',
      imageAlt: '/images/paranje.png',
    },
    {
      id: 2,
      name: 'Jaga Hujan Dashboard',
      href: '#',
      desc: 'As insurance company brand powered by JagaDiri Insurance, JagaHujan is a fare protection of trip services uses the Grab or Gojek transportation when it rains.',
      imageSrc: '/images/jaga-hujan3.png',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    }
  ]

  return (
    <div className='flex flex-col gap-12 py-12 px-12'>
      <header className={`w-full rounded-lg py-8 px-8 ${styles.card}`}>
        <div className="w-full mx-auto lg:mx-0">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Isaac Tambunan - Portofolio</h1>
          <p className="mt-2 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            iOS Developer | Frontend Engineer
          </p>
        </div>
      </header>
      <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className={`w-full py-8 px-8 ${styles.card}`}>
          <h2>
            About me
          </h2>
          <div className='text-white'>
            With four years of experience developing high-performance iOS and web applications, I specialize in crafting seamless digital experiences that enhance user engagement and drive business growth. As a graduate of the Apple Developer Academy, I have honed my expertise in Swift, UIKit, SwiftUI, and modern app development best practices. My training emphasized innovation, collaboration, and user-centric design, enabling me to deliver intuitive and scalable solutions. Passionate about technology and problem-solving, I thrive in fast-paced environments that demand creativity and technical excellence.
          </div>
        </div>
        <div className={`w-full py-8 px-8 ${styles.card}`}>
          <h2>
            Project
          </h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className={`w-full py-4 px-4 ${styles.card}`}>
                <a href={product.href} className="group">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-contain group-hover:opacity-75 xl:aspect-7/8"
                  />
                  <h3 className={`mt-4 ${styles.colorWhite}`}>{product.name}</h3>
                  <p className={`mt-1 ${styles.colorWhite}`}>{product.desc}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        set footer
      </footer>
    </div>
  );
}
