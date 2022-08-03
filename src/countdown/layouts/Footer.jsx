import pattern from '../../assets/images/pattern-hills.svg'

function Footer() {
  return (
    <div>
        <img
                src={pattern}
                alt="hills"
                className="absolute left-0 right-0 bottom-0 w-full h-40 xl:h-52"
            />

            <div
                className="flex justify-center gap-x-10 absolute left-[50%] bottom-[8%] xl:bottom-[10%] translate-x-[-50%]"
            >
                <i className="text-secondary cursor-pointer hover:text-teal-100 transition-all duration-300">
                    <ion-icon name="logo-twitter" size="large"></ion-icon>
                </i>
                <i className="text-secondary cursor-pointer hover:text-teal-100 transition-all duration-300">
                    <ion-icon name="logo-github" size="large"></ion-icon>
                </i>
                <i className="text-secondary cursor-pointer hover:text-teal-100 transition-all duration-300">
                    <ion-icon name="logo-instagram" size="large"></ion-icon>
                </i>
            </div>
    </div>
  )
}

export default Footer